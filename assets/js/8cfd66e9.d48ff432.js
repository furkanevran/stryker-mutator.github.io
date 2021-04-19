(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{142:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),o=(t(0),t(196));const i={title:"Create a plugin",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md"},a={unversionedId:"stryker-js/guides/create-a-plugin",id:"stryker-js/guides/create-a-plugin",isDocsHomePage:!1,title:"Create a plugin",description:"You can extend Stryker with the following plugin kinds:",source:"@site/docs/stryker-js/guides/create-a-plugin.md",sourceDirName:"stryker-js/guides",slug:"/stryker-js/guides/create-a-plugin",permalink:"/docs/stryker-js/guides/create-a-plugin",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md",version:"current",frontMatter:{title:"Create a plugin",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/guides/create-a-plugin.md"},sidebar:"docs",previous:{title:"NodeJS",permalink:"/docs/stryker-js/guides/nodejs"},next:{title:"Introduction",permalink:"/docs/stryker-net/Introduction"}},s=[{value:"Creating a plugin",id:"creating-a-plugin",children:[]},{value:"Declaring your plugin",id:"declaring-your-plugin",children:[]},{value:"Test your plugin",id:"test-your-plugin",children:[]},{value:"Dependency injection",id:"dependency-injection",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}],u={toc:s};function l({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can extend Stryker with the following plugin kinds:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"export enum PluginKind {\n  Checker = 'Checker',\n  TestRunner = 'TestRunner',\n  Reporter = 'Reporter',\n}\n")),Object(o.b)("p",null,"They are loaded using the ",Object(o.b)("a",{parentName:"p",href:"../configuration#plugins-string"},Object(o.b)("inlineCode",{parentName:"a"},"plugins")," configuration option")),Object(o.b)("p",null,"Each plugin has it's own job to do. For inspiration, check out the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/tree/master/packages"},"stryker monorepo"),"."),Object(o.b)("h2",{id:"creating-a-plugin"},"Creating a plugin"),Object(o.b)("p",null,"Creating plugins is best done with typescript, as that will help you a lot with type safety and intellisense.\nWe provide the ",Object(o.b)("inlineCode",{parentName:"p"},"@stryker-mutator/api")," dependency on the types and basic helper functionality. This should be installed as a ",Object(o.b)("inlineCode",{parentName:"p"},"dependency")," of your plugin. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npm install @stryker-mutator/api\n")),Object(o.b)("p",null,"Next, you need to create a class that ",Object(o.b)("em",{parentName:"p"},"is the actual plugin"),". For example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { TestRunner, DryRunResult, DryRunOptions, MutantRunOptions, MutantRunResult } from '@stryker-mutator/api/test-runner';\n\nclass FooTestRunner implements TestRunner {\n  public init(): Promise<void> {\n    // TODO: Implement or remove\n  }\n  \n  public dryRun(options: DryRunOptions): Promise<DryRunResult> {\n   // TODO: Implement\n  }\n  \n  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n    // TODO: Implement\n  }\n  \n  public dispose(): Promise<void> {\n   // TODO: Implement or remove\n  }\n}\n")),Object(o.b)("p",null,"In this example, a ",Object(o.b)("inlineCode",{parentName:"p"},"TestRunner")," plugin is constructed. Each plugin kind has it's own interface, so it is easy to get started with a skeleton implementation."),Object(o.b)("p",null,"After you've created your skeleton plugin, you're ready to declare it."),Object(o.b)("h2",{id:"declaring-your-plugin"},"Declaring your plugin"),Object(o.b)("p",null,"In order to make your plugin known to Stryker, you should export the declaration of your plugin. You can either declare it as a factory method or a class.\nStryker will take care of creating your plugin implementation at the correct moment in the Stryker lifecycle. "),Object(o.b)("p",null,"A class example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport FooTestRunner from './foo-test-runner';\nimport { PluginKind, declareClassPlugin } from '@stryker-mutator/api/plugin';\n\nexport const strykerPlugins = [declareClassPlugin(PluginKind.TestRunner, 'foo', FooTestRunner)];\n")),Object(o.b)("p",null,"A factory method example (useful when you want to inject additional values/classes into the DI system):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"// index.ts\nimport FooTestRunner from './foo-test-runner';\nimport FooTestRunnerConfigFileLoader from './foo-test-runner-config-file-loader';\nimport { configLoaderToken, processEnvToken, fooTestRunnerVersionToken } from './plugin-tokens';\nimport { declareFactoryPlugin, PluginKind } from '@stryker-mutator/api/plugin';\n\nconst createFooTestRunner = createFooTestRunnerFactory();\n\nexport function createFooTestRunnerFactory() {\n  createFooTestRunner.inject = tokens(commonTokens.injector);\n  function createFooTestRunner(injector: Injector<PluginContext>): FooTestRunner {\n    return injector\n      .provideValue(processEnvToken, process.env)\n      .provideValue(fooTestRunnerVersionToken, require('fooTestRunner/package.json').version as string)\n      .provideClass(configLoaderToken, FooTestRunnerConfigFileLoader)\n      .injectClass(FooTestRunner);\n  }\n  return createFooTestRunner;\n}\n\nexport const strykerPlugins = [declareFactoryPlugin(PluginKind.TestRunner, 'foo', createFooTestRunner)];\n")),Object(o.b)("p",null,"Now you're ready to test out your plugin!"),Object(o.b)("h2",{id:"test-your-plugin"},"Test your plugin"),Object(o.b)("p",null,"It is easy to test your plugin on a test project by loading it via the plugins section."),Object(o.b)("p",null,"For example, when your test project resides next to your plugin implementation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"// stryker.conf.js\nmodule.exports = {\n  testRunner: 'foo', // name of your test runner\n  plugins: ['@stryker-mutator/*', require.resolve('../my-plugin')], // load your test runner here\n  concurrency: 1, // useful for debugging your \n  testRunnerNodeArgs: ['--inspect'] // useful for debugging your test runner plugin\n};\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note: Be sure you have compiled your TypeScript correctly.")),Object(o.b)("p",null,"You can test it out with Stryker:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"npx stryker run\n")),Object(o.b)("p",null,"Test runner and checker plugins are actually created in its own child process. Therefore you cannot debug them directly. Instead you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"testRunnerNodeArgs: ['--inspect']")," to debug your test runner plugin (an equivalent for the checker plugin isn't created yet, please let us know if you need it)."),Object(o.b)("p",null,"After you've verified that your plugin loads correctly, it is recommended to create your own integration tests and not rely on Stryker to test it out each time. This will allow you to develop your plugin faster."),Object(o.b)("h2",{id:"dependency-injection"},"Dependency injection"),Object(o.b)("p",null,"Stryker uses ",Object(o.b)("a",{parentName:"p",href:"https://github.com/nicojs/typed-inject#readme"},"typed-inject")," as a ",Object(o.b)("a",{parentName:"p",href:"https://medium.com/@jansennico/advanced-typescript-type-safe-dependency-injection-873426e2cc96"},"dependency injection (DI) framework"),".\nIt is recommended that you also use this as your DI framework inside the plugin."),Object(o.b)("p",null,"See this example below. "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"import { StrykerOptions } from '@stryker-mutator/api/core';\nimport { Logger } from '@stryker-mutator/api/logging';\nimport { commonTokens, PluginContext } from '@stryker-mutator/api/plugin';\nimport { TestRunner, DryRunResult, DryRunOptions, MutantRunOptions, MutantRunResult } from '@stryker-mutator/api/test-runner';\nimport * as pluginTokens from './plugin-tokens';\nimport FooTestRunnerConfigFileLoader from './foo-test-runner-config-file-loader';\n\nexport class FooTestRunner implements TestRunner {\n  public static inject = [\n    commonTokens.logger,\n    commonTokens.options,\n    pluginTokens.configLoader,\n    pluginTokens.processEnv,\n    pluginTokens.fooTestRunnerVersion\n  ] as const;\n  \n  constructor(\n    private readonly log: Logger,\n    private readonly options: StrykerOptions,\n    private readonly configLoader: FooTestRunnerConfigFileLoader,\n    private readonly processEnvRef: NodeJS.ProcessEnv,\n    private readonly fooTestRunnerVersion: string\n  ) { }\n\n  public init(): Promise<void> {\n    // TODO: Implement or remove\n  }\n  \n  public dryRun(options: DryRunOptions): Promise<DryRunResult> {\n   // TODO: Implement\n  }\n  \n  public mutantRun(options: MutantRunOptions): Promise<MutantRunResult> {\n    // TODO: Implement\n  }\n  \n  public dispose(): Promise<void> {\n   // TODO: Implement or remove\n  }\n}\n\n\nexport function fooTestRunnerFactory(injector: Injector<PluginContext>) {\n  return injector\n    .provideValue(pluginTokens.processEnv, process.env)\n    .provideValue(pluginTokens.fooTestRunnerVersion, require('foo/package.json').version as string)\n    .provideClass(pluginTokens.configLoader, FooTestRunnerConfigFileLoader)\n    .injectClass(FooTestRunner);\n}\nfooTestRunnerFactory.inject = [commonTokens.injector] as const;\n")),Object(o.b)("p",null,"In this example, you can see that some tokens are loaded from ",Object(o.b)("inlineCode",{parentName:"p"},"commonTokens")," and some are loaded from ",Object(o.b)("inlineCode",{parentName:"p"},"pluginTokens"),"."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"commonTokens"),": These contain the tokens belonging to values Stryker itself provide."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pluginTokens"),": These are an example of tokens you can provide yourself in your plugin. The ",Object(o.b)("inlineCode",{parentName:"li"},"fooTestRunnerFactory")," factory method is an example of where the tokens are provided.")),Object(o.b)("p",null,"This is type-safe. When you declare your plugin, TypedInject will validate that you don't inject something that cannot be resolved at runtime."),Object(o.b)("h2",{id:"whats-next"},"What's next?"),Object(o.b)("p",null,"If you have a plugin that you think other users might be able to benefit from, or you simply need some help, please let us know on ",Object(o.b)("a",{parentName:"p",href:"https://join.slack.com/t/stryker-mutator/shared_invite/enQtOTUyMTYyNTg1NDQ0LTU4ODNmZDlmN2I3MmEyMTVhYjZlYmJkOThlNTY3NTM1M2QxYmM5YTM3ODQxYmJjY2YyYzllM2RkMmM1NjNjZjM"},"Slack"),". "),Object(o.b)("p",null,"We're always looking to promote user-created plugins \ud83d\udc97"))}l.isMDXComponent=!0},196:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return g}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),c=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,g=p["".concat(a,".").concat(m)]||p[m]||d[m]||i;return t?o.a.createElement(g,s(s({ref:n},l),{},{components:t})):o.a.createElement(g,s({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);