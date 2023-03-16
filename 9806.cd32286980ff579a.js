"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9806],{9806:function(e,a,t){t.r(a),t(7378);var n=t(2682);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},l.apply(this,arguments)}function r(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",l({components:a},t),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ContextModuleFactory")," module is used by the ",(0,n.kt)("inlineCode",{parentName:"p"},"Compiler")," to generate dependencies from webpack specific ",(0,n.kt)("a",{href:"/api/module-methods/#requirecontext",parentName:"p"},"require.context")," API. It resolves the requested directory, generates requests for each file and filters against passed regExp. Matching dependencies then passes through ",(0,n.kt)("a",{href:"/api/normalmodulefactory-hooks",parentName:"p"},"NormalModuleFactory"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"ContextModuleFactory")," class extends ",(0,n.kt)("inlineCode",{parentName:"p"},"Tapable")," and provides the following\nlifecycle hooks. They can be tapped the same way as compiler hooks:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},"ContextModuleFactory",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"someHook",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,n.kt)("span",{className:"token comment",parentName:"code"},"/* ... */"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"As with the ",(0,n.kt)("inlineCode",{parentName:"p"},"compiler"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"tapAsync")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"tapPromise")," may also be available\ndepending on the type of hook."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"beforeresolve",parentName:"h3"}),"beforeResolve",(0,n.kt)("a",{href:"#beforeresolve","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook")),(0,n.kt)("p",null,"Called before resolving the requested directory. The request can be ignored by returning ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Callback Parameters: ",(0,n.kt)("inlineCode",{parentName:"li"},"data"))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"afterresolve",parentName:"h3"}),"afterResolve",(0,n.kt)("a",{href:"#afterresolve","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook")),(0,n.kt)("p",null,"Called after the requested directory resolved."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Callback Parameters: ",(0,n.kt)("inlineCode",{parentName:"li"},"data"))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"contextmodulefiles",parentName:"h3"}),"contextModuleFiles",(0,n.kt)("a",{href:"#contextmodulefiles","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SyncWaterfallHook")),(0,n.kt)("p",null,"Called after directory contents are read. On recursive mode, calls for each sub-directory as well. Callback parameter is an array of all file and folder names in each directory."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Callback Parameters: ",(0,n.kt)("inlineCode",{parentName:"li"},"fileNames"))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"alternativerequests",parentName:"h3"}),"alternativeRequests",(0,n.kt)("a",{href:"#alternativerequests","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AsyncSeriesWaterfallHook")),(0,n.kt)("p",null,"Called for each file after the request is created but before filtering against regExp."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Callback Parameters: ",(0,n.kt)("inlineCode",{parentName:"li"},"request")," ",(0,n.kt)("inlineCode",{parentName:"li"},"options"))))}r.isMDXComponent=!0,a.default=r}}]);