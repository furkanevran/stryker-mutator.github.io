"use strict";(self.webpackChunkstryker_mutator_github_io=self.webpackChunkstryker_mutator_github_io||[]).push([[2445],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),u=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=u(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return n?r.createElement(h,o(o({ref:e},m),{},{components:n})):r.createElement(h,o({ref:e},m))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7004:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(7462),a=(n(7294),n(3905));const i={title:"Mutant states and metrics",custom_edit_url:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/mutant-states-and-metrics.md"},o=void 0,s={unversionedId:"mutation-testing-elements/mutant-states-and-metrics",id:"mutation-testing-elements/mutant-states-and-metrics",isDocsHomePage:!1,title:"Mutant states and metrics",description:"This page should shed some light on the different outcomes a mutant can have and the different metrics you'll find in any given mutation testing report.",source:"@site/docs/mutation-testing-elements/mutant-states-and-metrics.md",sourceDirName:"mutation-testing-elements",slug:"/mutation-testing-elements/mutant-states-and-metrics",permalink:"/docs/mutation-testing-elements/mutant-states-and-metrics",editUrl:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/mutant-states-and-metrics.md",tags:[],version:"current",frontMatter:{title:"Mutant states and metrics",custom_edit_url:"https://github.com/stryker-mutator/mutation-testing-elements/edit/master/docs/mutant-states-and-metrics.md"},sidebar:"docs",previous:{title:"Equivalent mutants",permalink:"/docs/mutation-testing-elements/equivalent-mutants"},next:{title:"Supported mutators",permalink:"/docs/mutation-testing-elements/supported-mutators"}},l=[{value:"Mutant states",id:"mutant-states",children:[],level:2},{value:"Metrics",id:"metrics",children:[],level:2},{value:"Test states and metrics",id:"test-states-and-metrics",children:[],level:2}],u={toc:l};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This page should shed some light on the different outcomes a mutant can have and the different metrics you'll find in any given mutation testing report."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Are you new to mutation testing, see ",(0,a.kt)("a",{parentName:"em",href:"https://stryker-mutator.io/docs/"},"what is mutation testing?")),"."),(0,a.kt)("h2",{id:"mutant-states"},"Mutant states"),(0,a.kt)("p",null,"A mutant can have one of the following states:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Killed"),"\nWhen at least one test failed while this mutant was active, the mutant is killed. This is what you want, good job!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Survived"),"\nWhen all tests passed while this mutant was active, the mutant survived. You're missing a test for it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"No coverage"),"\nThe mutant isn't covered by one of your tests and survived as a result."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Timeout"),'\nThe running of tests with this mutant active resulted in a timeout.\nFor example, the mutant resulted in an infinite loop in your code.\nDon\'t spend too much attention to this mutant.\nIt is counted as "detected". The logic here is that if this mutant were to be injected in your code,\nyour CI build would detect it because the tests will never complete.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Runtime error"),"\nThe running of the tests resulted in an error (rather than a failed test).\nThis can happen when the test runner fails. For example, when a test runner throws an ",(0,a.kt)("inlineCode",{parentName:"li"},"OutOfMemoryError")," or for dynamic languages where the mutant resulted in unparsable code.\nDon't spend too much attention looking at this mutant. It is not represented in your mutation score."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Compile error"),"\nThe mutant caused a compile error.\nThis can happen in compiled languages.\nDon't spend too much attention looking at this mutant.\nIt is not represented in your mutation score."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Ignored"),"\nThe mutant wasn't tested because it is ignored. Either by user action, or for another reason.\nThis will not count against your mutation score but will show up in reports.")),(0,a.kt)("h2",{id:"metrics"},"Metrics"),(0,a.kt)("p",null,"Based on these states, we can calculate the following metrics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Detected")," ",(0,a.kt)("inlineCode",{parentName:"li"},"killed + timeout"),(0,a.kt)("br",{parentName:"li"}),"The number of mutants detected by your tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Undetected")," ",(0,a.kt)("inlineCode",{parentName:"li"},"survived + no coverage"),(0,a.kt)("br",{parentName:"li"}),"The number of mutants that are not detected by your tests."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Covered")," ",(0,a.kt)("inlineCode",{parentName:"li"},"detected + survived"),(0,a.kt)("br",{parentName:"li"}),"The number of mutants that your tests produce code coverage for."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Valid")," ",(0,a.kt)("inlineCode",{parentName:"li"},"detected + undetected"),(0,a.kt)("br",{parentName:"li"}),"The number of valid mutants. They didn't result in a compile error or runtime error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Invalid")," ",(0,a.kt)("inlineCode",{parentName:"li"},"runtime errors + compile errors"),(0,a.kt)("br",{parentName:"li"}),"The number of invalid mutants. They couldn't be tested because they produce either a compile error or a runtime error."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Total mutants")," ",(0,a.kt)("inlineCode",{parentName:"li"},"valid + invalid + ignored"),(0,a.kt)("br",{parentName:"li"}),"All mutants."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mutation score")," ",(0,a.kt)("inlineCode",{parentName:"li"},"detected / valid * 100"),(0,a.kt)("br",{parentName:"li"}),"The total percentage of mutants that were detected. The higher, the better!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Mutation score based on covered code")," ",(0,a.kt)("inlineCode",{parentName:"li"},"detected / covered * 100"),(0,a.kt)("br",{parentName:"li"}),"The total percentage of mutants that were detected based on the code coverage results.")),(0,a.kt)("h2",{id:"test-states-and-metrics"},"Test states and metrics"),(0,a.kt)("p",null,"A ",(0,a.kt)("em",{parentName:"p"},"test")," can also have state with regards to mutation testing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Killing"),"\nThe test is killing at least one mutant. This is what you want."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Covering"),"\nThe test is covering mutants, but not killing any of them. The coverage information should be available per test to provide this test state."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Not covering"),"\nThe test is not even covering any mutants (and thus not killing any of them)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Total")," ",(0,a.kt)("inlineCode",{parentName:"li"},"not covering + covering + killing"),"\nTotal number of tests.")))}m.isMDXComponent=!0}}]);