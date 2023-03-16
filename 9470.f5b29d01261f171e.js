"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9470],{9470:function(e,a,n){n.r(a),n(7378);var t=n(2682);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},s.apply(this,arguments)}function p(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",s({components:a},n),(0,t.kt)("p",null,"This guide only shows major changes that affect end users. For more details please see ",(0,t.kt)("a",{href:"https://github.com/webpack/webpack/releases",parentName:"p"},"the changelog"),"."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"nodejs-v4",parentName:"h2"}),"Node.js v4",(0,t.kt)("a",{href:"#nodejs-v4","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"If you are still using Node.js v4 or lower, you need to upgrade your Node.js installation to Node.js v6 or higher."),(0,t.kt)("p",null,"Instructions for upgrading your Node.js version can be found ",(0,t.kt)("a",{href:"https://stackoverflow.com/questions/10075990/upgrading-node-js-to-latest-version",parentName:"p"},"here"),"."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"cli",parentName:"h2"}),"CLI",(0,t.kt)("a",{href:"#cli","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The CLI has moved to a separate package: webpack-cli. You need to install it before using webpack, see ",(0,t.kt)("a",{href:"/guides/getting-started/#basic-setup",parentName:"p"},"basic setup"),"."),(0,t.kt)("p",null,"The installation guide can be found ",(0,t.kt)("a",{href:"/guides/installation",parentName:"p"},"here"),"."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"update-plugins",parentName:"h2"}),"Update plugins",(0,t.kt)("a",{href:"#update-plugins","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Many 3rd party plugins need to be updated to the latest versions to be compatible with webpack 4. Links to popular plugins can be found ",(0,t.kt)("a",{href:"/awesome-webpack/#webpack-plugins",parentName:"p"},"here"),"."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"mode",parentName:"h2"}),"mode",(0,t.kt)("a",{href:"#mode","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Add the new ",(0,t.kt)("a",{href:"/configuration/mode/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"mode"))," option to your configuration. Set it to ",(0,t.kt)("inlineCode",{parentName:"p"},"'production'"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"'development'")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"'none'")," depending on your configuration type."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"  mode: 'production',\n")),"}")),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"The purpose of ",(0,t.kt)("inlineCode",{parentName:"p"},"'development'")," mode and ",(0,t.kt)("inlineCode",{parentName:"p"},"'production'")," mode is different. You can use ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack-merge")," as shown in ",(0,t.kt)("a",{href:"/guides/production/#setup",parentName:"p"},"production guide")," to optimize configurations.")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"deprecatedremoved-plugins",parentName:"h2"}),"Deprecated/Removed plugins",(0,t.kt)("a",{href:"#deprecatedremoved-plugins","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"These plugins can be removed from configuration as they are default in production mode:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," plugins: [\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NoEmitOnErrorsPlugin(),\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new ModuleConcatenationPlugin(),\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},'    new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })\n'),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new UglifyJsPlugin()\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ],\n")),"}")),(0,t.kt)("p",null,"These plugins are default in development mode"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," plugins: [\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NamedModulesPlugin()\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ],\n")),"}")),(0,t.kt)("p",null,"These plugins were deprecated and are now removed:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," plugins: [\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NoErrorsPlugin(),\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NewWatchingPlugin()\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ],\n")),"}")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"commonschunkplugin",parentName:"h2"}),"CommonsChunkPlugin",(0,t.kt)("a",{href:"#commonschunkplugin","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The ",(0,t.kt)("inlineCode",{parentName:"p"},"CommonsChunkPlugin")," was removed. Instead the ",(0,t.kt)("a",{href:"/configuration/optimization/#optimizationsplitchunks",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"optimization.splitChunks"))," options can be used."),(0,t.kt)("p",null,"See documentation of the ",(0,t.kt)("a",{href:"/configuration/optimization/#optimizationsplitchunks",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"optimization.splitChunks"))," for more details. The default configuration may already suit your needs."),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,t.kt)("p",{parentName:"aside"},"When generating the HTML from the stats you can use ",(0,t.kt)("inlineCode",{parentName:"p"},'optimization.splitChunks.chunks: "all"')," which is the optimal configuration in most cases.")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"import-and-commonjs",parentName:"h2"}),"import() and CommonJS",(0,t.kt)("a",{href:"#import-and-commonjs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"When using ",(0,t.kt)("inlineCode",{parentName:"p"},"import()")," to load non-ESM the result has changed in webpack 4. Now you need to access the ",(0,t.kt)("inlineCode",{parentName:"p"},"default")," property to get the value of ",(0,t.kt)("inlineCode",{parentName:"p"},"module.exports"),"."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"non-esm.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token function-variable function",parentName:"code"},"sayHello"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'hello world'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"example.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"sayHello"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'./non-esm.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"then"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"module"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"default",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"sayHello"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"json-and-loaders",parentName:"h2"}),"json and loaders",(0,t.kt)("a",{href:"#json-and-loaders","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"When using a custom loader to transform ",(0,t.kt)("inlineCode",{parentName:"p"},".json")," files you now need to change the module ",(0,t.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," rules: [\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     test: /config\\.json$/,\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     loader: 'special-loader',\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     type: 'javascript/auto',\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     options: {...}\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   }\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ]\n")),"};")),(0,t.kt)("p",null,"When still using the ",(0,t.kt)("inlineCode",{parentName:"p"},"json-loader"),", it can be removed:"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," rules: [\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   {\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     test: /\\.json$/,\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     loader: 'json-loader'\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   }\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ]\n")),"};")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"moduleloaders",parentName:"h2"}),"module.loaders",(0,t.kt)("a",{href:"#moduleloaders","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"module.loaders")," were deprecated since webpack 2 and are now removed in favor of ",(0,t.kt)("a",{href:"/configuration/module/#rule",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"module.rules")),"."))}p.isMDXComponent=!0,a.default=p}}]);