"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8597],{8597:function(e,a,t){t.r(a),t(7378);var n=t(2682);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},p.apply(this,arguments)}function o(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",p({components:a},t),(0,n.kt)("p",null,"As mentioned in ",(0,n.kt)("a",{href:"/guides/getting-started/#using-a-configuration",parentName:"p"},"Getting Started"),", there are multiple ways to define the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," property in your webpack configuration. We will show you the ways you ",(0,n.kt)("strong",{parentName:"p"},"can")," configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," property, in addition to explaining why it may be useful to you."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"single-entry-shorthand-syntax",parentName:"h2"}),"Single Entry (Shorthand) Syntax",(0,n.kt)("a",{href:"#single-entry-shorthand-syntax","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"entry: string | [string]")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./path/to/my/entry/file.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"The single entry syntax for the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," property is a shorthand for:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    main",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./path/to/my/entry/file.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"We can also pass an array of file paths to the ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," property which creates what is known as a ",(0,n.kt)("strong",{parentName:"p"},'"multi-main entry"'),'. This is useful when you would like to inject multiple dependent files together and graph their dependencies into one "chunk".'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"["),(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/file_1.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/file_2.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'bundle.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"Single Entry Syntax is a great choice when you are looking to quickly set up a webpack configuration for an application or tool with one entry point (i.e. a library). However, there is not much flexibility in extending or scaling your configuration with this syntax."),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"object-syntax",parentName:"h2"}),"Object Syntax",(0,n.kt)("a",{href:"#object-syntax","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"entry: { <entryChunkName> string | [string] } | {}")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    app",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    adminApp",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/adminApp.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"The object syntax is more verbose. However, this is the most scalable way of defining entry/entries in your application."),(0,n.kt)("aside",{className:"tip"},(0,n.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,n.kt)("p",{parentName:"aside"},(0,n.kt)("strong",{parentName:"p"},'"Scalable webpack configurations"')," are ones that can be reused and combined with other partial configurations. This is a popular technique used to separate concerns by environment, build target, and runtime. They are then merged using specialized tools like ",(0,n.kt)("a",{href:"https://github.com/survivejs/webpack-merge",parentName:"p"},"webpack-merge"),".")),(0,n.kt)("aside",{className:"tip"},(0,n.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,n.kt)("p",{parentName:"aside"},"You can pass empty object ",(0,n.kt)("inlineCode",{parentName:"p"},"{}")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"entry")," when you have only entry points generated by plugins.")),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"entrydescription-object",parentName:"h3"}),"EntryDescription object",(0,n.kt)("a",{href:"#entrydescription-object","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"An object of entry point description. You can specify the following properties."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"dependOn"),": The entry points that the current entry point depends on. They must be loaded before this entry point is loaded.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"filename"),": Specifies the name of each output file on disk.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"import"),": Module(s) that are loaded upon startup.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"library"),": Specify ",(0,n.kt)("a",{href:"/configuration/output/#outputlibrary",parentName:"p"},"library options")," to bundle a library from current entry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"runtime"),": The name of the runtime chunk. When set, a new runtime chunk will be created. It can be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," to avoid a new runtime chunk since webpack 5.43.0.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"publicPath"),": Specify a public URL address for the output files of this entry when they are referenced in a browser. Also, see ",(0,n.kt)("a",{href:"/configuration/output/#outputpublicpath",parentName:"p"},"output.publicPath"),"."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    a2",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'dependingfile.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    b2",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'a2'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"runtime")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dependOn")," should not be used together on a single entry, so the following config is invalid and would throw an error:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    a2",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./a'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    b2",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      runtime",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'x2'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'a2'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./b'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"Make sure ",(0,n.kt)("inlineCode",{parentName:"p"},"runtime")," must not point to an existing entry point name, for example the below config would throw an error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    a1",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./a'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    b1",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      runtime",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'a1'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./b'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,"Also ",(0,n.kt)("inlineCode",{parentName:"p"},"dependOn")," must not be circular, the following example again would throw an error:"),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    a3",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./a'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'b3'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    b3",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,n.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./b'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n      dependOn",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'a3'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("h2",null,(0,n.kt)("span",{id:"scenarios",parentName:"h2"}),"Scenarios",(0,n.kt)("a",{href:"#scenarios","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,"Below is a list of entry configurations and their real-world use cases:"),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"separate-app-and-vendor-entries",parentName:"h3"}),"Separate App and Vendor Entries",(0,n.kt)("a",{href:"#separate-app-and-vendor-entries","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    main",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/app.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    vendor",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/vendor.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.prod.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'[name].[contenthash].bundle.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.dev.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  output",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    filename",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'[name].bundle.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What does this do?")," We are telling webpack that we would like 2 separate entry points (like the above example)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why?")," With this, you can import required libraries or files that aren't modified (e.g. Bootstrap, jQuery, images, etc) inside ",(0,n.kt)("inlineCode",{parentName:"p"},"vendor.js")," and they will be bundled together into their own chunk. Content hash remains the same, which allows the browser to cache them separately thereby reducing load time."),(0,n.kt)("aside",{className:"tip"},(0,n.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,n.kt)("p",{parentName:"aside"},"In webpack version < 4 it was common to add vendors as a separate entry point to compile it as a separate file (in combination with the ",(0,n.kt)("inlineCode",{parentName:"p"},"CommonsChunkPlugin"),"). ",(0,n.kt)("br",{parentName:"p"}),(0,n.kt)("br",{parentName:"p"})," This is discouraged in webpack 4. Instead, the ",(0,n.kt)("a",{href:"/configuration/optimization/#optimizationsplitchunks",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"optimization.splitChunks"))," option takes care of separating vendors and app modules and creating a separate file. ",(0,n.kt)("strong",{parentName:"p"},"Do not")," create an entry for vendors or other stuff that is not the starting point of execution.")),(0,n.kt)("h3",null,(0,n.kt)("span",{id:"multi-page-application",parentName:"h3"}),"Multi-Page Application",(0,n.kt)("a",{href:"#multi-page-application","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,n.kt)("span",{className:"header-link",parentName:"a"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,n.kt)("pre",null,(0,n.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,n.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  entry",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    pageOne",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/pageOne/index.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    pageTwo",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/pageTwo/index.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    pageThree",(0,n.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,n.kt)("span",{className:"token string",parentName:"code"},"'./src/pageThree/index.js'"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,n.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,n.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What does this do?")," We are telling webpack that we would like 3 separate dependency graphs (like the above example)."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Why?")," In a multi-page application, the server is going to fetch a new HTML document for you. The page reloads this new document and assets are redownloaded. However, this gives us the unique opportunity to do things like using ",(0,n.kt)("a",{href:"/configuration/optimization/#optimizationsplitchunks",parentName:"p"},(0,n.kt)("inlineCode",{parentName:"a"},"optimization.splitChunks"))," to create bundles of shared application code between each page. Multi-page applications that reuse a lot of code/modules between entry points can greatly benefit from these techniques, as the number of entry points increases."),(0,n.kt)("aside",{className:"tip"},(0,n.kt)("h6",{className:"tip__prefix",parentName:"aside"},"tip"),(0,n.kt)("p",{parentName:"aside"},"As a rule of thumb: Use exactly one entry point for each HTML document. See the issue ",(0,n.kt)("a",{href:"https://bundlers.tooling.report/code-splitting/multi-entry/#webpack",parentName:"p"},"described here")," for more details.")))}o.isMDXComponent=!0,a.default=o}}]);