"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1454],{1454:function(e,a,t){t.r(a),t(7378);var n=t(2682);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function s(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",o({components:a},t),(0,n.kt)("p",null,"To understand why you should use webpack, let's recap how we used JavaScript on the web before bundlers were a thing."),(0,n.kt)("p",null,"There are two ways to run JavaScript in a browser. First, include a script for each functionality; this solution is hard to scale because loading too many scripts can cause a network bottleneck. The second option is to use a big ",(0,n.kt)("inlineCode",{parentName:"p"},".js")," file containing all your project code, but this leads to problems in scope, size, readability and maintainability."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"iifes---immediately-invoked-function-expressions",parentName:"h2"}),"IIFEs - Immediately invoked function expressions",(0,n.kt)("a",{href:"#iifes---immediately-invoked-function-expressions","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"IIFEs solve scoping issues for large projects; when script files are wrapped by an IIFE, you can safely concatenate or safely combine files without worrying about scope collision."),(0,n.kt)("p",null,"The use of IIFEs led to tools like Make, Gulp, Grunt, Broccoli or Brunch. These tools are known as task runners, and they concatenate all your project files together."),(0,n.kt)("p",null,"However, changing one file means you have to rebuild the whole thing. Concatenating makes it easier to reuse scripts across files but makes build optimizations more difficult. How can you find out if code is actually being used or not?"),(0,n.kt)("p",null,"Even if you only use a single function from lodash, you have to add the entire library and then squish it together. How do you treeshake the dependencies on your code? Lazy loading chunks of code can be hard to do at scale and requires a lot of manual work from the developer."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"birth-of-javascript-modules-happened-thanks-to-nodejs",parentName:"h2"}),"Birth of JavaScript Modules happened thanks to Node.js",(0,n.kt)("a",{href:"#birth-of-javascript-modules-happened-thanks-to-nodejs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Webpack runs on Node.js, a JavaScript runtime that can be used in computers and servers outside a browser environment."),(0,n.kt)("p",null,"When Node.js was released a new era started, and it came with new challenges. Now that JavaScript is not running in a browser, how are Node applications supposed to load new chunks of code? There are no html files and script tags that can be added to it."),(0,n.kt)("p",null,"CommonJS came out and introduced ",(0,n.kt)("inlineCode",{parentName:"p"},"require"),", which allows you to load and use a module in the current file. This solved scope issues out of the box by importing each module as it was needed."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"npm--nodejs--modules--mass-distribution",parentName:"h2"}),"npm + Node.js + modules – mass distribution",(0,n.kt)("a",{href:"#npm--nodejs--modules--mass-distribution","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"JavaScript is taking over the world as a language, as a platform and as a way to rapidly develop and create fast applications."),(0,n.kt)("p",null,"But there is no browser support for CommonJS. There are no ",(0,n.kt)("a",{href:"https://medium.com/webpack/the-state-of-javascript-modules-4636d1774358",parentName:"p"},"live bindings"),". There are problems with circular references. Synchronous module resolution and loading is slow. While CommonJS was a great solution for Node.js projects, browsers didn't support modules, so bundlers and tools like Browserify, RequireJS and SystemJS were created, allowing us to write CommonJS modules that run in a browser."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"esm---ecmascript-modules",parentName:"h2"}),"ESM - ECMAScript Modules",(0,n.kt)("a",{href:"#esm---ecmascript-modules","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"The good news for web projects is that modules are becoming an official feature in the ECMAScript standard. However, browser support is incomplete and bundling is still faster and currently recommended over these early module implementations."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"automatic-dependency-collection",parentName:"h2"}),"Automatic Dependency Collection",(0,n.kt)("a",{href:"#automatic-dependency-collection","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Old school Task Runners and even Google Closure Compiler requires you to manually declare all dependencies upfront. While bundlers like webpack automatically build and infer your ",(0,n.kt)("a",{href:"/concepts/dependency-graph/",parentName:"p"},"dependency graph")," based on what is imported and exported. This along with other ",(0,n.kt)("a",{href:"/concepts/plugins/",parentName:"p"},"plugins")," and ",(0,n.kt)("a",{href:"/concepts/loaders/",parentName:"p"},"loaders")," make for a great developer experience."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"wouldnt-it-be-nice",parentName:"h2"}),"Wouldn't it be nice…",(0,n.kt)("a",{href:"#wouldnt-it-be-nice","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"...to have something that will not only let us write modules but also support any module format (at least until we get to ESM) and handle resources and assets at the same time?"),(0,n.kt)("p",null,"This is why webpack exists. It's a tool that lets you bundle your JavaScript applications (supporting both ESM and CommonJS), and it can be extended to support many different assets such as images, fonts and stylesheets."),(0,n.kt)("p",null,"Webpack cares about performance and load times; it's always improving or adding new features, such as async chunk loading and prefetching, to deliver the best possible experience for your project and your users."))}s.isMDXComponent=!0,a.default=s}}]);