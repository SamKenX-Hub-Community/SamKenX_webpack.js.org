"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2760],{2760:function(e,a,t){t.r(a),t(7378);var n=t(2682);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",o({components:a},t),(0,n.kt)("p",null,"In the past, one of webpack’s trade-offs when bundling was that each module in your bundle would be wrapped in individual function closures. These wrapper functions made it slower for your JavaScript to execute in the browser. In comparison, tools like Closure Compiler and RollupJS ‘hoist’ or concatenate the scope of all your modules into one closure and allow for your code to have a faster execution time in the browser."),(0,n.kt)("p",null,"This plugin will enable the same concatenation behavior in webpack. By default this plugin is already enabled in ",(0,n.kt)("a",{href:"/configuration/mode/#mode-production",parentName:"p"},"production ",(0,n.kt)("inlineCode",{parentName:"a"},"mode"))," and disabled otherwise. If you need to override the production ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," optimization, set the ",(0,n.kt)("a",{href:"/configuration/optimization/#optimizationconcatenatemodules",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"optimization.concatenateModules")," option")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),". To enable concatenation behavior in other modes, you can add ",(0,n.kt)("inlineCode",{parentName:"p"},"ModuleConcatenationPlugin")," manually or use the ",(0,n.kt)("inlineCode",{parentName:"p"},"optimization.concatenateModules")," option:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},"."),"optimize",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},"."),"ModuleConcatenationPlugin"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This concatenation behavior is called “scope hoisting.”"),(0,n.kt)("p",{parentName:"blockquote"},"Scope hoisting is specifically a feature made possible by ECMAScript Module syntax. Because of this webpack may fallback to normal bundling based on what kind of modules you are using, and ",(0,n.kt)("a",{href:"https://medium.com/webpack/webpack-freelancing-log-book-week-5-7-4764be3266f5",parentName:"p"},"other conditions"),".")),(0,n.kt)("aside",{className:"warning"},(0,n.kt)("h6",{className:"warning__prefix",parentName:"aside"},"warning"),(0,n.kt)("p",{parentName:"aside"},"Keep in mind that this plugin will only be applied to ",(0,n.kt)("a",{href:"/api/module-methods/#es6-recommended",parentName:"p"},"ES6 modules")," processed directly by webpack. When using a transpiler, you'll need to disable module processing (e.g. the ",(0,n.kt)("a",{href:"https://babeljs.io/docs/en/babel-preset-env#modules",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"modules"))," option in Babel).")),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"optimization-bailouts",parentName:"h2"}),"Optimization Bailouts",(0,n.kt)("a",{href:"#optimization-bailouts","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"As the article explains, webpack attempts to achieve partial scope hoisting. It will merge modules into a single scope but cannot do so in every case. If webpack cannot merge a module, the two alternatives are Prevent and Root. Prevent means the module must be in its own scope. Root means a new module group will be created. The following conditions determine the outcome:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr"},"Condition"),(0,n.kt)("th",{parentName:"tr"},"Outcome"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Non ES6 Module")),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Prevent"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Imported By Non Import")),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Root"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Imported From Other Chunk")),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Root"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Imported By Multiple Other Module Groups")),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Root"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Imported With ",(0,n.kt)("inlineCode",{parentName:"span"},"import()"))),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Root"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Affected By ",(0,n.kt)("inlineCode",{parentName:"span"},"ProvidePlugin")," Or Using ",(0,n.kt)("inlineCode",{parentName:"span"},"module"))),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Prevent"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"HMR Accepted")),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Root"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Using ",(0,n.kt)("inlineCode",{parentName:"span"},"eval()"))),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Prevent"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"In Multiple Chunks")),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Prevent"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{"data-th":"Condition",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},(0,n.kt)("inlineCode",{parentName:"span"},'export * from "cjs-module"'))),(0,n.kt)("td",{"data-th":"Outcome",parentName:"tr"},(0,n.kt)("span",{parentName:"td"},"Prevent"))))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"module-grouping-algorithm",parentName:"h3"}),"Module Grouping Algorithm",(0,n.kt)("a",{href:"#module-grouping-algorithm","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"The following pseudo JavaScript explains the algorithm:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"modules",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"forEach"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"module"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," group ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"ModuleGroup"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    root",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"dependencies",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"forEach"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"dependency"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," dependency",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"modules",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"length ",(0,n.kt)("span",{className:"token operator",parentName:"code"},">")," ",(0,n.kt)("span",{className:"token number",parentName:"code"},"1"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    orderedModules ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"topologicalSort"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"modules",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    concatenatedModule ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,n.kt)("span",{className:"token class-name",parentName:"code"},"ConcatenatedModule"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"orderedModules",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    chunk",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"add"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"concatenatedModule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    orderedModules",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"forEach"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"groupModule"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      chunk",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"remove"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"groupModule",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n\n",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"group",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},",")," module"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"has"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token operator",parentName:"code"},"!"),(0,n.kt)("span",{className:"token function",parentName:"code"},"hasPreconditions"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," nextGroup ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"const")," result ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"dependents",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"reduce"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"check",(0,n.kt)("span",{className:"token punctuation",parentName:"span"},",")," dependent"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," check ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"&&")," ",(0,n.kt)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"nextGroup",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," dependent",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"if")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token operator",parentName:"code"},"!"),"result",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n  module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"dependencies",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"forEach"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token parameter",parentName:"code"},"dependency"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token function",parentName:"code"},"tryToAdd"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," dependency",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  group",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"merge"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"nextGroup",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"return")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"debugging-optimization-bailouts",parentName:"h3"}),"Debugging Optimization Bailouts",(0,n.kt)("a",{href:"#debugging-optimization-bailouts","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"When using the webpack CLI, the ",(0,n.kt)("inlineCode",{parentName:"p"},"--stats-optimization-bailout")," flag will display bailout reasons. When using the webpack config, add the following to the ",(0,n.kt)("inlineCode",{parentName:"p"},"stats")," object:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"//..."),"\n  stats",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// Display bailout reasons"),"\n    optimizationBailout",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"true"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))))}p.isMDXComponent=!0,a.default=p}}]);