(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{309:function(e,a,t){"use strict";t.r(a);var r=t(5),s=Object(r.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-externals"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-externals"}},[e._v("#")]),e._v(" Webpack Externals")]),e._v(" "),a("p",[e._v("Webpack Externals是Webpack中的一个配置选项，Webpack是一种流行的JavaScript模块打包工具。这个选项允许你指定不是你项目源代码的依赖项，但仍然需要你的应用程序才能正常运行。")]),e._v(" "),a("p",[e._v("当你指定一个外部依赖项时，Webpack不会将它包含在打包输出中。相反，它将期望该依赖项在运行时环境中可用，可以通过全局变量、CommonJS模块或AMD模块来提供。")]),e._v(" "),a("p",[e._v("例如，如果你正在构建一个依赖于jQuery库的Web应用程序，你可以在Webpack配置中将它声明为外部依赖项，像这样：")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("module.exports = {\n  // ...\n  externals: {\n    jquery: 'jQuery',\n  },\n};\n")])])]),a("p",[e._v("这告诉Webpack jquery 模块不应该与你的应用程序一起打包，并且它应该在运行时作为 jQuery 全局变量可用。")]),e._v(" "),a("p",[e._v("通过使用外部依赖项，你可以减小打包输出的大小，使你的应用程序加载更快。当你构建一个需要被其他项目使用的库时，它也非常有用，因为你可以将其依赖项声明为外部依赖项，并让使用者处理它们自己的依赖项。")])])}),[],!1,null,null,null);a.default=s.exports}}]);