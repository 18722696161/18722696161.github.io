(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{229:function(n,t,e){n.exports=e.p+"assets/img/youhua39.9e31419f.png"},230:function(n,t,e){n.exports=e.p+"assets/img/youhua40.425bfa83.png"},300:function(n,t,e){"use strict";e.r(t);var a=e(5),r=Object(a.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"八、对症下药-dom-优化原理与基本实践"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#八、对症下药-dom-优化原理与基本实践"}},[n._v("#")]),n._v(" 八、对症下药—— DOM 优化原理与基本实践")]),n._v(" "),t("h2",{attrs:{id:"从本节开始-我们要关心的两大核心问题就是-dom-为什么这么慢-以及-如何使-dom-变快-。"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从本节开始-我们要关心的两大核心问题就是-dom-为什么这么慢-以及-如何使-dom-变快-。"}},[n._v("#")]),n._v(" 从本节开始，我们要关心的两大核心问题就是：“DOM 为什么这么慢”以及“如何使 DOM 变快”。")]),n._v(" "),t("p",[n._v("后者是一个比“生存还是毁灭”更加经典的问题。不仅我们为它“肝肠寸断”，许多优秀前端框架的作者大\n大们也曾为其绞尽脑汁。这一点可喜可贺——研究的人越多，产出优秀实践的概率就越大。因此在本章\n的方法论环节，我们不仅会根据 DOM 特性及渲染原理为大家讲解基本的优化思路，还会涉及到一部分\n生产实践。\n循着这个思路，我们把 DOM 优化这块划分为三个小专题：“DOM 优化思路”、“异步更新策略”及“回流\n与重绘”。本节对应第一个小专题。三个小专题休戚与共、你侬我侬，在思路上相互依赖、一脉相承，\n因此此处严格禁止任何姿势的跳读行为。\n考虑到本节内容与上一节有着密不可分的关系，因此强烈不建议没有读完上一节的同学直接跳读本节。")]),n._v(" "),t("h3",{attrs:{id:"望闻问切-dom-为什么这么慢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#望闻问切-dom-为什么这么慢"}},[n._v("#")]),n._v(" 望闻问切：DOM 为什么这么慢")]),n._v(" "),t("h4",{attrs:{id:"因为收了-过路费"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#因为收了-过路费"}},[n._v("#")]),n._v(" 因为收了“过路费”")]),n._v(" "),t("p",[n._v("把 DOM 和 JavaScript 各自想象成一个岛屿，它们之间用收费桥梁连接。——《高性能\nJavaScript》")]),n._v(" "),t("p",[n._v("JS 是很快的，在 JS 中修改 DOM 对象也是很快的。在JS的世界里，一切是简单的、迅速的。但 DOM 操\n作并非 JS 一个人的独舞，而是两个模块之间的协作。\n上一节我们提到，JS 引擎和渲染引擎（浏览器内核）是独立实现的。当我们用 JS 去操作 DOM 时，本\n质上是 JS 引擎和渲染引擎之间进行了“跨界交流”。这个“跨界交流”的实现并不简单，它依赖了桥接接口\n作为“桥梁”（如下图）。\n"),t("img",{attrs:{src:e(229)}}),n._v("\n过“桥”要收费——这个开销本身就是不可忽略的。我们每操作一次 DOM（不管是为了修改还是仅仅为\n了访问其值），都要过一次“桥”。过“桥”的次数一多，就会产生比较明显的性能问题。因此“减少 DOM\n操作”的建议，并非空穴来风。")]),n._v(" "),t("h4",{attrs:{id:"对-dom-的修改引发样式的更迭"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对-dom-的修改引发样式的更迭"}},[n._v("#")]),n._v(" 对 DOM 的修改引发样式的更迭")]),n._v(" "),t("p",[n._v("过桥很慢，到了桥对岸，我们的更改操作带来的结果也很慢。\n很多时候，我们对 DOM 的操作都不会局限于访问，而是为了修改它。当我们对 DOM 的修改会引发它\n外观（样式）上的改变时，就会触发回流或重绘。\n这个过程本质上还是因为我们对 DOM 的修改触发了渲染树（Render Tree）的变化所导致的：\n"),t("img",{attrs:{src:e(230)}})]),n._v(" "),t("ul",[t("li",[n._v("回流：当我们对 DOM 的修改引发了 DOM 几何尺寸的变化（比如修改元素的宽、高或隐藏元素\n等）时，浏览器需要重新计算元素的几何属性（其他元素的几何属性和位置也会因此受到影响），\n然后再将计算的结果绘制出来。这个过程就是回流（也叫重排）。")]),n._v(" "),t("li",[n._v("重绘：当我们对 DOM 的修改导致了样式的变化、却并未影响其几何属性（比如修改了颜色或背景\n色）时，浏览器不需重新计算元素的几何属性、直接为该元素绘制新的样式（跳过了上图所示的回\n流环节）。这个过程叫做重绘。")])]),n._v(" "),t("p",[n._v("由此我们可以看出，重绘不一定导致回流，回流一定会导致重绘。硬要比较的话，回流比重绘做的事情\n更多，带来的开销也更大。但这两个说到底都是吃性能的，所以都不是什么善茬。我们在开发中，要从\n代码层面出发，尽可能把回流和重绘的次数最小化。")]),n._v(" "),t("h3",{attrs:{id:"药到病除-给你的-dom-提提速"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#药到病除-给你的-dom-提提速"}},[n._v("#")]),n._v(" 药到病除：给你的 DOM “提提速”")]),n._v(" "),t("p",[n._v("知道了 DOM 慢的原因，我们就可以对症下药了。")]),n._v(" "),t("h4",{attrs:{id:"减少-dom-操作-少交-过路费-、避免过度渲染"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#减少-dom-操作-少交-过路费-、避免过度渲染"}},[n._v("#")]),n._v(" 减少 DOM 操作：少交“过路费”、避免过度渲染")]),n._v(" "),t("p",[n._v("我们来看这样一个🌰，HTML 内容如下：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>DOM操作测试</title>\n</head>\n<body>\n  <div id="container"></div>\n</body>\n</html>\n')])])]),t("p",[n._v("此时我有一个假需求——我想往 container 元素里写 10000 句一样的话。如果我这么做：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("for(var count=0;count<10000;count++){\n  document.getElementById('container').innerHTML+='<span>我是一个小测试</span>'\n}\n")])])]),t("p",[n._v("这段代码有两个明显的可优化点。\n第一点，过路费交太多了。我们每一次循环都调用 DOM 接口重新获取了一次 container 元素，相当于\n每次循环都交了一次过路费。前后交了 10000 次过路费，但其中 9999 次过路费都可以用缓存变量的方\n式节省下来：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 只获取一次container\nlet container = document.getElementById('container')\nfor(let count=0;count<10000;count++){\n  container.innerHTML += '<span>我是一个小测试</span>'\n}\n")])])]),t("p",[n._v("第二点，不必要的 DOM 更改太多了。我们的 10000 次循环里，修改了 10000 次 DOM 树。我们前面\n说过，对 DOM 的修改会引发渲染树的改变、进而去走一个（可能的）回流或重绘的过程，而这个过程\n的开销是很“贵”的。这么贵的操作，我们竟然重复执行了 N 多次！其实我们可以通过就事论事的方式节\n省下来不必要的渲染：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let container = document.getElementById('container')\nlet content = ''\nfor(let count=0;count<10000;count++){\n  // 先对内容进行操作\n  content += '<span>我是一个小测试</span>'\n}\n// 内容处理好了,最后再触发DOM的更改\ncontainer.innerHTML = content\n")])])]),t("p",[n._v("所谓“就事论事”，就像大家所看到的：JS 层面的事情，JS 自己去处理，处理好了，再来找 DOM 打报\n告。\n事实上，考虑JS 的运行速度，比 DOM 快得多这个特性。我们减少 DOM 操作的核心思路，就是让 JS\n去给 DOM 分压。\n这个思路，在 DOM Fragment 中体现得淋漓尽致。\nDocumentFragment 接口表示一个没有父级文件的最小文档对象。它被当做一个轻量版的\nDocument 使用，用于存储已排好版的或尚未打理好格式的XML片段。因为\nDocumentFragment 不是真实 DOM 树的一部分，它的变化不会引起 DOM 树的重新渲染的操作\n（reflow），且不会导致性能等问题。\n在我们上面的例子里，字符串变量 content 就扮演着一个 DOM Fragment 的角色。其实无论字符串变\n量也好，DOM Fragment 也罢，它们本质上都作为脱离了真实 DOM 树的容器出现，用于缓存批量化\n的 DOM 操作。\n前面我们直接用 innerHTML 去拼接目标内容，这样做固然有用，但却不够优雅。相比之下，DOM\nFragment 可以帮助我们用更加结构化的方式去达成同样的目的，从而在维持性能的同时，保住我们代\n码的可拓展和可维护性。我们现在用 DOM Fragment 来改写上面的例子：")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("let container = document.getElementById('container')\n// 创建一个DOM Fragment对象作为容器\nlet content = document.createDocumentFragment()\nfor(let count=0;count<10000;count++){\n  // span此时可以通过DOM API去创建\n  let oSpan = document.createElement(\"span\")\n  oSpan.innerHTML = '我是一个小测试'\n  // 像操作真实DOM一样操作DOM Fragment对象\n  content.appendChild(oSpan)\n}\n// 内容处理好了,最后再触发真实DOM的更改\ncontainer.appendChild(content)\n")])])]),t("p",[n._v("我们运行这段代码，可以得到与前面两种写法相同的运行结果。\n可以看出，DOM Fragment 对象允许我们像操作真实 DOM 一样去调用各种各样的 DOM API，我们的\n代码质量因此得到了保证。并且它的身份也非常纯粹：当我们试图将其 append 进真实 DOM 时，它会\n在乖乖交出自身缓存的所有后代节点后全身而退，完美地完成一个容器的使命，而不会出现在真实的\nDOM 结构中。这种结构化、干净利落的特性，使得 DOM Fragment 作为经典的性能优化手段大受欢\n迎，这一点在 jQuery、Vue 等优秀前端框架的源码中均有体现。\n相比 DOM 命题的博大精深，一个简单的循环 Demo 显然不能说明所有问题。不过不用着急，在本节，\n我只希望大家能牢记原理与宏观思路。“药到病除”到这里才刚刚开了个头，下个小节，我们将深挖事件\n循环机制，从而深入 JS 层面的生产实践。")])])}),[],!1,null,null,null);t.default=r.exports}}]);