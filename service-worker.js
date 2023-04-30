/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "ff357494f414f75220a2221b98fa721f"
  },
  {
    "url": "about/algorithm/图.html",
    "revision": "d76d2840b363141577026c535d60c7fa"
  },
  {
    "url": "about/algorithm/堆.html",
    "revision": "48292bca2262b3c0549591d9ad116f91"
  },
  {
    "url": "about/algorithm/时间、空间复杂度.html",
    "revision": "c6725a5bc29cb943cd39ba4a7d7d038c"
  },
  {
    "url": "about/algorithm/栈.html",
    "revision": "d3c0e7dd5d5c125c4d2e614f637e93c2"
  },
  {
    "url": "about/algorithm/树.html",
    "revision": "dc291ecadb0e0801dc8198fbdb2b3238"
  },
  {
    "url": "about/algorithm/链表.html",
    "revision": "4c4d3e1e3652b57f2445b43157e2dbe7"
  },
  {
    "url": "about/algorithm/队列.html",
    "revision": "2fdf0d28f1b617fd4a99606e197581f7"
  },
  {
    "url": "about/algorithm/集合.html",
    "revision": "f6d98ecb32ac65fe06595a8cc3d815ea"
  },
  {
    "url": "about/basics/arguments.html",
    "revision": "4715e6d75e813ee629cbff08186741a3"
  },
  {
    "url": "about/basics/dsBridge.html",
    "revision": "93241f5b38bbfe742626805c42df0dab"
  },
  {
    "url": "about/basics/generator.html",
    "revision": "b04aec34f02e049f56cf9bb1686cd008"
  },
  {
    "url": "about/basics/js事件循环机制和node事件循环机制.html",
    "revision": "4a8ed955403e4232b1ee10c0358c6a75"
  },
  {
    "url": "about/basics/map.html",
    "revision": "9d9d9744f3d702da89fd849edd9d3f51"
  },
  {
    "url": "about/basics/new的过程.html",
    "revision": "1814dd1680bd9bb10e906f68dd78b136"
  },
  {
    "url": "about/basics/Object.html",
    "revision": "02cf0da09cc1bf64785c696784a29853"
  },
  {
    "url": "about/basics/promise.html",
    "revision": "13869aa0c8373acc1125174a010cef2c"
  },
  {
    "url": "about/basics/ts学习.html",
    "revision": "88fdf79407ba654f23c9d9fa5e5e5006"
  },
  {
    "url": "about/basics/事件流.html",
    "revision": "3c50767fda6158f1ae8635a0ed3334fb"
  },
  {
    "url": "about/basics/原型链.html",
    "revision": "565f8bb3deabe40c7a2f64e0c9b8f4f4"
  },
  {
    "url": "about/basics/垃圾回收机制.html",
    "revision": "71486ed7dbe8a9831de316b940cb1c81"
  },
  {
    "url": "about/basics/异步.html",
    "revision": "084356dbaf3fa7e01d44d3c4baf7fc5b"
  },
  {
    "url": "about/basics/循环相关函数.html",
    "revision": "0f93b373849ca7e7bd8017ef860d71a2"
  },
  {
    "url": "about/basics/数据类型.html",
    "revision": "ffeac31eed86fc7e018a05e78368c827"
  },
  {
    "url": "about/basics/数组操作.html",
    "revision": "971609a05bea700d2cdaf0e07b7d634c"
  },
  {
    "url": "about/basics/模块化.html",
    "revision": "a837faa6a7280d4a96cb67b20bec839d"
  },
  {
    "url": "about/basics/正则.html",
    "revision": "b0971120494583cc5826890e0266d5e3"
  },
  {
    "url": "about/basics/算法.html",
    "revision": "b5ceb3ca0fd90a80e04bdcd886dd1b55"
  },
  {
    "url": "about/basics/继承.html",
    "revision": "5907223105dc768cb6c9b6eb67dc12be"
  },
  {
    "url": "about/basics/跨域.html",
    "revision": "1d2dce443bb92f5e23e113b9c8aadeba"
  },
  {
    "url": "about/basics/闭包.html",
    "revision": "d87b1c98fb0b88fe100e6cc36be910a3"
  },
  {
    "url": "about/blockchain/truffle.html",
    "revision": "cc8a71f55e4f3c04121ccf54d7b7e2a8"
  },
  {
    "url": "about/blockchain/web3.html",
    "revision": "244f38515eface3736dff796e5ec2e44"
  },
  {
    "url": "about/brower/事件循环.html",
    "revision": "f9945d76f6d071f9d8a7b2898f9652c2"
  },
  {
    "url": "about/brower/渲染过程.html",
    "revision": "e6c9381913efe455a37694d17fcaa31b"
  },
  {
    "url": "about/chrome/chrome插件开发.html",
    "revision": "07ee9287079b9b2e5287ed42dcce314b"
  },
  {
    "url": "about/chrome/贴吧自动签到插件开发.html",
    "revision": "45480224d6e3621f77e915314fc35cc0"
  },
  {
    "url": "about/css/BFC介绍和解决的问题.html",
    "revision": "562c74aaa0325d0bf7b39c305dacffd1"
  },
  {
    "url": "about/css/scss使用.html",
    "revision": "a94cd1905c2933453b6f6dc6a2d9e5b5"
  },
  {
    "url": "about/css/清除浮动的几种方式.html",
    "revision": "7330494931129e95a0d346075993b3fa"
  },
  {
    "url": "about/css/盒子布局.html",
    "revision": "7bfea2a0b1a6f4a205bee0066067ce7b"
  },
  {
    "url": "about/css/盒子模型.html",
    "revision": "08eef0184fcef2d3791cef9be58697fc"
  },
  {
    "url": "about/http/ca证书.html",
    "revision": "2286d84c46422f93e294f5505c045a04"
  },
  {
    "url": "about/http/HTTP基础知识.html",
    "revision": "363ae188cf7397e1458718df8b017fb7"
  },
  {
    "url": "about/http/HTTP长连接.html",
    "revision": "1cb018ce1939929b741313d36d65b03f"
  },
  {
    "url": "about/http/TCP协议.html",
    "revision": "dc9fe449c91e94a4c12c83be6bc7938c"
  },
  {
    "url": "about/http/web安全.html",
    "revision": "f5a4a9e634cde44874a6c7d555442631"
  },
  {
    "url": "about/http/缓存.html",
    "revision": "e97127c23ca1e6bb047791ba1644e52a"
  },
  {
    "url": "about/http/跨域.html",
    "revision": "f06b8f72779f6df9b868cb909581c8e3"
  },
  {
    "url": "about/LOGAndMonitor/日志及上报.html",
    "revision": "df48cc1f65a57fec70acb96145d69f19"
  },
  {
    "url": "about/LOGAndMonitor/监控及告警.html",
    "revision": "1323fe2af039c12c62b00589caab2261"
  },
  {
    "url": "about/nature/CDN 的缓存与回源机制解析.html",
    "revision": "cb70414ee93c910c6d24366292d0eebe"
  },
  {
    "url": "about/nature/Performance、LightHouse 与性能 API.html",
    "revision": "6350469840a9a3afd67fe9a5940b40dd"
  },
  {
    "url": "about/nature/webpack性能调优与Gzip原理.html",
    "revision": "c655de7ee2b383a40d016ec5e80d8182"
  },
  {
    "url": "about/nature/事件的节流throttle与防抖debounce.html",
    "revision": "fa9d48df248e994fd8195b158e96c618"
  },
  {
    "url": "about/nature/优化首屏体验——Lazy-Load 初探.html",
    "revision": "8e81b16b89acdb3b535033a04faa8d39"
  },
  {
    "url": "about/nature/最后一击——回流Reflow与重绘Repaint.html",
    "revision": "2456a4f2fd2f0b86607f63cb192d0f49"
  },
  {
    "url": "about/nature/千方百计——Event Loop 与异步更新策略.html",
    "revision": "d329f9212e1c652c2d0b0d71e89e21f8"
  },
  {
    "url": "about/nature/图片优化-质量与性能的博弈.html",
    "revision": "c4dac5ac2789280a0c4a341eb4cbcf67"
  },
  {
    "url": "about/nature/对症下药—— DOM 优化原理与基本实践.html",
    "revision": "b60687a05c96c221f138e72a884bdbd6"
  },
  {
    "url": "about/nature/性能优化知识体系.html",
    "revision": "3b1ee49a53b818c99d414e1c12cd2e58"
  },
  {
    "url": "about/nature/服务端渲染的探索与实践.html",
    "revision": "e65dd02d88ba894c25dc32292a562072"
  },
  {
    "url": "about/nature/本地存储——从 Cookie 到 Web Storage、IndexDB.html",
    "revision": "76d77b1ba6ff9f810e5bb0b722ee3e13"
  },
  {
    "url": "about/nature/浏览器缓存机制介绍与缓存策略剖析.html",
    "revision": "0e406b34500587fdc49ec69cc75167cd"
  },
  {
    "url": "about/nature/知己知彼——解锁浏览器背后的运行机制.html",
    "revision": "ed5281b98a21ca33bc5b11ef0ce915d4"
  },
  {
    "url": "about/node/io.html",
    "revision": "c90d54221e4609761708dc3dc9f4e7a3"
  },
  {
    "url": "about/node/koa.html",
    "revision": "39adaefd3e24620ff0f2d8bf97fd68e5"
  },
  {
    "url": "about/project/小程序架构设计.html",
    "revision": "30f5ef0ed47288e5081a13c938e6fe67"
  },
  {
    "url": "about/project/微前端.html",
    "revision": "f7a17200e1dcf18d932b6da855a8db6a"
  },
  {
    "url": "about/project/性能监控.html",
    "revision": "bd293caf388cf6dd4a1b647752d9efb6"
  },
  {
    "url": "about/project/项目总结.html",
    "revision": "e2bc7480c73e3a084eca80bdc58cb715"
  },
  {
    "url": "about/question/js.html",
    "revision": "50651beaac41da52546f5adb6be79807"
  },
  {
    "url": "about/question/vue.html",
    "revision": "e33ab4563d6b5a3aaae9f467586c13f9"
  },
  {
    "url": "about/question/多页应用中如何运用vuex共享数据.html",
    "revision": "0f7db9357f10a9228734bab66719e912"
  },
  {
    "url": "about/question/移动端问题.html",
    "revision": "df1cc49c0b84bff7f817a47f2c284d4f"
  },
  {
    "url": "about/question/高并发.html",
    "revision": "fb007d285f7c2bedd1f4301c3234b232"
  },
  {
    "url": "about/react/react.html",
    "revision": "6710a50cc48ee31ae2504d261bf41bf8"
  },
  {
    "url": "about/tools/mysql.html",
    "revision": "543169cbcfaccb7b8bedd7e7db3d8dfd"
  },
  {
    "url": "about/ts/基本知识.html",
    "revision": "cfd3ec0ad87573162cbfe17a2654762a"
  },
  {
    "url": "about/vue/h函数.html",
    "revision": "879ca7d8131c4730b2a7f48477b45be9"
  },
  {
    "url": "about/vue/newVue时候都做了什么.html",
    "revision": "93c066ae4f29acac3ce00b64b3afb7e4"
  },
  {
    "url": "about/vue/nextTick.html",
    "revision": "cc02460d239cc1b47807b7927050331f"
  },
  {
    "url": "about/vue/patch函数.html",
    "revision": "6e8ff9599cde5e511d65052888476057"
  },
  {
    "url": "about/vue/render函数.html",
    "revision": "aa5c21da08417673128ac09e1d2f42cc"
  },
  {
    "url": "about/vue/update.html",
    "revision": "b334dad0dfc82c5cf39d25909cb6ee42"
  },
  {
    "url": "about/vue/vue3.html",
    "revision": "813e3b526560bcdf47fa1fe867fe89aa"
  },
  {
    "url": "about/vue/vue实例挂载.html",
    "revision": "244e037e1dce6d192bfbc1481676b44e"
  },
  {
    "url": "about/vue/watch实现.html",
    "revision": "dc87ef7dda24195fe0b0d3e2f387a462"
  },
  {
    "url": "about/vue/响应式系统.html",
    "revision": "2bf42a098b8146eac846c02d6bb1d4f8"
  },
  {
    "url": "about/vue/异步渲染.html",
    "revision": "204bf6226d6963c740dd964b13cd7829"
  },
  {
    "url": "about/vue/异步组件.html",
    "revision": "263d1aa181f0e2161f1c415eeca0ae7c"
  },
  {
    "url": "about/vue/插槽slot.html",
    "revision": "d3b16299a9601fcdeeb4bc3fcf30cc49"
  },
  {
    "url": "about/vue/模版渲染.html",
    "revision": "17a0aa11762f294be7728e616e0a4e17"
  },
  {
    "url": "about/vue/生命周期.html",
    "revision": "154131f589e047e946c67515e2c9c291"
  },
  {
    "url": "about/vue/组件通信.html",
    "revision": "abad1b48aaad0853dced8bce40ca9ca5"
  },
  {
    "url": "about/vue/自定义model.html",
    "revision": "20b97ae2521607d0533ef7b50275fd0e"
  },
  {
    "url": "about/vue/虚拟DOM.html",
    "revision": "54e0f9cd5bad4628a3c904ce4d0ea4bb"
  },
  {
    "url": "about/vue/路由原理.html",
    "revision": "61bbfb4f1d31b794c1b75afe730b7412"
  },
  {
    "url": "about/vue3/响应式系统.html",
    "revision": "a6febfe04ec97281759225d7e640fdf8"
  },
  {
    "url": "about/vue3/基本使用.html",
    "revision": "2550d4452b44219223cfbde66b1e3f6c"
  },
  {
    "url": "about/vuePrinciple/原理概况.html",
    "revision": "c486c75cfcae576b75a5d9b6b7714f29"
  },
  {
    "url": "about/webpack/Tree-Shaking.html",
    "revision": "b950acd79f0cfd6d75bdf880e66a2471"
  },
  {
    "url": "about/webpack/Webpack Externals.html",
    "revision": "27183c0053ea4926b920696be807dc42"
  },
  {
    "url": "about/webpack/webpack配置.html",
    "revision": "2296a2b65ebc094dcdcc0e797483f93e"
  },
  {
    "url": "assets/css/0.styles.b10b5fb3.css",
    "revision": "96e2ea77df90accbb2edf020251f0734"
  },
  {
    "url": "assets/img/1492200-20181023200852131-291342969.e681c247.png",
    "revision": "e681c24702efc742404ac94f5f57a1a5"
  },
  {
    "url": "assets/img/1599408879599.efe5515c.jpg",
    "revision": "efe5515cddcadb63ec5fa471359aa3d0"
  },
  {
    "url": "assets/img/20191022172607993.56f26a00.png",
    "revision": "56f26a00e8d4520c04f289c4be880525"
  },
  {
    "url": "assets/img/async01.7fa53d38.jpg",
    "revision": "7fa53d3894bf78655ebd136cf07a1bd3"
  },
  {
    "url": "assets/img/async02.6e8fc051.png",
    "revision": "6e8fc051cea138f3385ccf1c831dc2d5"
  },
  {
    "url": "assets/img/async03.ded13e59.png",
    "revision": "ded13e5989474d65a11fb81145ee30a4"
  },
  {
    "url": "assets/img/bridge01.1631ca20.png",
    "revision": "1631ca200464a58a612f9f97a6d9994e"
  },
  {
    "url": "assets/img/event-flow.916e26e9.png",
    "revision": "916e26e950169916e8230b9164d971d4"
  },
  {
    "url": "assets/img/http_huancun.9b9d8560.jpg",
    "revision": "9b9d85605da9b241bf793d87de05cae8"
  },
  {
    "url": "assets/img/koa-yangcong.0a1112a8.png",
    "revision": "0a1112a89f445bee4c87dbb083ca0282"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/smallApp02.aab1c20a.png",
    "revision": "aab1c20ac468be6295b0f17817ad2b42"
  },
  {
    "url": "assets/img/smallApp03.62fa484f.png",
    "revision": "62fa484f43607dd071a7fa66c6faa6dc"
  },
  {
    "url": "assets/img/smallApp04.6a90d53d.png",
    "revision": "6a90d53dbf202eaa58c83981f4c6f62c"
  },
  {
    "url": "assets/img/smallApp06.f710e603.png",
    "revision": "f710e60330e7c7b2fa7f93d15f283ec6"
  },
  {
    "url": "assets/img/v2-a98ec85570158e7eb8601534984bb22c_1440w.a98ec855.jpg",
    "revision": "a98ec85570158e7eb8601534984bb22c"
  },
  {
    "url": "assets/img/weakmap001.d624b5d3.png",
    "revision": "d624b5d3d93157540fa6a5dffedaac06"
  },
  {
    "url": "assets/img/webpack001.10ed0878.png",
    "revision": "10ed0878284bededa6548e1d6a18af7e"
  },
  {
    "url": "assets/img/WX20200914-234458@2x.eda50cf6.png",
    "revision": "eda50cf66152f212786f4bcc8e797aa0"
  },
  {
    "url": "assets/img/WX20200914-234528@2x.743205df.png",
    "revision": "743205dfc5173e1e421e7e9463b442ba"
  },
  {
    "url": "assets/img/WX20201103-193946@2x.edd716bf.png",
    "revision": "edd716bfa24faefcc9128498b81df267"
  },
  {
    "url": "assets/img/WX20201118-201742@2x.cc047fa1.png",
    "revision": "cc047fa195b49ee745018bf52402e8a5"
  },
  {
    "url": "assets/img/youhua1.2bb91715.png",
    "revision": "2bb91715a3de420702f6b1fda72c4592"
  },
  {
    "url": "assets/img/youhua10.887b3d82.png",
    "revision": "887b3d82b53e2c58fc5700c7edc009c6"
  },
  {
    "url": "assets/img/youhua11.6cc67976.png",
    "revision": "6cc6797641a49588afe7c5d51bdd4ed7"
  },
  {
    "url": "assets/img/youhua12.772b40b0.png",
    "revision": "772b40b0bc7d38f469fd52cb6aa8f985"
  },
  {
    "url": "assets/img/youhua13.2527af1c.png",
    "revision": "2527af1c750b52235f1afeb409800f8e"
  },
  {
    "url": "assets/img/youhua14.64a1d25b.png",
    "revision": "64a1d25bb7abb1769cc09f63aa69289c"
  },
  {
    "url": "assets/img/youhua15.ef37484e.png",
    "revision": "ef37484ec4d1ef3c7f045b0356b20dbb"
  },
  {
    "url": "assets/img/youhua16.aed50536.png",
    "revision": "aed505360556b72950435adb64fb6458"
  },
  {
    "url": "assets/img/youhua17.33ddd9fb.png",
    "revision": "33ddd9fb16f90ecb5fdf7fe20dda4ee6"
  },
  {
    "url": "assets/img/youhua18.7408e8af.png",
    "revision": "7408e8af19cd4259eec21846a06a24d2"
  },
  {
    "url": "assets/img/youhua19.9953b090.png",
    "revision": "9953b0904957c418cc64f86eb046647e"
  },
  {
    "url": "assets/img/youhua2.1351dd74.png",
    "revision": "1351dd74e57de2b33c3b0e99f882a6bc"
  },
  {
    "url": "assets/img/youhua20.6429c2e8.png",
    "revision": "6429c2e8374c8e0720520d3defaf3a04"
  },
  {
    "url": "assets/img/youhua21.2da9764d.png",
    "revision": "2da9764d787376582b82ab8fcad03894"
  },
  {
    "url": "assets/img/youhua22.a30a638b.png",
    "revision": "a30a638b566021f316eca193d859e2c9"
  },
  {
    "url": "assets/img/youhua23.803b20b8.png",
    "revision": "803b20b89d6a5a20ba1ded36410c8f06"
  },
  {
    "url": "assets/img/youhua24.d7d505db.png",
    "revision": "d7d505dba7c6dafb5c1c67e0b1d9a1f1"
  },
  {
    "url": "assets/img/youhua25.c41c3a30.png",
    "revision": "c41c3a30415997f7c852062139619b6e"
  },
  {
    "url": "assets/img/youhua26.6d955fd0.png",
    "revision": "6d955fd099ae8b62f4b094f79ce699da"
  },
  {
    "url": "assets/img/youhua27.5750a112.png",
    "revision": "5750a11292bd5bbdb70411784c24f715"
  },
  {
    "url": "assets/img/youhua29.3ace6788.png",
    "revision": "3ace6788efbf8f51ebda93ddc4c9c723"
  },
  {
    "url": "assets/img/youhua3.e09bef69.png",
    "revision": "e09bef6989be0c83f91d0cb231860f84"
  },
  {
    "url": "assets/img/youhua30.fdc92183.png",
    "revision": "fdc921835bf7ebd9fbe2f4a027491a52"
  },
  {
    "url": "assets/img/youhua31.06985559.png",
    "revision": "069855597cd4eb1fe380ea8cc5d94188"
  },
  {
    "url": "assets/img/youhua32.1d5f71f9.png",
    "revision": "1d5f71f9d6d815ea940cd230df6b84ed"
  },
  {
    "url": "assets/img/youhua33.4f227d08.png",
    "revision": "4f227d08e6db1ba9ca417514d3fe8377"
  },
  {
    "url": "assets/img/youhua34.4a1c5f8f.png",
    "revision": "4a1c5f8f69cb9de4ff44421b0351fd74"
  },
  {
    "url": "assets/img/youhua35.264a9690.png",
    "revision": "264a969072b81ffe0f0910db5f288c1f"
  },
  {
    "url": "assets/img/youhua36.713d2a54.png",
    "revision": "713d2a548dc580b4242655f10dc1448d"
  },
  {
    "url": "assets/img/youhua37.ad4034ba.png",
    "revision": "ad4034baecf3e3a1f03ae96845d9040a"
  },
  {
    "url": "assets/img/youhua38.b45393e8.png",
    "revision": "b45393e80ea8c2baba36c7f622394073"
  },
  {
    "url": "assets/img/youhua39.9e31419f.png",
    "revision": "9e31419fe6ec5bd2244f99e5dedb41f7"
  },
  {
    "url": "assets/img/youhua4.3e74a037.png",
    "revision": "3e74a037c901b9e4d3d8ad13c0560504"
  },
  {
    "url": "assets/img/youhua40.425bfa83.png",
    "revision": "425bfa833a12b85aa70ab489f365d658"
  },
  {
    "url": "assets/img/youhua41.1565189e.png",
    "revision": "1565189e80cbd5a01888e7e42a3a8c32"
  },
  {
    "url": "assets/img/youhua42.48032a3d.png",
    "revision": "48032a3d398332ba98e211f4343650cf"
  },
  {
    "url": "assets/img/youhua43.7109f3a4.png",
    "revision": "7109f3a41da6871c88d85a763aab4e48"
  },
  {
    "url": "assets/img/youhua44.43b49fe1.png",
    "revision": "43b49fe14ae5d8dd534121aa53b7f8ea"
  },
  {
    "url": "assets/img/youhua45.a800cee2.png",
    "revision": "a800cee2d98a734109fc64451dcb5ab9"
  },
  {
    "url": "assets/img/youhua46.38e32de8.png",
    "revision": "38e32de880761765b55c46817b16e197"
  },
  {
    "url": "assets/img/youhua47.a6ad579d.png",
    "revision": "a6ad579d9f0e3851e804faf06cb9a76b"
  },
  {
    "url": "assets/img/youhua48.e26bb766.png",
    "revision": "e26bb766db500b3873941265dc2999bb"
  },
  {
    "url": "assets/img/youhua49.907fb6ae.png",
    "revision": "907fb6ae10e8fe5c68ca22adf0f50e2d"
  },
  {
    "url": "assets/img/youhua5.69a90a66.png",
    "revision": "69a90a6640d60dee11db95c02de23279"
  },
  {
    "url": "assets/img/youhua50.1312a52d.png",
    "revision": "1312a52de84e351d45611bacc1f5fa0a"
  },
  {
    "url": "assets/img/youhua51.f6930e4d.png",
    "revision": "f6930e4de478c66da14abb218b9bd49d"
  },
  {
    "url": "assets/img/youhua52.be433d5d.png",
    "revision": "be433d5dd9f0f40afce35e0a2a66f907"
  },
  {
    "url": "assets/img/youhua53.1b4f0aa1.png",
    "revision": "1b4f0aa19c1827ee0204b89b3c8bbe5a"
  },
  {
    "url": "assets/img/youhua54.6e837cf2.png",
    "revision": "6e837cf2871b3221b04ad3ad6374e1d6"
  },
  {
    "url": "assets/img/youhua55.c5c69a45.png",
    "revision": "c5c69a4589152c8659b935d71556370f"
  },
  {
    "url": "assets/img/youhua56.00c3a7a9.png",
    "revision": "00c3a7a944725c2c87d65617094abc9b"
  },
  {
    "url": "assets/img/youhua57.2909ecc5.png",
    "revision": "2909ecc5f89a491822e0b02bc39fd805"
  },
  {
    "url": "assets/img/youhua58.906ea90b.png",
    "revision": "906ea90b45883d2a90e6970ba4508fae"
  },
  {
    "url": "assets/img/youhua59.947f8595.png",
    "revision": "947f859580c0d733056788ce93e69947"
  },
  {
    "url": "assets/img/youhua6.e5854d29.png",
    "revision": "e5854d296c727ed708bdeed53ed8f880"
  },
  {
    "url": "assets/img/youhua60.5c02c5c9.png",
    "revision": "5c02c5c96c35f9dc5e6a2fd82f0c5d48"
  },
  {
    "url": "assets/img/youhua61.22eaf0d3.png",
    "revision": "22eaf0d382db0c026a4b3c485fb7a2d2"
  },
  {
    "url": "assets/img/youhua62.35fc43e5.png",
    "revision": "35fc43e54d7ae90680217fbbabc4bd9d"
  },
  {
    "url": "assets/img/youhua63.b9ac0906.png",
    "revision": "b9ac0906652f4d5ce5adb78ee9f86035"
  },
  {
    "url": "assets/img/youhua64.6d081d89.png",
    "revision": "6d081d89ff0dddea90cc37f32526fec7"
  },
  {
    "url": "assets/img/youhua65.383f06e5.png",
    "revision": "383f06e5ed4160810179c6e8536ccc05"
  },
  {
    "url": "assets/img/youhua7.5319fe58.png",
    "revision": "5319fe58a4d55cf3731736cd15246908"
  },
  {
    "url": "assets/img/youhua8.f3bbdb3c.png",
    "revision": "f3bbdb3cf906b90d4d9b2e55158f0cd5"
  },
  {
    "url": "assets/img/youhua9.62d71c90.png",
    "revision": "62d71c9083bb025cd7a326821b4b840b"
  },
  {
    "url": "assets/js/10.93260224.js",
    "revision": "e0088733442c08d3971da18104247b2b"
  },
  {
    "url": "assets/js/100.f6b8ec7d.js",
    "revision": "3a417bec50074317ad998f74c47272ae"
  },
  {
    "url": "assets/js/101.967b6c5a.js",
    "revision": "443f42741a21d9d89af7c63bf5fab085"
  },
  {
    "url": "assets/js/102.21711343.js",
    "revision": "072a6997756bbf9b1e7e50faf854d87a"
  },
  {
    "url": "assets/js/103.d49ec33e.js",
    "revision": "5d78739e37a9a2a1e6c7fa3817d7ff07"
  },
  {
    "url": "assets/js/104.977a3b03.js",
    "revision": "6c8a21cfe741c431ddf45b6eba8ba409"
  },
  {
    "url": "assets/js/105.b99482a1.js",
    "revision": "f99657af68b1e835c1135ecacc813448"
  },
  {
    "url": "assets/js/106.e4a47e6c.js",
    "revision": "0872c63ed8cac0f7b1787b134603a8a4"
  },
  {
    "url": "assets/js/107.0fbdc788.js",
    "revision": "8dec0697e694230c16e3679d6f870b4c"
  },
  {
    "url": "assets/js/108.3c5b4338.js",
    "revision": "fbdbe860a6427369878cd87ba76728c6"
  },
  {
    "url": "assets/js/109.3684a685.js",
    "revision": "74943143ba658f41106571ba5e3898ba"
  },
  {
    "url": "assets/js/11.49b33569.js",
    "revision": "9711cd37c30d5f2a139eec246422b13f"
  },
  {
    "url": "assets/js/110.baed003e.js",
    "revision": "8290751177b8fb8b46dbecf3b7901183"
  },
  {
    "url": "assets/js/111.83769994.js",
    "revision": "f0175b0b02a9140fdcb9a2e5c6bc3c8d"
  },
  {
    "url": "assets/js/112.946c5f99.js",
    "revision": "7a4362f77398084b13e6bcc7ccb448f7"
  },
  {
    "url": "assets/js/12.a36537bf.js",
    "revision": "739fbf75f3eabd6c4c9982607b78a2a2"
  },
  {
    "url": "assets/js/13.35cba3fc.js",
    "revision": "6dd3808fe5872d12ae0056678e665b5d"
  },
  {
    "url": "assets/js/14.0e48b2e5.js",
    "revision": "b8da3c9b0314d9eb7a3240e68f926b7e"
  },
  {
    "url": "assets/js/15.e55cd707.js",
    "revision": "58571aedfffcf8bb15339b5eb932ef98"
  },
  {
    "url": "assets/js/16.f872fbeb.js",
    "revision": "26a2cf9478e9f09f130e3ce33ba9a536"
  },
  {
    "url": "assets/js/17.f7a4d99b.js",
    "revision": "0a3cdbdb87d9a0b5e4a67ab274f51a7e"
  },
  {
    "url": "assets/js/18.ba229207.js",
    "revision": "65c3d4136d448997988472a22ec77495"
  },
  {
    "url": "assets/js/19.92de1ede.js",
    "revision": "53b87c3097b9df8d7d53dadc3906fadf"
  },
  {
    "url": "assets/js/2.f728fa66.js",
    "revision": "8b40e4fd606f66343d5b93244eb9a5bd"
  },
  {
    "url": "assets/js/20.3188b6de.js",
    "revision": "cd5f1a13786018260b43a46c20e0957e"
  },
  {
    "url": "assets/js/21.720e9417.js",
    "revision": "043e4182eb749377a9950945dfda9758"
  },
  {
    "url": "assets/js/22.fa36b946.js",
    "revision": "a685fac33c07e1aa69bed92f7934d288"
  },
  {
    "url": "assets/js/23.ef58e05b.js",
    "revision": "8fa6d2679e57a8a8dcdd385b51bd292d"
  },
  {
    "url": "assets/js/24.881d6b82.js",
    "revision": "a8053607fd299ed2d34f84dea46818cf"
  },
  {
    "url": "assets/js/25.8af9bcbe.js",
    "revision": "0aacd8e85d81e77d6046144b823bf16e"
  },
  {
    "url": "assets/js/26.43432835.js",
    "revision": "32855b9dfe5a300917f18a6e3a1aed52"
  },
  {
    "url": "assets/js/27.0f7b8718.js",
    "revision": "23270c240bf632946953724dd68a1ee1"
  },
  {
    "url": "assets/js/28.a0c57751.js",
    "revision": "c56c81e06d4d5fc2af79e953e03a6953"
  },
  {
    "url": "assets/js/29.c1658d5b.js",
    "revision": "3deb57c7acf3628645a02692d2ea2048"
  },
  {
    "url": "assets/js/3.1568aedc.js",
    "revision": "247b164b1840216f6baaea85f4a42b5e"
  },
  {
    "url": "assets/js/30.c4fc88ff.js",
    "revision": "7b5c4ce948daee4bae0f5490f60f4e7c"
  },
  {
    "url": "assets/js/31.1fc1fc07.js",
    "revision": "972a4c3b69af013d084bc5233f76ef2c"
  },
  {
    "url": "assets/js/32.d63a6056.js",
    "revision": "bbdcce80de68fedb5902e550d30499b2"
  },
  {
    "url": "assets/js/33.8b8854ed.js",
    "revision": "512e98c4a0d5956d688583b3fa4eb24f"
  },
  {
    "url": "assets/js/34.7f7a6517.js",
    "revision": "c2b0a49e57832ec21f7bb6542f554151"
  },
  {
    "url": "assets/js/35.1628cb9c.js",
    "revision": "055c6bcf5047bc9dba7c771576a1430c"
  },
  {
    "url": "assets/js/36.3703f0c9.js",
    "revision": "da4fbcc81a630f172afb7c04c5452de3"
  },
  {
    "url": "assets/js/37.9a8be999.js",
    "revision": "37ab24c44a71ed19f634e3b9392dccf5"
  },
  {
    "url": "assets/js/38.1bad6e08.js",
    "revision": "338b87cb5ba0869740b5ed7b4befadb8"
  },
  {
    "url": "assets/js/39.887115b5.js",
    "revision": "a9990cd5fe32634f2a915c739047a022"
  },
  {
    "url": "assets/js/4.529cb57e.js",
    "revision": "f5bdc567522648cee8f9738daa76440b"
  },
  {
    "url": "assets/js/40.cb099c93.js",
    "revision": "4eeee3795315ab1576deb0f7a69bc806"
  },
  {
    "url": "assets/js/41.b39ca612.js",
    "revision": "21718cf892d57aa6f488990077485690"
  },
  {
    "url": "assets/js/42.6a0ec8ac.js",
    "revision": "e9be7c3472d98812446ae3b930b07a16"
  },
  {
    "url": "assets/js/43.de1b9001.js",
    "revision": "505f2b2f8108aa82cc0b4b612ad5aa5b"
  },
  {
    "url": "assets/js/44.133a895c.js",
    "revision": "a6dd77e03d06d0a54e681d29cd03af3b"
  },
  {
    "url": "assets/js/45.1961312a.js",
    "revision": "2ab4a2ed22d7a5f580719d0aaee822a2"
  },
  {
    "url": "assets/js/46.971341f1.js",
    "revision": "598a67a074e71163d232570521ea3dcd"
  },
  {
    "url": "assets/js/47.7bc2173e.js",
    "revision": "7cfb97aa4b748671dc5db5d002fd7595"
  },
  {
    "url": "assets/js/48.5d895a7e.js",
    "revision": "d6d16eb08e58c38b87ef884674eff025"
  },
  {
    "url": "assets/js/49.638058f6.js",
    "revision": "480b2faeccdfe661a97f9f2ef10a6588"
  },
  {
    "url": "assets/js/5.387bf8e2.js",
    "revision": "4887e71ada64fe0b46129e0509be56de"
  },
  {
    "url": "assets/js/50.e742ad4c.js",
    "revision": "27ff7830be44eaefb1aa6503062d8838"
  },
  {
    "url": "assets/js/51.5d94ed5f.js",
    "revision": "c718cd5042059132d9244e22931c9242"
  },
  {
    "url": "assets/js/52.55a51aaa.js",
    "revision": "4e7f989707f71724dc101ef9fd8d96b3"
  },
  {
    "url": "assets/js/53.1ba60b2b.js",
    "revision": "9b27ba9cb033f48a0dfe0a3a4668939e"
  },
  {
    "url": "assets/js/54.73a995e7.js",
    "revision": "726d4bb90783b61094a3329732c56c44"
  },
  {
    "url": "assets/js/55.4e018c53.js",
    "revision": "e860746c3bb9333f0b5415f5be1ce7c8"
  },
  {
    "url": "assets/js/56.6cb78c59.js",
    "revision": "656c5696a037f689266535719f5ad9d0"
  },
  {
    "url": "assets/js/57.563d5c97.js",
    "revision": "a262cc1111cbfebcfea2f1c1c64bb2f1"
  },
  {
    "url": "assets/js/58.f8954d6d.js",
    "revision": "e828389ce15063135c2d2260467773db"
  },
  {
    "url": "assets/js/59.3d2a7fdb.js",
    "revision": "1832588f6c66f3d6f1baec238007a6ce"
  },
  {
    "url": "assets/js/6.a279f8e6.js",
    "revision": "f264daf58c8598d928c4e9a6ef220569"
  },
  {
    "url": "assets/js/60.5a3e1e46.js",
    "revision": "fd6aae7f6f7935d1032f77dc4d7da256"
  },
  {
    "url": "assets/js/61.7e804132.js",
    "revision": "f78f43af5fa36d65b6fed05ab7602a42"
  },
  {
    "url": "assets/js/62.e5287e80.js",
    "revision": "0652033a3a3c8d73e3666807d8f78924"
  },
  {
    "url": "assets/js/63.be538378.js",
    "revision": "70c9772ebc60bffb05caca9f05bed42f"
  },
  {
    "url": "assets/js/64.317aebd1.js",
    "revision": "19b6c42e513df9a7582a50d2d4ce48a3"
  },
  {
    "url": "assets/js/65.7643d336.js",
    "revision": "e19ec64be591c27d74baaa9c6294e153"
  },
  {
    "url": "assets/js/66.9b0f8d09.js",
    "revision": "db222b3ca4f0dca5e8eaf6ab318fe6fc"
  },
  {
    "url": "assets/js/67.756bb42b.js",
    "revision": "59480f68ce6786570ef6d7ef9c5772c3"
  },
  {
    "url": "assets/js/68.c56721fc.js",
    "revision": "18a61b9bc235c78c5afe11be0c2e68df"
  },
  {
    "url": "assets/js/69.5f86f31b.js",
    "revision": "1a0f58214aa4b59e03dd6ccfee73f399"
  },
  {
    "url": "assets/js/7.0f2b711c.js",
    "revision": "2ee5a7b423f6a9dfbd95000ff2853424"
  },
  {
    "url": "assets/js/70.417864a8.js",
    "revision": "04c35f95bf80c79a85372b39feb57f3d"
  },
  {
    "url": "assets/js/71.4aee4693.js",
    "revision": "88e5ee2c6bf41aaa70ec68995c30708f"
  },
  {
    "url": "assets/js/72.c013fc2a.js",
    "revision": "3f4c60a8a30f7f52e145dea1dfd22cac"
  },
  {
    "url": "assets/js/73.50ca59ad.js",
    "revision": "a12d0b06abe708db4e6a1a20f2654405"
  },
  {
    "url": "assets/js/74.b627791d.js",
    "revision": "a279ad1f3245af900f5f3630f1f1f867"
  },
  {
    "url": "assets/js/75.f5879061.js",
    "revision": "5413c3ff4505f339b8f401e81cedf0a1"
  },
  {
    "url": "assets/js/76.e7be1127.js",
    "revision": "d2b2fd01275f24ae90776bc24eb07045"
  },
  {
    "url": "assets/js/77.aafb8bbb.js",
    "revision": "3bf17cf0af59e71fd55c910cd7ccd4cf"
  },
  {
    "url": "assets/js/78.0f2b7ba1.js",
    "revision": "74acaafaea01f31408ab29606b517d0e"
  },
  {
    "url": "assets/js/79.ee2c7dff.js",
    "revision": "e13dee33ff5f4ed5981d10d21539cef1"
  },
  {
    "url": "assets/js/8.fbc348ff.js",
    "revision": "4357b785ec9b5587b3ff69ae1e0a96c7"
  },
  {
    "url": "assets/js/80.d0d7ac73.js",
    "revision": "9e0479cf2a76e7c46402f99a597fbdb6"
  },
  {
    "url": "assets/js/81.e10b54fc.js",
    "revision": "36414ceab2480c322b42db0469b57691"
  },
  {
    "url": "assets/js/82.03db26fd.js",
    "revision": "28341a81d55c48664aef93d8ebb139e9"
  },
  {
    "url": "assets/js/83.89bcaab3.js",
    "revision": "a38844dc666ae7690025030cdf218fc5"
  },
  {
    "url": "assets/js/84.e3c968c0.js",
    "revision": "b847253b8c0718d9517390b6ff7a189a"
  },
  {
    "url": "assets/js/85.8d36c455.js",
    "revision": "faf2ea1c25b7087cf3e33291ce804937"
  },
  {
    "url": "assets/js/86.2d239c5d.js",
    "revision": "1962073d4cbaa5cbdc8657e7983d4d40"
  },
  {
    "url": "assets/js/87.0bc771d9.js",
    "revision": "13486d9f2fa075b89f44605f5bbf0f46"
  },
  {
    "url": "assets/js/88.f8a1db97.js",
    "revision": "9556e5f44ff1f05c2d05f8a0ee282c10"
  },
  {
    "url": "assets/js/89.1671c085.js",
    "revision": "01d266a40871deff543a5487fb5abfe7"
  },
  {
    "url": "assets/js/9.600c48e6.js",
    "revision": "c29973b6e14d68cdfabc4d5299edc9c2"
  },
  {
    "url": "assets/js/90.6a7cb76f.js",
    "revision": "3c41ef9971930d11e17c69f191b945f7"
  },
  {
    "url": "assets/js/91.96dda1bd.js",
    "revision": "8ab8f8e650d9a19bcbe2d5d6b67f15d8"
  },
  {
    "url": "assets/js/92.defa3643.js",
    "revision": "5234a87207b0d5ae7b9b2e03e733bd55"
  },
  {
    "url": "assets/js/93.1a469c8a.js",
    "revision": "af7f358b703041774abc154b895e7333"
  },
  {
    "url": "assets/js/94.d9b30b49.js",
    "revision": "36c15445b521970727ed4d78595d6a47"
  },
  {
    "url": "assets/js/95.3b10c597.js",
    "revision": "e7cf909e8aa455ecf97f480172635d4a"
  },
  {
    "url": "assets/js/96.ee7c131a.js",
    "revision": "201b3c4593be0e031fc64b91db81f17c"
  },
  {
    "url": "assets/js/97.dbf5d04e.js",
    "revision": "6e749f98df98cf77ca16bc827b4de15c"
  },
  {
    "url": "assets/js/98.60f0f169.js",
    "revision": "409fd67b56eedc05973b694ea8bf42f5"
  },
  {
    "url": "assets/js/99.58cbe020.js",
    "revision": "ce35672ad4e439a0ec47694107c16017"
  },
  {
    "url": "assets/js/app.6365c275.js",
    "revision": "64fe839b72e681205e42c239208839ef"
  },
  {
    "url": "header.png",
    "revision": "8eccd8d17445c421007cf96e6241fd8e"
  },
  {
    "url": "index.html",
    "revision": "f9601de62284f852c34083bc5947a51a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
