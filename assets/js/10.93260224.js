(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{207:function(t,s,a){t.exports=a.p+"assets/img/async01.7fa53d38.jpg"},208:function(t,s,a){t.exports=a.p+"assets/img/async02.6e8fc051.png"},209:function(t,s,a){t.exports=a.p+"assets/img/async03.ded13e59.png"},304:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"渲染过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#渲染过程"}},[t._v("#")]),t._v(" 渲染过程")]),t._v(" "),s("h2",{attrs:{id:"加载资源的形式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载资源的形式"}},[t._v("#")]),t._v(" 加载资源的形式")]),t._v(" "),s("ul",[s("li",[t._v("html 代码")]),t._v(" "),s("li",[t._v("媒体文件 图片 视频")]),t._v(" "),s("li",[t._v("js css 资源")])]),t._v(" "),s("h2",{attrs:{id:"线程与进程的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程与进程的区别"}},[t._v("#")]),t._v(" 线程与进程的区别")]),t._v(" "),s("ul",[s("li",[t._v("进程是 CPU 资源分配的最小单位；线程是 CPU 调度的最小单位。")]),t._v(" "),s("li",[t._v("一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线；")]),t._v(" "),s("li",[t._v("一个进程的内存空间是共享的，每个线程都可用这些共享内存。")])]),t._v(" "),s("p",[t._v("Chrome 浏览器中为例，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程（下文会详细介绍），比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。")]),t._v(" "),s("p",[t._v("浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成：")]),t._v(" "),s("ul",[s("li",[t._v("GUI 渲染线程")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("主要负责页面的渲染，解析 HTML、CSS，构建 DOM 树，布局和绘制等。\n当界面需要重绘或者由于某种操作引发回流时，将执行该线程。\n该线程与 JS 引擎线程互斥，当执行 JS 引擎线程时，GUI 渲染会被挂起，当任务队列空闲时，JS 引擎才会去执行 GUI 渲染。\n\n")])])]),s("ul",[s("li",[t._v("JavaScript 引擎线程")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("该线程当然是主要负责处理 JavaScript 脚本，执行代码。\n也是主要负责执行准备好待执行的事件，即定时器计数结束，或者异步请求成功并正确返回时，将依次进入任务队列，等待 JS 引擎线程的执行。\n当然，该线程与 GUI 渲染线程互斥，当 JS 引擎线程执行 JavaScript 脚本时间过长，将导致页面渲染的阻塞。\n")])])]),s("ul",[s("li",[t._v("定时触发器线程")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("负责执行异步定时器一类的函数的线程，如： setTimeout，setInterval。\n主线程依次执行代码时，遇到定时器，会将定时器交给该线程处理，当计数完毕后，事件触发线程会将计数完毕后的事件加入到任务队列的尾部，等待 JS 引擎线程执行。\n")])])]),s("ul",[s("li",[t._v("事件触发线程")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("主要负责将准备好的事件交给 JS 引擎线程执行。\n比如 setTimeout 定时器计数结束， ajax 等异步请求成功并触发回调函数，或者用户触发点击事件时，该线程会将整装待发的事件依次加入到任务队列的队尾，等待 JS 引擎线程的执行。\n")])])]),s("ul",[s("li",[t._v("异步 http 请求线程")])]),t._v(" "),s("p",[t._v("像nodejs只有一个线程，但是可以根据当前系统的cpu核数开启多个进程，一个主进程，多个子进程。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fork "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'child_process'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fork"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cluster "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'cluster'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//集群   ")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" cpuLength "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cpus")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//进程守候 相当于pm2的作用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isMaster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("cpuLength"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//根据cpu 核数开启多个子进程")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    cluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'exit'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("worker")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'子进程退出'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        cluster"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fork")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启子进程")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" server "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("res")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//开启子进程 计算compute.js")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const computeProcess = fork('./compute.js');")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res.end('end')")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//主进程")]),t._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'server is 3000'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"输入-url-到页面加载完成-发生了什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#输入-url-到页面加载完成-发生了什么"}},[t._v("#")]),t._v(" 输入 URL 到页面加载完成，发生了什么？")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("步骤")]),t._v(" "),s("th",[t._v("过程")]),t._v(" "),s("th",[t._v("描述")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("第一步")]),t._v(" "),s("td",[t._v("网络请求")]),t._v(" "),s("td",[t._v("DNS查询，建立TCP连接，发起HTTP请求，收到请求返回HTML")])]),t._v(" "),s("tr",[s("td",[t._v("第二步")]),t._v(" "),s("td",[t._v("解析")]),t._v(" "),s("td",[t._v("单元格 DOMTree和CSSOM 合并生成renderTree，（优化解析，css放在head中，不要异步加载css，js放在body后，或者合理使用deffer/async）")])]),t._v(" "),s("tr",[s("td",[t._v("第三步")]),t._v(" "),s("td",[t._v("渲染")]),t._v(" "),s("td",[t._v("计算各个DOM的尺寸 定位 最后绘制到页面上（渲染过程中遇到js可能会先执行js）渲染过程中也可能会触发重排重绘制")])])])]),t._v(" "),s("p",[t._v("主要分为以下5个部分")]),t._v(" "),s("ul",[s("li",[t._v("DNS（域名解析系统)查找域名对应的ip")]),t._v(" "),s("li",[t._v("TCP连接，和DNS解析拿到的ip建立TCP连接")]),t._v(" "),s("li",[t._v("HTTP请求，基于TCP发起HTTP请求")]),t._v(" "),s("li",[t._v("服务端接到请求处理，返回响应内容")]),t._v(" "),s("li",[t._v("解析获取返回的响应内容")])]),t._v(" "),s("h4",{attrs:{id:"http优化方向"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http优化方向"}},[t._v("#")]),t._v(" HTTP优化方向")]),t._v(" "),s("p",[t._v("减少请求次数 减少单次请求耗时 （即资源的压缩与合并）")]),t._v(" "),s("h2",{attrs:{id:"加载资源的过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载资源的过程"}},[t._v("#")]),t._v(" 加载资源的过程")]),t._v(" "),s("ul",[s("li",[t._v("DNS 解析 域名——>IP 地址，\n还可以根据不同地域访问不同地域的云服务器，这样可以加快访问速度。")]),t._v(" "),s("li",[t._v("浏览器根据 Ip 地址向服务器发起 http 请求（三次握手）")]),t._v(" "),s("li",[t._v("服务器处理 http 请求，返回给浏览器。")]),t._v(" "),s("li",[t._v("根据 HTML 代码生产 DOM Tree。")]),t._v(" "),s("li",[t._v("根据 CSS 生产 CSSOM。（CSSOM css 对象模型）")]),t._v(" "),s("li",[t._v("将 DOM Tree 和 CSSOM 整合形成 Render Tree。")]),t._v(" "),s("li",[t._v("浏览器根据 Render Tree 渲染页面。")]),t._v(" "),s("li",[t._v("遇到 script 则暂停渲染，优先加载执行 js 代码。执行完在继续。")])]),t._v(" "),s("h2",{attrs:{id:"css-为什么要尽量放在-head-中"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-为什么要尽量放在-head-中"}},[t._v("#")]),t._v(" css 为什么要尽量放在 head 中")]),t._v(" "),s("p",[t._v("因为浏览器解析时，从上到下解析，生成 DOM-tree， 生成 CSSOM，生成 Render tree。如果把 css 放在 body 中，此时生成的 Render Tree 可能不包含这段 css 代码片段，浏览器需要对比生成的 Render tree。造成二次渲染。")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("meta")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("charset")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("utf-8"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("title"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("index.css"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    #div{\n        color:red;\n        fontSize:20px;\n    }\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("111"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"为什么建议把-js-放在-body-最后"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么建议把-js-放在-body-最后"}},[t._v("#")]),t._v(" 为什么建议把 js 放在 body 最后？")]),t._v(" "),s("p",[t._v("js 在页面中，渲染的过程中会占用主线程，堵塞页面渲染，\n所以要把 js 外在 body 外边。先让页面解析显示出来，然后执行 body 外的 js 对解析出来的 render tree 做修改。")]),t._v(" "),s("h2",{attrs:{id:"window-onload-vs-domcontentloaded"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#window-onload-vs-domcontentloaded"}},[t._v("#")]),t._v(" window.onload VS DOMContentLoaded")]),t._v(" "),s("ul",[s("li",[t._v("onload 页面全部加载完才执行 包活 视频 图片资源")]),t._v(" "),s("li",[t._v("DOM 渲染完既可执行，此时图片 视频还可以没有加载\n主线程是 JS 发生的地方.也是渲染发生的地方，是 DOM 存在的地方。")])]),t._v(" "),s("p",[t._v("网页上大部分活动都是有确定性的顺序，我们不会同时去运行多段代码去修改同一处 DOM。")]),t._v(" "),s("p",[t._v("如果 一个任务运行 200ms，用户就会感觉到，因为它阻止了加载 渲染 和交互")]),t._v(" "),s("p",[t._v("计算机中有主线程，但我们还需其他线程 比如网络请求 编码解码 加密监控输入设备。一旦这些线程有需要页面响应的相关操作，我们都需要通知主线程。")]),t._v(" "),s("p",[t._v("我们通过事件循环来协调这些活动，")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("//在主线程上运行，当我们需要等待5000ms，我们是在主线程上等待，阻止了主线程上的其他活动，\nsetTimeOut在主线程上运行，同时回调函数也会在主线程上执行。\nsetTimeOut(callback,ms)\n\n\n如果把setTiemOut移出主线程 会有大量并行运行的JS，编辑相同的DOM。\n")])])]),s("p",[t._v("解决方法\n创建一个任务加到任务队列，以便在某个时刻回到主线程继续执行，我们在 js 所有线程上调用 js，这种方案都行的通。")]),t._v(" "),s("p",[t._v("当用户点击鼠标，操作系统如何通知 js？\n通过向任务队列中添加任务，网络请求的数据也是向队列中添加任务，")]),t._v(" "),s("p",[t._v("所以主线程是在任务队列中读取任务的。")]),t._v(" "),s("h2",{attrs:{id:"settimeout-不适合做动画"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#settimeout-不适合做动画"}},[t._v("#")]),t._v(" setTimeOut 不适合做动画")]),t._v(" "),s("p",[t._v("因为一帧中，setTimeOut 都会执行多次，假设每一帧 setTimeOut 被执行四次，那么其中 3 次的任务都是无效，因为浏览器并不会渲染。\n而且可能存在当前这一帧没有任务执行，下一帧有几个 setTimeOut 执行，这样就造成了")]),t._v(" "),s("p",[t._v("requestAnimationFrame 回调函数运行在处理 css 之前和绘制之前，")]),t._v(" "),s("p",[t._v("执行任务的阶段，浏览器不考虑 css 的变化，当它真正执行到渲染时，浏览器会看你到底改变了什么。")]),t._v(" "),s("h2",{attrs:{id:"异步加载资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异步加载资源"}},[t._v("#")]),t._v(" 异步加载资源")]),t._v(" "),s("h3",{attrs:{id:"async-与-defer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-与-defer"}},[t._v("#")]),t._v(" async 与 defer")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),t._v(" async"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("script src"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),t._v(" defer"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("script"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("p",[t._v("浏览器在解析 HTML 的时候，如果遇到一个没有任何属性的 script 标签，就会暂停解析，先发送网络请求获取该 JS 脚本的代码内容，然后让 JS 引擎执行该代码，当代码执行完毕后恢复解析。整个过程如下图所示：")]),t._v(" "),s("p",[t._v("可以看到，script 阻塞了浏览器对 HTML 的解析，如果获取 JS 脚本的网络请求迟迟得不到响应，或者 JS 脚本执行时间过长，都会导致白屏，用户看不到页面内容。\n"),s("img",{attrs:{src:a(207),alt:"async01.jpg"}})]),t._v(" "),s("h3",{attrs:{id:"async-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-script"}},[t._v("#")]),t._v(" async script")]),t._v(" "),s("p",[t._v("当浏览器遇到带有 async 属性的 script 时，请求该脚本的网络请求是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器会暂停解析，先让 JS 引擎执行代码，执行完毕后再进行解析.")]),t._v(" "),s("p",[t._v("如果async脚本已经回来，会暂停浏览器解析\bHtml，等async脚本执行完后继续浏览器解析Html.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(208),alt:"async02.png"}})]),t._v(" "),s("h3",{attrs:{id:"defer-script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defer-script"}},[t._v("#")]),t._v(" defer script")]),t._v(" "),s("p",[t._v("defer 属性的 script 时，获取该脚本的网络请求也是异步的，不会阻塞浏览器解析 HTML，一旦网络请求回来之后，如果此时 HTML 还没有解析完，浏览器不会暂停解析并执行 JS 代码，而是等待 HTML 解析完毕再执行 JS 代码.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(209),alt:"async03.png"}})]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表头")]),t._v(" "),s("th",[t._v("JS 执行顺序")]),t._v(" "),s("th",[t._v("效果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("script")]),t._v(" "),s("td",[t._v("在 HTML 中的顺序")]),t._v(" "),s("td",[t._v("阻塞解析html")])]),t._v(" "),s("tr",[s("td",[t._v("async")]),t._v(" "),s("td",[t._v("网络请求返回顺序")]),t._v(" "),s("td",[t._v("不阻塞解析html 但执行脚本依赖于脚本返回的时间")])]),t._v(" "),s("tr",[s("td",[t._v("defer")]),t._v(" "),s("td",[t._v("网络请求返在 HTML 中的顺序")]),t._v(" "),s("td",[t._v("不阻塞解析html 在解析html之后 才执行脚本")])])])]),t._v(" "),s("h2",{attrs:{id:"预加载-与-预解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#预加载-与-预解析"}},[t._v("#")]),t._v(" 预加载 与 预解析")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("表头")]),t._v(" "),s("th",[t._v("内容")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("preload")]),t._v(" "),s("td",[t._v("资源在当前使用，会优先加载")])]),t._v(" "),s("tr",[s("td",[t._v("prefetch")]),t._v(" "),s("td",[t._v("资源在未来页面使用，会在空闲时加载")])]),t._v(" "),s("tr",[s("td",[t._v("dns-prefetch")]),t._v(" "),s("td",[t._v("dns预查询（未访问的页面 提前建立dns的解析）")])]),t._v(" "),s("tr",[s("td",[t._v("preconnect")]),t._v(" "),s("td",[t._v("未连接的页面预连接")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);