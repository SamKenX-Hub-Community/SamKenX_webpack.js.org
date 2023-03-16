"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5521],{5521:function(e,a,t){t.r(a),t(7378);var n=t(2682);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}function o(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",i({components:a},t),(0,n.kt)("p",null,"This guide aims to help you migrating to webpack 5 when using webpack directly. If you are using a higher level tool to run webpack, please refer to the tool for migration instructions."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"preparations",parentName:"h2"}),"Preparations",(0,n.kt)("a",{href:"#preparations","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Webpack 5 requires at least Node.js 10.13.0 (LTS), so make sure you upgrade your Node.js if you're still running an older one."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"upgrade-webpack-4-and-its-pluginsloaders",parentName:"h2"}),"Upgrade webpack 4 and its plugins/loaders",(0,n.kt)("a",{href:"#upgrade-webpack-4-and-its-pluginsloaders","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," 4 to the latest available version."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When using webpack >= 4, upgrading to the latest webpack 4 version should not require additional guidance.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are using webpack version less than 4 please see the ",(0,n.kt)("a",{href:"/migrate/4/",parentName:"p"},"webpack 4 migration guide"),".")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-cli")," to the latest available version (when used)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Upgrade all used Plugins and Loaders to the latest available version"),(0,n.kt)("p",{parentName:"li"},"Some Plugins and Loaders might have a beta version that has to be used in order to be compatible with webpack 5.\nMake sure to read release notes of each individual plugin/loader when upgrading it, since latest version might only support webpack 5 and will fail in v4. In such case, it's recommended to update to the latest version that supports webpack 4."))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"make-sure-your-build-has-no-errors-or-warnings",parentName:"h3"}),"Make sure your build has no errors or warnings",(0,n.kt)("a",{href:"#make-sure-your-build-has-no-errors-or-warnings","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"There might be new errors or warnings because of the upgraded versions of ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack-cli"),", Plugins and Loaders. Keep an eye for deprecation warnings during the build."),(0,n.kt)("p",null,"You can invoke ",(0,n.kt)("inlineCode",{parentName:"p"},"webpack")," this way to get stack traces for deprecation warnings to figure out which Plugins and Loaders are responsible."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-bash",parentName:"pre"},"node --trace-deprecation node_modules/webpack/bin/webpack.js")),(0,n.kt)("p",null,"As webpack 5 removes all deprecated features, make sure there's no webpack deprecation warnings during the build in order to proceed."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"make-sure-to-use-mode",parentName:"h3"}),"Make sure to use ",(0,n.kt)("inlineCode",{parentName:"h3"},"mode"),(0,n.kt)("a",{href:"#make-sure-to-use-mode","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"mode")," to either ",(0,n.kt)("a",{href:"/configuration/mode/#mode-production",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"production"))," or ",(0,n.kt)("a",{href:"/configuration/mode/#mode-development",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"development"))," to make sure that corresponding defaults are set."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"update-outdated-options",parentName:"h3"}),"Update outdated options",(0,n.kt)("a",{href:"#update-outdated-options","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Update the following options to their new version (if used):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.hashedModuleIds: true")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.moduleIds: 'hashed'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.namedChunks: true")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.chunkIds: 'named'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.namedModules: true")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.moduleIds: 'named'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NamedModulesPlugin")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.moduleIds: 'named'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NamedChunksPlugin")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.chunkIds: 'named'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HashedModuleIdsPlugin")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.moduleIds: 'hashed'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.noEmitOnErrors: false")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.emitOnErrors: true")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.occurrenceOrder: true")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization: { chunkIds: 'total-size', moduleIds: 'size' }")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups.vendors")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups.defaultVendors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups.test(module, chunks)")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups.test(module, { chunkGraph, moduleGraph })")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Compilation.entries")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"Compilation.entryDependencies")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"serve")," → ",(0,n.kt)("inlineCode",{parentName:"li"},"serve")," is removed in favor of ",(0,n.kt)("a",{href:"/configuration/dev-server/",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"DevServer"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"/configuration/module/#ruleoptions--rulequery",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"Rule.query"))," (deprecated since v3) → ",(0,n.kt)("inlineCode",{parentName:"li"},"Rule.options"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"UseEntry.options")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Rule.loaders")," → ",(0,n.kt)("a",{href:"/configuration/module/#ruleuse",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"Rule.use")))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"test-webpack-5-compatibility",parentName:"h3"}),"Test webpack 5 compatibility",(0,n.kt)("a",{href:"#test-webpack-5-compatibility","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Try to set the following options in your webpack 4 configuration and check if build still works correctly."),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// ..."),"\n  node",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    Buffer",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    process",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"You have to remove these options again when upgrading your configuration for webpack 5."),(0,n.kt)("aside",{className:"tip"},(0,n.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,n.kt)("p",{parentName:"aside"},"webpack 5 removes these options from the configuration schema and will always use ",(0,n.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"upgrade-webpack-to-5",parentName:"h2"}),"Upgrade webpack to 5",(0,n.kt)("a",{href:"#upgrade-webpack-to-5","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Now let's upgrade webpack to version 5:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"npm: ",(0,n.kt)("inlineCode",{parentName:"p"},"npm install webpack@latest"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Yarn: ",(0,n.kt)("inlineCode",{parentName:"p"},"yarn add webpack@latest")))),(0,n.kt)("p",null,"If you were not able to upgrade some plugins/loaders to the latest in Upgrade webpack 4 and its plugins/loaders step, don't forget to upgrade them now."),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"clean-up-configuration",parentName:"h3"}),"Clean up configuration",(0,n.kt)("a",{href:"#clean-up-configuration","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Consider removing ",(0,n.kt)("inlineCode",{parentName:"p"},"optimization.moduleIds")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"optimization.chunkIds")," from your webpack configuration. The defaults could be better, because they support long term caching in ",(0,n.kt)("a",{href:"/configuration/mode/#mode-production",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"production mode"))," and debugging in ",(0,n.kt)("a",{href:"/configuration/mode/#mode-development",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"development")," mode"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"When using ",(0,n.kt)("inlineCode",{parentName:"p"},"[hash]")," placeholder in webpack configuration, consider changing it to ",(0,n.kt)("inlineCode",{parentName:"p"},"[contenthash]"),". It is not the same, but proven to be more effective.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are using Yarn's PnP and the ",(0,n.kt)("inlineCode",{parentName:"p"},"pnp-webpack-plugin"),", we have good news: it is supported by default now. You have to remove it from the configuration.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"IgnorePlugin")," with a regular expression as argument, it takes an ",(0,n.kt)("inlineCode",{parentName:"p"},"options")," object now: ",(0,n.kt)("inlineCode",{parentName:"p"},"new IgnorePlugin({ resourceRegExp: /regExp/ })"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are using something like ",(0,n.kt)("inlineCode",{parentName:"p"},"node.fs: 'empty'")," replace it with ",(0,n.kt)("inlineCode",{parentName:"p"},"resolve.fallback.fs: false"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are using ",(0,n.kt)("inlineCode",{parentName:"p"},"watch: true")," in webpack Node.js API, remove it. There's no need to set it as it's indicated by the compiler method you call, either ",(0,n.kt)("inlineCode",{parentName:"p"},"true")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"watch()")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," for ",(0,n.kt)("inlineCode",{parentName:"p"},"run()"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you have ",(0,n.kt)("inlineCode",{parentName:"p"},"rules")," defined for loading assets using ",(0,n.kt)("inlineCode",{parentName:"p"},"raw-loader"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"url-loader"),", or ",(0,n.kt)("inlineCode",{parentName:"p"},"file-loader"),", please use ",(0,n.kt)("a",{href:"/guides/asset-modules/",parentName:"p"},"Asset Modules")," instead as they're going to be deprecated in near future.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you have ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," set to a function, update it to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," and apply that function within ",(0,n.kt)("inlineCode",{parentName:"p"},"plugins")," option. See example below:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{className:"hljs language-json",parentName:"pre"},(0,n.kt)("span",{className:"token comment",parentName:"code"},"// for webpack 4"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    target",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," WebExtensionTarget(nodeConfig)\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),"\n\n",(0,n.kt)("span",{className:"token comment",parentName:"code"},"// for webpack 5"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    target",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token boolean",parentName:"code"},"false"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    plugins",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n        WebExtensionTarget(nodeConfig)\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"))))),(0,n.kt)("p",null,"If you were using WebAssembly via import, you should follow this two step process:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enable the deprecated spec by setting ",(0,n.kt)("inlineCode",{parentName:"li"},"experiments.syncWebAssembly: true"),", to get the same behavior as in webpack 4."),(0,n.kt)("li",{parentName:"ul"},"After successful migration to webpack 5, change the ",(0,n.kt)("inlineCode",{parentName:"li"},"experiments")," value to ",(0,n.kt)("inlineCode",{parentName:"li"},"experiments: { asyncWebAssembly: true }")," to use the up-to-date spec for WASM integration.")),(0,n.kt)("p",null,"Reconsider ",(0,n.kt)("inlineCode",{parentName:"p"},"optimization.splitChunks"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It's recommended to use either the defaults or ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks: { chunks: 'all' }"),"."),(0,n.kt)("li",{parentName:"ul"},"When using a custom configuration, drop ",(0,n.kt)("inlineCode",{parentName:"li"},"name: false")," and replace ",(0,n.kt)("inlineCode",{parentName:"li"},"name: string | function")," with ",(0,n.kt)("inlineCode",{parentName:"li"},"idHint: string | function"),"."),(0,n.kt)("li",{parentName:"ul"},"It was possible to turn off the defaults by setting ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups: { default: false, vendors: false }"),". We don't recommend doing this, but if you really want to get the same effect in webpack 5: ",(0,n.kt)("inlineCode",{parentName:"li"},"optimization.splitChunks.cacheGroups: { default: false, defaultVendors: false }"),".")),(0,n.kt)("p",null,"Consider removing defaults:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"entry: './src/index.js'"),": you can omit it, that's the default."),(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"output.path: path.resolve(__dirname, 'dist')"),": you can omit it, that's the default."),(0,n.kt)("li",{parentName:"ul"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"output.filename: '[name].js'"),": you can omit it, that's the default.")),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"need-to-support-an-older-browser-like-ie-11",parentName:"h3"}),"Need to support an older browser like IE 11?",(0,n.kt)("a",{href:"#need-to-support-an-older-browser-like-ie-11","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you have ",(0,n.kt)("a",{href:"https://github.com/browserslist/browserslist",parentName:"p"},"browserslist")," enabled for your project, webpack 5 will reuse your ",(0,n.kt)("inlineCode",{parentName:"p"},"browserslist")," config to decide which code style to emit for the runtime code."),(0,n.kt)("p",{parentName:"li"},"Make sure to:"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"set ",(0,n.kt)("a",{href:"/configuration/target/#root",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"target"))," to ",(0,n.kt)("inlineCode",{parentName:"li"},"browserslist")," or remove ",(0,n.kt)("inlineCode",{parentName:"li"},"target")," letting webpack set ",(0,n.kt)("inlineCode",{parentName:"li"},"browserslist")," automatically for you."),(0,n.kt)("li",{parentName:"ol"},"add a ",(0,n.kt)("inlineCode",{parentName:"li"},"IE 11")," to your browserslist configuration."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Without a ",(0,n.kt)("inlineCode",{parentName:"p"},"browserslist")," webpack's runtime code uses ES2015 syntax (e.g., arrow function) to build smaller bundles. Hence you'll need to set ",(0,n.kt)("inlineCode",{parentName:"p"},"target: ['web', 'es5']")," to use the ES5 syntax for browsers (like IE11) which don't support ES2015 syntax .")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"For Node.js, builds include the supported Node.js version in the ",(0,n.kt)("inlineCode",{parentName:"p"},"target")," option and webpack will automatically figure out which syntax is supported, e.g. ",(0,n.kt)("inlineCode",{parentName:"p"},"target: 'node8.6'"),"."))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"cleanup-the-code",parentName:"h3"}),"Cleanup the code",(0,n.kt)("a",{href:"#cleanup-the-code","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"using--webpackchunkname--",parentName:"h4"}),"Using ",(0,n.kt)("inlineCode",{parentName:"h4"},"/* webpackChunkName: '...' */"),(0,n.kt)("a",{href:"#using--webpackchunkname--","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Make sure to understand the intention:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The chunk's name here is intended to be public."),(0,n.kt)("li",{parentName:"ul"},"It's not a development-only name."),(0,n.kt)("li",{parentName:"ul"},"Webpack will use it to name files in production and development modes."),(0,n.kt)("li",{parentName:"ul"},"Webpack 5 will automatically assign useful file names in ",(0,n.kt)("inlineCode",{parentName:"li"},"development")," mode even when not using ",(0,n.kt)("inlineCode",{parentName:"li"},"webpackChunkName"),".")),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"using-named-exports-from-json-modules",parentName:"h4"}),"Using named exports from JSON modules",(0,n.kt)("a",{href:"#using-named-exports-from-json-modules","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"This is not supported by the new specification and you will get a warning. Instead of:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{")," version ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}")," ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"from")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./package.json'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nconsole",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"log"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"version",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"use:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import")," pkg ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"from")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./package.json'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nconsole",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,n.kt)("span",{className:"token function",parentName:"code"},"log"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"("),"pkg",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"version",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h4",null,(0,n.kt)("span",{id:"cleanup-the-build-code",parentName:"h4"}),"Cleanup the build code",(0,n.kt)("a",{href:"#cleanup-the-build-code","aria-hidden":"true",tabIndex:"-1",parentName:"h4"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When using ",(0,n.kt)("inlineCode",{parentName:"li"},"const compiler = webpack(...);"),", make sure to close the compiler after using it: ",(0,n.kt)("inlineCode",{parentName:"li"},"compiler.close(callback);"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This doesn't apply to the ",(0,n.kt)("inlineCode",{parentName:"li"},"webpack(..., callback)")," form which automatically closes."),(0,n.kt)("li",{parentName:"ul"},"This is optional if you use webpack in watching mode until the user ends the process. The idle phases in watch mode will be used for this kind of work.")))),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"run-a-single-build-and-follow-advice",parentName:"h3"}),"Run a single build and follow advice",(0,n.kt)("a",{href:"#run-a-single-build-and-follow-advice","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Please make sure to read the building errors/warnings carefully. If there is no corresponding advice, please create an issue and we will try to resolve it."),(0,n.kt)("p",null,"Repeat the following steps until you solved at least level 3 or 4:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 1: ",(0,n.kt)("strong",{parentName:"p"},"Schema validation fails"),"."),(0,n.kt)("p",{parentName:"li"},"Configuration options have changed. There should be a validation error with a ",(0,n.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," note, or a hint of which option should be used instead.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 2: ",(0,n.kt)("strong",{parentName:"p"},"Webpack exits with an error"),"."),(0,n.kt)("p",{parentName:"li"},"The error message should tell you what needs to be changed.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 3: ",(0,n.kt)("strong",{parentName:"p"},"Build Errors"),"."),(0,n.kt)("p",{parentName:"li"},"The error message should have a ",(0,n.kt)("inlineCode",{parentName:"p"},"BREAKING CHANGE:")," note.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 4: ",(0,n.kt)("strong",{parentName:"p"},"Build Warnings"),"."),(0,n.kt)("p",{parentName:"li"},"The warning message should tell you what can be improved.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 5: ",(0,n.kt)("strong",{parentName:"p"},"Runtime Errors"),"."),(0,n.kt)("p",{parentName:"li"},"This is tricky. You probably have to debug to find the problem. General advice is difficult here. But we do list some common advice below regarding Runtime Errors:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"process")," is not defined.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"webpack 5 does no longer include a polyfill for this Node.js variable. Avoid using it in the frontend code."),(0,n.kt)("li",{parentName:"ul"},"Want to support browser usage? Use the ",(0,n.kt)("inlineCode",{parentName:"li"},"exports")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"imports")," package.json field to use different code depending on the environment.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Also use the ",(0,n.kt)("inlineCode",{parentName:"li"},"browser")," field to support older bundlers."),(0,n.kt)("li",{parentName:"ul"},"Alternative: Wrap code blocks with the ",(0,n.kt)("inlineCode",{parentName:"li"},"typeof process")," checks. Note that this will have a negative impact on the bundle size."))),(0,n.kt)("li",{parentName:"ul"},"Want to use environment variables with ",(0,n.kt)("inlineCode",{parentName:"li"},"process.env.VARIABLE"),"? You need to use the ",(0,n.kt)("inlineCode",{parentName:"li"},"DefinePlugin")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"EnvironmentPlugin")," to define these variables in the configuration.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Consider using ",(0,n.kt)("inlineCode",{parentName:"li"},"VARIABLE")," instead and make sure to check ",(0,n.kt)("inlineCode",{parentName:"li"},"typeof VARIABLE !== 'undefined'")," too. ",(0,n.kt)("inlineCode",{parentName:"li"},"process.env")," is Node.js specific and should be avoided in frontend code."))))),(0,n.kt)("li",{parentName:"ul"},"404 errors pointing to URLs containing ",(0,n.kt)("inlineCode",{parentName:"li"},"auto"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Not all ecosystem tooling is ready for the new default automatic ",(0,n.kt)("inlineCode",{parentName:"li"},"publicPath")," via ",(0,n.kt)("inlineCode",{parentName:"li"},'output.publicPath: "auto"'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use a static ",(0,n.kt)("inlineCode",{parentName:"li"},'output.publicPath: ""')," instead."))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 6: ",(0,n.kt)("strong",{parentName:"p"},"Deprecation Warnings"),"."),(0,n.kt)("p",{parentName:"li"},"You probably get a lot of deprecation warnings. This is not directly a problem. Plugins need time to catch up with core changes. Please report these deprecations to the plugins. These deprecations are only warnings and the build will still work with only minor drawbacks (like less performance)."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can hide deprecation warnings by running node with ",(0,n.kt)("inlineCode",{parentName:"li"},"--no-deprecation")," flag, e.g.: ",(0,n.kt)("inlineCode",{parentName:"li"},"node --no-deprecation node_modules/webpack/bin/webpack.js"),". This should only be a temporary workaround."),(0,n.kt)("li",{parentName:"ul"},"Plugins and Loaders contributors can follow the advice in the deprecation messages to improve the code."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Level 7: ",(0,n.kt)("strong",{parentName:"p"},"Performance issues"),"."),(0,n.kt)("p",{parentName:"li"},"Usually, performance should improve with webpack 5, but there are also a few cases where performance gets worse."),(0,n.kt)("p",{parentName:"li"},"And here are something you can do to improve the situation:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Profile where the time is spent.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--profile --progress")," displays a simple performance profile now"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"node --inspect-brk node_modules/webpack/bin/webpack.js")," + ",(0,n.kt)("a",{href:"chrome://inspect",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"chrome://inspect"))," / ",(0,n.kt)("a",{href:"edge://inspect",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"edge://inspect"))," (see profiler tab).",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"You can save these profiles to files and provide them in issues."),(0,n.kt)("li",{parentName:"ul"},"Try using ",(0,n.kt)("inlineCode",{parentName:"li"},"--no-turbo-inlining")," flag for better stack traces in some cases."))))),(0,n.kt)("li",{parentName:"ul"},"Time for building modules in incremental builds can be improved by reverting to unsafe caching like in webpack 4:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"module.unsafeCache: true")),(0,n.kt)("li",{parentName:"ul"},"But this might affect the ability to handle some of the changes to the code base"))),(0,n.kt)("li",{parentName:"ul"},"Full build",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Backward-compatibility layer for the deprecated features will usually have worse performance compared to the new features."),(0,n.kt)("li",{parentName:"ul"},"Creating many warnings can affect build performance, even if they are ignored."),(0,n.kt)("li",{parentName:"ul"},"Source Maps are expensive. Check ",(0,n.kt)("a",{href:"/configuration/devtool/",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"devtool"))," option in the documentation to see a comparison of the different options."),(0,n.kt)("li",{parentName:"ul"},"Anti-Virus protection might affect performance of the file system access."),(0,n.kt)("li",{parentName:"ul"},"Persistent Caching can help to improve the repetitive full builds."),(0,n.kt)("li",{parentName:"ul"},"Module Federation allows to split the application into multiple smaller builds.")))))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"everything-works",parentName:"h2"}),"Everything works?",(0,n.kt)("a",{href:"#everything-works","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Please tweet that you have successfully migrated to webpack 5. ",(0,n.kt)("a",{href:"https://twitter.com/intent/tweet?source=https://webpack.js.org/migrate/5/&text=I%20just%20migrated%20to%20webpack%205%20using%20its%20migration%20guide!%20&via=webpack&hashtags=webpack,webpack5",parentName:"p"},"Tweet it")),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"it-is-not-working",parentName:"h2"}),"It is not working?",(0,n.kt)("a",{href:"#it-is-not-working","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Create an ",(0,n.kt)("a",{href:"https://github.com/webpack/webpack/issues/new?template=Bug_report.md",parentName:"p"},"issue")," and tell us about the issues you have encountered during the migration."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"something-missing-in-this-guide",parentName:"h2"}),"Something missing in this guide?",(0,n.kt)("a",{href:"#something-missing-in-this-guide","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Please open a ",(0,n.kt)("a",{href:"https://github.com/webpack/webpack.js.org/edit/main/src/content/migrate/5.mdx",parentName:"p"},"Pull Request")," to help the next person using this guide."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"changes-to-internals",parentName:"h2"}),"Changes to internals",(0,n.kt)("a",{href:"#changes-to-internals","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"The changes to webpack internals such as: adding types, refactoring code and methods renaming are listed here for anyone interested. But they are not intended as a part of common use-case migration."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Module.nameForCondition"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"Module.updateCacheModule")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"Module.chunkCondition")," are no longer optional.")),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"getoptions-method-for-loaders",parentName:"h3"}),"getOptions method for Loaders",(0,n.kt)("a",{href:"#getoptions-method-for-loaders","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Webpack 5 ships with built-in ",(0,n.kt)("a",{href:"/api/loaders/#thisgetoptionsschema",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"this.getOptions"))," method available in loader context. This is a breaking change for loaders that had been using ",(0,n.kt)("inlineCode",{parentName:"p"},"getOptions")," method from previously preferred ",(0,n.kt)("a",{href:"https://github.com/webpack/schema-utils",parentName:"p"},"schema-utils"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"this.getOptions")," is available since webpack 5"),(0,n.kt)("li",{parentName:"ul"},"Instead of JSON5 it supports JSON as a query string: ",(0,n.kt)("inlineCode",{parentName:"li"},"?{arg:true}")," → ",(0,n.kt)("inlineCode",{parentName:"li"},'?{"arg":true}'),". Using JSON5 should be considered and documented as deprecated in favor of JSON in the respective Loader's documentation."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{href:"https://github.com/webpack/loader-utils",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"loader-utils"))," has specific behavior for parsing query strings (",(0,n.kt)("inlineCode",{parentName:"li"},"true"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"null")," won't be parsed as ",(0,n.kt)("inlineCode",{parentName:"li"},"string")," but as a primitive value). This is no longer the case for the new built-in ",(0,n.kt)("inlineCode",{parentName:"li"},"this.getOptions")," method, which uses native ",(0,n.kt)("a",{href:"https://nodejs.org/api/querystring.html",parentName:"li"},(0,n.kt)("inlineCode",{parentName:"a"},"querystring"))," parsing (ships with Node.js). It is still possible to add custom behavior for these cases in the Loader's code after getting the options by using ",(0,n.kt)("inlineCode",{parentName:"li"},"this.getOptions")," method."),(0,n.kt)("li",{parentName:"ul"},"Schema argument is optional for the new ",(0,n.kt)("inlineCode",{parentName:"li"},"this.getOptions")," method, but we strongly advise to add schema validation for your Loader's options. The ",(0,n.kt)("inlineCode",{parentName:"li"},"title")," field in the schema, can be used to customize the validation error message e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},'"title": "My Loader ooooptions"')," will result in displaying errors this way: ",(0,n.kt)("inlineCode",{parentName:"li"},"Invalid ooooptions object. My Loader has been initialised using an ooooptions object that does not match the API schema. - ooooptions.foo.bar.baz should be a string."))))}o.isMDXComponent=!0,a.default=o}}]);