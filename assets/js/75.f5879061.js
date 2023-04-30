(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{382:function(t,a,s){"use strict";s.r(a);var C=s(5),_=Object(C.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tcp协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp协议"}},[t._v("#")]),t._v(" TCP协议")]),t._v(" "),a("p",[t._v("TCP（Transmission Control Protocol）是一种面向连接、可靠的传输协议，用于在互联网上传输数据。下面是TCP协议的详细解释：")]),t._v(" "),a("h2",{attrs:{id:"面向连接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向连接"}},[t._v("#")]),t._v(" 面向连接")]),t._v(" "),a("p",[t._v("TCP是一种面向连接的协议，这意味着在通信之前，发送方和接收方必须建立一个连接。连接建立后，发送方和接收方之间可以通过这个连接传输数据。连接的建立过程需要进行“三次握手”，即发送方发送一个SYN（同步）报文，接收方回应一个SYN-ACK（同步-确认）报文，最后发送方回应一个ACK（确认）报文，连接建立成功。")]),t._v(" "),a("h2",{attrs:{id:"可靠的传输"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#可靠的传输"}},[t._v("#")]),t._v(" 可靠的传输")]),t._v(" "),a("p",[t._v("TCP是一种可靠的传输协议，这意味着它可以保证传输的数据不会丢失或损坏。为了实现可靠的传输，TCP使用了多种技术，例如序列号、确认号、重传机制和流量控制等。当发送方发送数据时，它会给每个数据包分配一个序列号。接收方在接收到数据包后，会给发送方回应一个确认号，告诉发送方数据已经成功接收。如果发送方在一定时间内没有收到确认，它会重新发送数据，直到接收方成功接收为止。")]),t._v(" "),a("h2",{attrs:{id:"面向字节流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#面向字节流"}},[t._v("#")]),t._v(" 面向字节流")]),t._v(" "),a("p",[t._v("TCP是一种面向字节流的协议，这意味着TCP将数据看作一个连续的字节流，而不是分散的数据包。发送方将数据分割成多个TCP数据包进行传输，而接收方则将这些数据包组合起来，还原成原始的数据流。")]),t._v(" "),a("h2",{attrs:{id:"流量控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#流量控制"}},[t._v("#")]),t._v(" 流量控制")]),t._v(" "),a("p",[t._v("TCP使用流量控制来控制数据的传输速率。发送方会根据接收方的反馈信息来控制发送数据的速率，以避免数据包拥塞和丢失。流量控制的基本原理是接收方通过发送窗口大小告诉发送方它当前可以接收的数据量。发送方则根据接收方的窗口大小来控制发送数据的速率。")]),t._v(" "),a("h2",{attrs:{id:"拥塞控制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[t._v("#")]),t._v(" 拥塞控制")]),t._v(" "),a("p",[t._v("TCP使用拥塞控制来避免网络拥塞。拥塞控制的基本原理是根据网络拥塞程度来调整发送数据的速率，以避免网络拥塞和数据包丢失。TCP通过检测丢失的数据包和延迟来判断网络是否拥塞，并根据这些信息调整发送速率。")]),t._v(" "),a("p",[t._v("总之，TCP是一种面向连接、可靠的传输协议，它使用多种技术来保证数据的可靠传输和网络的可靠运行。TCP在互联网中的应用非常广泛，包括浏览器、电子邮件、文件传输等。由于TCP可以保证数据的可靠传输，因此它在传输关键数据和大量数据的应用中非常有用。同时，TCP也具有一些缺点，例如连接建立的开销、流量控制和拥塞控制的开销等。因此，在一些要求实时传输和低延迟的应用中，UDP（User Datagram Protocol）可能更为适合。\n除了TCP，还有一些其他的传输层协议，例如UDP和SCTP（Stream Control Transmission Protocol）。UDP是一种无连接、不可靠的传输协议，它没有TCP那么多的控制机制，因此可以实现更低的延迟和更高的吞吐量。SCTP则是一种多流传输协议，它可以将多个数据流捆绑在一个连接上进行传输，以提高传输效率和可靠性。不同的应用需要根据自身的特点选择适合的传输层协议。")]),t._v(" "),a("h2",{attrs:{id:"tcp服务模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp服务模型"}},[t._v("#")]),t._v(" TCP服务模型")]),t._v(" "),a("ol",[a("li",[t._v("TCP的组成：一个TCP连接由一个4元组构成，分别是两个IP地址和两个端口号（客户端的ip和端口以及服务端的ip和端口）。一个TCP连接通常分为三个阶段：启动、数据传输、退出（关闭）。")]),t._v(" "),a("li",[t._v("当TCP接收到另一端的数据时，它会发送一个确认，但这个确认不会立即发送，一般会延迟一会儿。ACK是累积的，一个确认字节号N的ACK表示所有直到N的字节（不包括N）已经成功被接收了。这样的好处是如果一个ACK丢失，很可能后续的ACK就不足以确认前面的报文段了。")]),t._v(" "),a("li",[t._v("一个完整的TCP连接是双向和对称的，数据可以在两个方向上平等地流动。给上层应用程序提供一种双工服务。一旦建立了一个连接，这个连接的一个方向上的每个TCP报文段都包含了相反方向上的报文段的一个ACK。")]),t._v(" "),a("li",[t._v("序列号的作用是使得一个TCP接收端可丢弃重复的报文段，记录以杂乱次序到达的报文段。因为TCP使用IP来传输报文段，而IP不提供重复消除或者保证次序正确的功能。另一方面，TCP是一个字节流协议，绝不会以杂乱的次序给上层程序发送数据。因此TCP接收端会被迫先保持大序列号的数据不交给应用程序，直到缺失的小序列号的报文段被填满。")])]),t._v(" "),a("h2",{attrs:{id:"tcp三次握手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp三次握手"}},[t._v("#")]),t._v(" TCP三次握手")]),t._v(" "),a("ol",[a("li",[t._v("第一次握手：建立连接时。客户端发送syn包到服务器，并进入SYN_SENT状态，也就是发送状态，等待服务器确认；SYN：同步序列编号")]),t._v(" "),a("li",[t._v("第二次握手：服务器收到syn包并确认客户到SYN（ack=j+1），同时发送一个自己到SYN包（syn=k），即SYN+ACK包此时服务器进入SYN_RECV状态，也就是接收状态")]),t._v(" "),a("li",[t._v("第三次握手：客户端收到服务端的SYN+ACK包，想服务器发送确认包ACK（ack=k+1），此包发送完毕，客户端和服务器进ESTABLISHED（TCP连接成功）的状态，完成三次握手")])]),t._v(" "),a("h2",{attrs:{id:"tcp四次挥手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tcp四次挥手"}},[t._v("#")]),t._v(" TCP四次挥手")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("第一次挥手，客户端向服务端发送 TCP 请求，将 TCP 头部中的。\nFIN 设置为 1。\nseq 设置为一个随机数 x。\nFIN 是一个标志位，表示结束（finish）的意思，1 等同于 true。\nseq 是个序列号，一个装数据的地方，我们这里给他设置为一个随机数，用于给服务端做确认，好对应上这个 TCP 请求。")])]),t._v(" "),a("li",[a("p",[t._v("第二次挥手，服务端发送 TCP，并将 TCP 头部中的。\nACK 设置为 1（acknowledge，表示 “收到” 的意思）。\nack 确认号设置为 x+1（x 来自第一次挥手）。\n当客户端收到这个 TCP 请求时，表示从客户端到服务端的通道已经关闭，你不能再向服务端发正常的数据请求了。\n此时服务端到客户端还是可以发送数据的。如果服务端有一些之前的 TCP 请求没来得及响应，在第二次挥手和第三次挥手期间还是可以去返回的。")])]),t._v(" "),a("li",[a("p",[t._v("第三次挥手，服务端向客户端发送 TCP 请求：\nFIN 设置为 1。\nseq 设置为一个随机数 y。\n类似第一次挥手，只是这次发送方为服务端。")])]),t._v(" "),a("li",[a("p",[t._v("第四次挥手，客户端向服务端发送 TCP 请求：\nACK 设置为 1。\nack 确认号设置为 y+1。")])])]),t._v(" "),a("p",[t._v("服务端接收到这个请求后，服务端就能成功变成关闭（CLOSE）状态。客户端则会等一段时间再进入关闭状态，因为第四次挥手不一定能成功发给服务端，所以要等一下，看看服务端会不会因为没收到第四次挥手，而重发第三次挥手。和 TCP 三次握手不同。TCP 关闭连接的挥手足足有四次。这是因为第二次挥手和第三次挥手之间可能有一些服务端需要发送的处理比较慢的数据要返回，所以没有将这两次挥手合并。")])])}),[],!1,null,null,null);a.default=_.exports}}]);