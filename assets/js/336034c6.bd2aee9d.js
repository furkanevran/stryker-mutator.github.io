"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[885],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=o,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||a;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3569:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},assets:function(){return s},toc:function(){return u},default:function(){return c}});var n=r(7462),o=(r(7294),r(3905));const a={slug:"stryker-version-3",title:"Announcing Stryker 3.0",author:"Nico Jansen",author_title:"Stryker Team",author_url:"https://github.com/nicojs",author_image_url:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4",tags:["stryker"]},i=void 0,l={permalink:"/blog/stryker-version-3",editUrl:"https://github.com/stryker-mutator/stryker-mutator.github.io/edit/develop/blog/2020-03-11-stryker-version-3.md",source:"@site/blog/2020-03-11-stryker-version-3.md",title:"Announcing Stryker 3.0",description:"With version 3 of Stryker, we've been focussing on usability. We also did some smaller changes worth pointing out.",date:"2020-03-11T00:00:00.000Z",formattedDate:"March 11, 2020",tags:[{label:"stryker",permalink:"/blog/tags/stryker"}],readingTime:2.755,truncated:!0,authors:[{name:"Nico Jansen",title:"Stryker Team",url:"https://github.com/nicojs",imageURL:"https://avatars3.githubusercontent.com/u/1828233?s=400&u=fec18ad3776aaafec54c49bbd7173a841ae7ea59&v=4"}],prevItem:{title:"Announcing Stryker 100% mode",permalink:"/blog/announcing-100-mode"},nextItem:{title:"Host your mutation testing report",permalink:"/blog/stryker-dashboard-host-your-mutation-testing-report"}},s={authorsImageUrls:[void 0]},u=[{value:"\ud83d\ude80 Migration",id:"-migration",children:[],level:2},{value:"\ud83d\udcc3 New config format",id:"-new-config-format",children:[],level:2},{value:"\ud83d\udc53 IntelliSense in configuration",id:"-intellisense-in-configuration",children:[],level:2},{value:"\ud83c\udfa8 HTML reporter by default",id:"-html-reporter-by-default",children:[],level:2},{value:"\ud83d\udd25 Breaking changes",id:"-breaking-changes",children:[],level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"With version 3 of Stryker, we've been focussing on usability. We also did some smaller changes worth pointing out.\nFor a full list of changes, please read ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/stryker-mutator/stryker-js/blob/master/CHANGELOG.md#300-2020-03-11"},"our changelog"),"."),(0,o.kt)("p",null,"If you're new to mutation testing, it's a way to measure how effective your tests are at finding bugs.\nPlease take a look at ",(0,o.kt)("a",{parentName:"p",href:"/example"},"our RoboBar \ud83e\udd16\ud83c\udf77 example")," and see how even 100% code coverage doesn't tell the whole story.\nMutation testing is the only way to make sure your code is tested."),(0,o.kt)("h2",{id:"-migration"},"\ud83d\ude80 Migration"),(0,o.kt)("p",null,"Migrating to the latest major version is easy! Just update all ",(0,o.kt)("inlineCode",{parentName:"p"},"@stryker-mutator")," dependencies to at least 3.0.0.\nPlease note that Node 8 is ",(0,o.kt)("em",{parentName:"p"},"no longer supported"),". For other breaking changes, please read the ",(0,o.kt)("a",{parentName:"p",href:"#breaking-changes"},"\ud83d\udd25 Breaking changes")),(0,o.kt)("p",null,"If you're new to Stryker, please see ",(0,o.kt)("a",{parentName:"p",href:"/stryker/quickstart"},"our quickstart"),". Have fun with mutation testing!"),(0,o.kt)("h2",{id:"-new-config-format"},"\ud83d\udcc3 New config format"),(0,o.kt)("p",null,"We've always supported a stryker.conf.js file for your Stryker options.\nIn that file, you had to export a function that would be executed by Stryker\nin which you could set your config options."),(0,o.kt)("p",null,"Although this is still allowed, it is unnecessarily complex. That's why Stryker now supports direct\nobject exports."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  // Stryker config here\n};\n")),(0,o.kt)("p",null,"Stryker also doesn't force the ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," extension anymore. This allows you to write your\nconfig in a ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," file (or, if you're feeling adventures, you could also\nuse something like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TypeStrong/ts-node"},"ts-node")," or ",(0,o.kt)("a",{parentName:"p",href:"https://coffeescript.org/#nodejs-usage"},"CoffeeScript/register")," to use other file formats)."),(0,o.kt)("h2",{id:"-intellisense-in-configuration"},"\ud83d\udc53 IntelliSense in configuration"),(0,o.kt)("p",null,"With the rising popularity of ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSON schema"),"\n(and the code editors supporting it) it's more common to use JSON files for configuration. That's why we now also support\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"stryker.conf.json")," format. By pointing the ",(0,o.kt)("inlineCode",{parentName:"p"},"$schema")," key to ",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/stryker-mutator/stryker/master/packages/api/schema/stryker-core.json"},"our ",(0,o.kt)("inlineCode",{parentName:"a"},"stryker-core.json")," schema file"),", you'll be able to get IntelliSense\nin your code editor of choice."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IntelliSense",src:r(5582).Z})),(0,o.kt)("p",null,"This now also the default generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"npx stryker init"),"."),(0,o.kt)("p",null,"If you still want to use the JS file format, it is also possible to get IntelliSense,\nas long as your editor supports TypeScript notation in JSDoc."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"/**\n * @type {import('@stryker-mutator/api/core').StrykerOptions}\n */\nmodule.exports = {\n  // IntelliSense here!\n};\n")),(0,o.kt)("h2",{id:"-html-reporter-by-default"},"\ud83c\udfa8 HTML reporter by default"),(0,o.kt)("p",null,"We've noticed that most developers like the HTML reporter a lot.\nHowever, it was always a separate package. This was originally done\nbecause it depended on a somewhat expensive template library (namely ",(0,o.kt)("a",{parentName:"p",href:"https://handlebarsjs.com/"},"handlebars"),").\nSince the release of the ",(0,o.kt)("a",{parentName:"p",href:"/blog/2019-04-03/one-mutation-testing-html-report"},"mutation testing HTML report"),",\nthis is no longer the case."),(0,o.kt)("p",null,"That's why Stryker now comes with the HTML reporter included. It is also enabled by default. You can still disable it\nby overriding the ",(0,o.kt)("inlineCode",{parentName:"p"},'"reporters"')," property manually."),(0,o.kt)("h2",{id:"-breaking-changes"},"\ud83d\udd25 Breaking changes"),(0,o.kt)("p",null,"This major release comes with some breaking changes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Platform"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/2028"},"#2028")," NodeJS version 10 or higher is now required to run Stryker."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Core"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/issues/1996"},"#1996")," Always exit with exit code 1 if an error of any kind occurs (previously there were scenarios where it didn't fail)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/2039"},"#2039")," The Dashboard reporter (if enabled) will now default to uploading the full report."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"HTML Reporter"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/2036"},"#2036")," The HTML reporter is now included in the Stryker core. You should remove the dependency on ",(0,o.kt)("inlineCode",{parentName:"li"},'"@stryker-mutator/html-reporter"'),".\nPlease override the ",(0,o.kt)("inlineCode",{parentName:"li"},'"reporters"')," option to disable the reporter."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Karma runner"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/2048"},"#2048")," Always run with ",(0,o.kt)("inlineCode",{parentName:"li"},"client.clearContext")," to prevent a race condition."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/stryker-mutator/stryker-js/pull/2035"},"#2035")," Use ",(0,o.kt)("inlineCode",{parentName:"li"},"ChromeHeadless")," by default instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"PhantomJS"),".")))))}c.isMDXComponent=!0},5582:function(e,t,r){t.Z=r.p+"assets/images/intellisense-7aeebc2cffd9eafa04fe131a733b3908.png"}}]);