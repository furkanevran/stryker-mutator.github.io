"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[485],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2996:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var o=n(7462),r=(n(7294),n(3905));const a={title:"Mocha Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/mocha-runner.md"},i=void 0,p={unversionedId:"stryker-js/mocha-runner",id:"stryker-js/mocha-runner",isDocsHomePage:!1,title:"Mocha Runner",description:"A plugin to use Mocha in Stryker",source:"@site/docs/stryker-js/mocha-runner.md",sourceDirName:"stryker-js",slug:"/stryker-js/mocha-runner",permalink:"/docs/stryker-js/mocha-runner",editUrl:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/mocha-runner.md",tags:[],version:"current",frontMatter:{title:"Mocha Runner",custom_edit_url:"https://github.com/stryker-mutator/stryker-js/edit/master/docs/mocha-runner.md"},sidebar:"docs",previous:{title:"Karma Runner",permalink:"/docs/stryker-js/karma-runner"},next:{title:"TypeScript Checker",permalink:"/docs/stryker-js/typescript-checker"}},l=[{value:"Install",id:"install",children:[],level:2},{value:"Peer dependencies",id:"peer-dependencies",children:[],level:2},{value:"Configuring",id:"configuring",children:[{value:"<code>mochaOptions.spec</code> [<code>string</code> or <code>string[]</code>]",id:"mochaoptionsspec-string-or-string",children:[],level:3},{value:"<code>mochaOptions.config</code> string | undefined",id:"mochaoptionsconfig-string--undefined",children:[],level:3},{value:"<code>mochaOptions.package</code> string | undefined",id:"mochaoptionspackage-string--undefined",children:[],level:3},{value:"<code>mochaOptions.opts</code> string | false",id:"mochaoptionsopts-string--false",children:[],level:3},{value:"<code>mochaOptions.grep</code> RegExp",id:"mochaoptionsgrep-regexp",children:[],level:3},{value:"<code>mochaOptions.ui</code> string",id:"mochaoptionsui-string",children:[],level:3},{value:"<code>mochaOptions.extension</code> string",id:"mochaoptionsextension-string",children:[],level:3},{value:"<code>mochaOptions.require</code> [<code>string[]</code>]",id:"mochaoptionsrequire-string",children:[],level:3},{value:"<code>mochaOptions.async-only</code> boolean",id:"mochaoptionsasync-only-boolean",children:[],level:3},{value:"<code>mochaOptions.timeout</code> number",id:"mochaoptionstimeout-number",children:[],level:3}],level:2}],s={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A plugin to use Mocha in Stryker"),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Install @stryker-mutator/mocha-runner locally within your project folder, like so:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i --save-dev @stryker-mutator/mocha-runner\n")),(0,r.kt)("h2",{id:"peer-dependencies"},"Peer dependencies"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@stryker-mutator/mocha-runner")," is a plugin for ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker")," to enable ",(0,r.kt)("inlineCode",{parentName:"p"},"mocha")," as a test runner.\nAs such, you should make sure you have the correct versions of its dependencies installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mocha")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@stryker-mutator/core"))),(0,r.kt)("h2",{id:"configuring"},"Configuring"),(0,r.kt)("p",null,"You can configure the mocha test runner in the ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"stryker.conf.js"),") file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "testRunner": "mocha",\n  "coverageAnalysis": "perTest",\n  "mochaOptions": {\n    "spec": [ "test/**/*.js" ],\n    "config": "path/to/mocha/config/.mocharc.json",\n    "package": "path/to/custom/package/package.json",\n    "opts": "path/to/custom/mocha.opts",\n    "ui": "bdd",\n    "require": [ "babel-register" ],\n    "async-only": false,\n    "grep": ".*"\n  }\n}\n')),(0,r.kt)("p",null,"When using Mocha version 6, @stryker-mutator/mocha-runner will use ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/api/module-lib_cli_options.html#.loadOptions"},"mocha's internal file loading mechanism")," to load your mocha configuration.\nSo feel free to ",(0,r.kt)("em",{parentName:"p"},"leave out the mochaOptions entirely")," if you're using one of the ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#configuring-mocha-nodejs"},"default file locations"),"."),(0,r.kt)("p",null,"Alternatively, use ",(0,r.kt)("inlineCode",{parentName:"p"},"['no-config']: true"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"['no-package']: true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"['no-opts']: true")," to ignore the default mocha config, default mocha package.json and default mocha opts locations respectively."),(0,r.kt)("h3",{id:"mochaoptionsspec-string-or-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.spec")," [",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"string[]"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},'"test/**/*.js"')),(0,r.kt)("p",null,"Choose which files to include. This is comparable to ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#the-test-directory"},"mocha's test directory")," although there is no support for ",(0,r.kt)("inlineCode",{parentName:"p"},"--recursive"),"."),(0,r.kt)("p",null,"If you want to load all files recursively: use a globbing expression (",(0,r.kt)("inlineCode",{parentName:"p"},"'test/**/*.js'"),"). If you want to decide on the order of files, use multiple globbing expressions. For example: use ",(0,r.kt)("inlineCode",{parentName:"p"},"['test/helpers/**/*.js', 'test/unit/**/*.js']")," if you want to make sure your helpers are loaded before your unit tests."),(0,r.kt)("h3",{id:"mochaoptionsconfig-string--undefined"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.config")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," | ",(0,r.kt)("inlineCode",{parentName:"h3"},"undefined"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Explicit path to the ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#-config-path"},"mocha config file")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"New since Mocha 6")),(0,r.kt)("h3",{id:"mochaoptionspackage-string--undefined"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.package")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," | ",(0,r.kt)("inlineCode",{parentName:"h3"},"undefined"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Specify an explicit path to a package.json file (ostensibly containing configuration in a mocha property).\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#-package-path"},"https://mochajs.org/#-package-path"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"New since Mocha 6")),(0,r.kt)("h3",{id:"mochaoptionsopts-string--false"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.opts")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"string")," | false]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},'"test/mocha.opts"')),(0,r.kt)("p",null,"Specify a ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#mochaopts"},"'mocha.opts' file")," to be loaded. Options specified directly in your stryker.conf.js file will overrule options from the 'mocha.opts' file. Disable loading of an additional mocha.opts file with ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,r.kt)("p",null,"The only supported mocha options are used: ",(0,r.kt)("inlineCode",{parentName:"p"},"--ui"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--require"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--async-only"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--timeout"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--grep")," (or their short form counterparts). Others are ignored by the @stryker-mutator/mocha-runner."),(0,r.kt)("h3",{id:"mochaoptionsgrep-regexp"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.grep")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"RegExp"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Specify a mocha ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#grep"},(0,r.kt)("inlineCode",{parentName:"a"},"grep"))," command, to single out individual tests."),(0,r.kt)("h3",{id:"mochaoptionsui-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.ui")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"string"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Set the name of your ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#-u---ui-name"},"mocha ui")),(0,r.kt)("h3",{id:"mochaoptionsextension-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.extension")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"string"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Set mocha's ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#-extension-ext"},"--extension")," property."),(0,r.kt)("h3",{id:"mochaoptionsrequire-string"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.require")," [",(0,r.kt)("inlineCode",{parentName:"h3"},"string[]"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"[]")),(0,r.kt)("p",null,"Set mocha's ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#-r---require-module-name"},(0,r.kt)("inlineCode",{parentName:"a"},"require")," option")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note:")," if you want to require ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/esm"},(0,r.kt)("inlineCode",{parentName:"a"},"esm")),", you will need to use ",(0,r.kt)("inlineCode",{parentName:"p"},'"testRunnerNodeArgs": ["--require", "esm"]')," instead. See ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/issues/3014"},"#3014")," for more information."),(0,r.kt)("h3",{id:"mochaoptionsasync-only-boolean"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.async-only")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"boolean"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false")),(0,r.kt)("p",null,"Set mocha's ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#usage"},(0,r.kt)("inlineCode",{parentName:"a"},"asyncOnly")," option")),(0,r.kt)("h3",{id:"mochaoptionstimeout-number"},(0,r.kt)("inlineCode",{parentName:"h3"},"mochaOptions.timeout")," ","[",(0,r.kt)("inlineCode",{parentName:"h3"},"number"),"]"),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined")),(0,r.kt)("p",null,"Set mocha's ",(0,r.kt)("a",{parentName:"p",href:"https://mochajs.org/#-t---timeout-ms"},(0,r.kt)("inlineCode",{parentName:"a"},"timeout")," option")))}c.isMDXComponent=!0}}]);