(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{375:function(n,e,a){"use strict";a.r(e);var t=a(5),r=Object(t.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"微前端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微前端"}},[n._v("#")]),n._v(" 微前端")]),n._v(" "),e("p",[n._v("几个核心价值：技术栈无关，独立开发、独立部署，增量升级，独立运行时。")]),n._v(" "),e("p",[n._v("single-spa 问题")]),n._v(" "),e("p",[n._v("问题")]),n._v(" "),e("ul",[e("li",[e("p",[n._v("1 没有处理父子应用之间的样式隔离问题。")])]),n._v(" "),e("li",[e("p",[n._v("2 每个应用都使用 window 对象可能会存在冲突。\n父应用切换子应用，每次切换都是同一个window。")])]),n._v(" "),e("li",[e("p",[n._v("3 仅仅实现了 "),e("strong",[e("font",{attrs:{color:"red"}},[n._v("路由劫持，和应用加载")])],1)])]),n._v(" "),e("li",[e("p",[n._v("4 single-spa不够灵活。不能动态加载js文件。\n即父应用如果想要加载子应用，需要创建script把子应用的脚本添加进去，在切换到子应用时，把脚本添加到父应用head中。")])])]),n._v(" "),e("h2",{attrs:{id:"spa-vs-mpa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#spa-vs-mpa"}},[n._v("#")]),n._v(" SPA VS MPA")]),n._v(" "),e("p",[n._v("微前端是由多个 spa 组成的 mpa。通过上下文的管理，生命周期的管理和通信机制的管理。让这些 spa 形成统一的整体。")]),n._v(" "),e("ul",[e("li",[n._v("spa 单页应用，先加载一个统一的壳，在站内路由来形式转发。虽然初始加载比较慢，但是内部跳转非常快。")]),n._v(" "),e("li",[n._v("mpa 多页应用，每次的页面是全加载的。")])]),n._v(" "),e("h2",{attrs:{id:"为什么不用-iframe"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么不用-iframe"}},[n._v("#")]),n._v(" 为什么不用 iframe")]),n._v(" "),e("p",[n._v("iframe 最大的特性就是提供了 "),e("strong",[e("font",{attrs:{color:"red"}},[n._v("浏览器原生的硬隔离方案")])],1),n._v(" 不论是样式隔离、js 隔离这类问题统统都能被完美解决。\n问题也在于他的隔离性无法被突破，导致应用间上下文无法被共享。")]),n._v(" "),e("ul",[e("li",[n._v("1 url 不同步。浏览器刷新 iframe url 状态丢失、后退前进按钮无法使用。")]),n._v(" "),e("li",[n._v("2 UI 不同步，DOM 结构不共享。想象一下屏幕右下角 1/4 的 iframe 里来一个带遮罩层的弹框，同时我们要求这个弹框要浏览器居中显示，还要浏览器 resize 时自动居中…")]),n._v(" "),e("li",[n._v("3 全局上下文完全隔离，内存变量不共享。iframe 内外系统的通信、数据同步等需求，主应用的 cookie 要透传到根域名都不同的子应用中实现免登效果。")]),n._v(" "),e("li",[n._v("4 慢。每次子应用进入都是一次浏览器上下文重建、资源重新加载的过程。")])]),n._v(" "),e("h2",{attrs:{id:"single-spa-vue实践"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#single-spa-vue实践"}},[n._v("#")]),n._v(" Single-spa+Vue实践")]),n._v(" "),e("h3",{attrs:{id:"父应用中主要过程-parent-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父应用中主要过程-parent-vue"}},[n._v("#")]),n._v(" 父应用中主要过程（parent-vue）")]),n._v(" "),e("ul",[e("li",[n._v("1  registerApplication注册应用,当父应用切换到 '/vue'目录时。父应用动态加载子应用脚本（动态标签把app.js和chunk-vendors.js插入到父应用head中 ）。")]),n._v(" "),e("li",[n._v("2  当加载子应用脚本，会去调用子应用的( bootstrap mount unmount),调用子应用mount时候就会走子应用 appOptions方法，把子应用放在应用的el节点上。")]),n._v(" "),e("li",[n._v("2  父应用start()启动。")])]),n._v(" "),e("h3",{attrs:{id:"子应用中主要完成以下过程-children-vue"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子应用中主要完成以下过程-children-vue"}},[n._v("#")]),n._v(" 子应用中主要完成以下过程（children-vue）")]),n._v(" "),e("ul",[e("li",[n._v("1  引入（single-spa-vue，single-spa-react） 把子应用实例挂到singleSpaVue上。并返回 子应用生命周期（ bootstrap mount unmounted ）")]),n._v(" "),e("li",[n._v("2  在vue.config.js中配置 把子应用打包成lib库在父应用中加载。")])]),n._v(" "),e("h2",{attrs:{id:"样式隔离方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#样式隔离方案"}},[n._v("#")]),n._v(" 样式隔离方案")]),n._v(" "),e("h3",{attrs:{id:"子应用之间样式隔离"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#子应用之间样式隔离"}},[n._v("#")]),n._v(" 子应用之间样式隔离")]),n._v(" "),e("ul",[e("li",[n._v("当切换到当前子应用，加载当前子应用样式。当切换其他子应用，删除当前子应用样式，并切换子应用。")])]),n._v(" "),e("h3",{attrs:{id:"父子应用样式隔离方案"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#父子应用样式隔离方案"}},[n._v("#")]),n._v(" 父子应用样式隔离方案")]),n._v(" "),e("ul",[e("li",[n._v("BEM 约定项目前缀")]),n._v(" "),e("li",[n._v("CSS-Modules 打包生成不冲突的选择器名。")]),n._v(" "),e("li",[n._v("Shdow DOM 真正意义的隔离，")])]),n._v(" "),e("p",[n._v("子应用 main.js配置")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport singleSpaVue from \"single-spa-vue\";\n\nVue.config.productionTip = false\n\nnew Vue({\n  router,\n  render: h => h(App)\n}).$mount(\"#app\");\n\nconst appOptions = {\n    el: \"#childrenVue\",\n    router,\n    render: h => h(App)\n};\n\n// 支持应用独立运行、部署，不依赖于基座应用\nconsole.log('----window-',window)\nif (!window.singleSpaNavigate) {\n    delete appOptions.el\n    new Vue(appOptions).$mount('#app')\n}else{\n    //在页面跳转前拼绝对路径\n    __webpack_public_path__ = 'http://localhost:2000/'\n}\n\n// singleSpaVue包装一个vue微前端服务对象\nconst vueLifecycle = singleSpaVue({\n    Vue,\n    appOptions\n});\n// 导出生命周期对象\n// 启动时\nexport const bootstrap = vueLifecycle.bootstrap;\n// 挂载时\nexport const mount  = vueLifecycle.mount;\n// 卸载时\nexport const unmount = vueLifecycle.unmount;\n    const package  = require('./package');\n    module.exports = {\n        devServer:{\n            port:2000\n        },\n        configureWebpack:{\n            output:{\n                //library的值在所有子应用中需要唯一\n                library:package.name,\n                //导出umd格式的包，在全局对象上挂载属性package.name，基座应用需要通过这个全局对象获取一些信息，比如子应用导出的生命周期函数\n                libraryTarget:'umd'\n            },\n        }\n    }\n    \n\n\n")])])]),e("p",[n._v("子应用vue.config.js")]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("const package  = require('./package');\nmodule.exports = {\n    devServer:{\n        port:2000\n    },\n    configureWebpack:{\n        output:{\n            //library的值在所有子应用中需要唯一\n            library:package.name,\n            //导出umd格式的包，在全局对象上挂载属性package.name，基座应用需要通过这个全局对象获取一些信息，比如子应用导出的生命周期函数\n            libraryTarget:'umd'\n        },\n    }\n}\n\n\n")])])]),e("p",[n._v("父应用main.js文件配置")]),n._v(" "),e("div",{staticClass:"language-angular2html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import { createApp } from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport {registerApplication,start} from \"single-spa\";\n\n//获取子应用url，插入到父应用的head中。\nasync function loadScript(url){\n    return  new Promise(function (resolve,reject) {\n        let script = document.createElement('script');\n        script.src = url;\n        script.onload = resolve;\n        script.onerror = reject;\n        document.head.append(script);\n    })\n\n}\n//当父应用切换到 '/vue'目录。父应用动态加载子应用，并把子应用插入到父应用head中。\nregisterApplication('childrenVue',async ()=>{\n    //子应用通过打包生成类库(app.js,chunk-vendors.js)\n    //父应用加载子应用文件，需要自己构建script标签。动态插入到head中\n    console.log('加载模块')\n    await loadScript('http://localhost:2000/js/chunk-vendors.js')\n    await loadScript('http://localhost:2000/js/app.js');\n    return window.childrenVue;//bootstrap mount unmount\n    //用户切换到/vue，执行async方法。\n},location => location.pathname.startsWith('/vue'))\n\n//父应用启动\nstart();\n//父应用注册挂载\ncreateApp(App).use(router).mount('#app')\n")])])])])}),[],!1,null,null,null);e.default=r.exports}}]);