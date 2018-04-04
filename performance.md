再谈性能优化

	优化的点: 白屏时间、首屏时间、整页时间、DNS时间、CPU占用率

	网络性能优化措施归结为三大方面：减少请求数、减小请求资源体积、提升网络传输速率


1.网络传输性能优化

￼

浏览器在得到用户请求之后，经历了下面这些阶段：
	重定向→拉取缓存→DNS查询→建立TCP链接→发起请求→接收响应→处理HTML元素→元素加载完成

1.1.浏览器缓存
	浏览器在向服务器发起请求前，会先查询本地是否有相同的文件，如果有，就会直接拉取本地缓存，这和我们在后台部属的Redis、Memcache类似，都是起到了中间缓冲的作用，我们先看看浏览器处理缓存的策略：
￼

	浏览器默认的缓存是放在内存内的，但我们知道，内存里的缓存会因为进程的结束或者说浏览器的关闭而被清除，而存在硬盘里的缓存才能够被长期保留下去。很多时候，我们在network面板中各请求的size项里，会看到两种不同的状态：from memory cache 和 from disk cache，前者指缓存来自内存，后者指缓存来自硬盘。而控制缓存存放位置的，不是别人，就是我们在服务器上设置的Etag字段。在浏览器接收到服务器响应后，会检测响应头部（Header），如果有Etag字段，那么浏览器就会将本次缓存写入硬盘中。之所以拉取缓存会出现200、304两种不同的状态码，取决于浏览器是否有向服务器发起验证请求。 只有向服务器发起验证请求并确认缓存未被更新，才会返回304状态码。
	那么如何配置缓存 呢
￼



1.2.资源打包压缩
	我们之前所作的浏览器缓存工作，只有在用户第二次访问我们的页面才能起到效果，如果要在用户首次打开页面就实现优良的性能，必须对资源进行优化。我们常将网络性能优化措施归结为三大方面：减少请求数、减小请求资源体积、提升网络传输速率。现在，让我们逐个击破：

	a.webpack进行上线配置:
		①JS压缩：（new webpack.optimize.UglifyJsPlugin()）
		②HTML压缩：new HtmlWebpackPlugin({})  自动化注入JS、CSS打包HTML文件时
		③提取公共资源：new webpack.optimize.CommonsChunkPlugin({})
		④提取css并压缩：const ExtractTextPlugin = require('extract-text-webpack-plugin')
		
	b.nginx开启gzip的压缩打包
		http模块中  在nginx.conf中修改  一般啊 是默认开始压缩的



1.3.图片资源优化

	1.3.1.不要在HTML里缩放图像
		一张200KB的图片和2M的图片的传输时间会是200ms和12s的差距
		所以，当你需要用多大的图片时，就在服务器上准备好多大的图片，尽量固定图片尺寸。
	1.3.2.使用雪碧图（CSS Sprite）:减小请求数的示范性代表	
		多张图片拼在一块后，总体积会比之前所有图片的体积之和小	
		自动化生成雪碧图的工具：https://www.toptal.com/developers/css/sprite-generator

	1.3.3.使用字体图标（iconfont）
		它只是往HTML里插入字符和CSS样式而已，和图片请求比起来，在网络传输资源的占用上它们完全不在一个数量级，
		如果你的项目里有大量的小图标，就用矢量图吧。

	1.3.4.使用WebP
		WebP格式，是谷歌公司开发的一种旨在加快图片加载速度的图片格式。
		图片压缩体积大约只有JPEG的2/3，并能节省大量的服务器带宽资源和数据空间。
		Facebook、Ebay等知名网站已经开始测试并使用WebP格式。
		也可以使用我们的线上服务，这里我推荐叉拍云（网址：https://www.upyun.com/webp ）

	1.4.网络传输性能检测工具——Page Speed
		在chrome devtools里找到它了：chrome菜单→更多工具→拓展程序→chrome网上应用商店→搜索pagespeed后安转即可。

	1.5.使用CDN  (Last but not least， 最后但并非最不重要,使用各大企业提供的服务，诸如腾讯云等)

		1.为什么可以加速:如果我们在Linux下使用命令$ traceroute targetIp 或者在Windows下使用批处理 > tracert targetIp，都可以定位用户与目标计算机之间经过的所有路由器，不言而喻，用户和服务器之间距离越远，经过的路由器越多，延迟也就越高。使用CDN的目的之一便是解决这一问题
		1.便于CDN业务独立，能够独立配置缓存。
		2.抛开无用cookie，减小带宽占用。CDN域名与主站域名不同，DNS解析CDN域名还需要花费额外的时间，增加网络延迟。不过这难不住我们伟大的程序员前辈，DNS Prefetch闪亮登场。
		3. DNS Prefetch。DNS Prefetch是一种DNS预解析技术，当我们浏览网页时，浏览器会在加载网页时对网页中的域名进行预解析并缓存



2.页面渲染性能优化

	2.1.浏览器渲染过程（Webkit）
￼
￼

	什么情况下会触发渲染层呢,Video元素、WebGL、Canvas、CSS3 3D、CSS滤镜、z-index大于某个相邻节点的元素都会触发新的Layer，其实我们最常用的方法，就是给某个元素加上下面的样式：
￼
	问题的解决:容易触发重排重绘的元素单独触发渲染层，让它与那些“静态”元素隔离，让GPU分担更多的渲染工作，我们通常把这样的措施成为硬件加速，或者是GPU加速。大家之前肯定听过这个说法，现在完全清楚它的原理了吧。


	2.3.重排与重绘
		①重排（reflow）：布局发生修改，都会导致页面重新排列，
					比如窗口的尺寸发生变化、删除或添加DOM元素,修改了影响元素盒子大小的CSS属性（诸如：width、height、padding）。
		②重绘（repaint）:对元素的视觉表现属性的修改，都会引发重绘。

		不论是重排还是重绘，都会阻塞浏览器。要提高网页性能，就要降低重排和重绘的频率和成本，近可能少地触发重新渲染。重排是由CPU处理的，而重绘是由GPU处理的，CPU的处理效率远不及GPU，并且重排一定会引发重绘，而重绘不一定会引发重排。所以在性能优化工作中，我们更应当着重减少重排的发生。

	2.4.优化策略
		（一）CSS属性读写分离：浏览器每次对元素样式进行读操作时，都必须进行一次重新渲染（重排 + 重绘），所以我们在使用JS对元素样式进行读写操作时，最好将两者分离开，先读后写，避免出现两者交叉使用的情况。最最最客观的解决方案，就是不用JS去操作元素样式，这也是我最推荐的。
		（二）通过切换class或者使用元素的style.csstext属性去批量操作元素样式。
		（三）DOM元素离线更新：当对DOM进行相关操作时，例、appendChild等都可以使用Document Fragment对象进行离线操作，带元素“组装”完成后再一次插入页面，或者使用display:none 对元素隐藏，在元素“消失”后进行相关操作。
		（四）将没用的元素设为不可见：visibility: hidden，这样可以减小重绘的压力，必要的时候再将元素显示。
		（五）压缩DOM的深度，一个渲染层内不要有过深的子元素，少用DOM完成页面样式，多使用伪元素或者box-shadow取代。
		（六）图片在渲染前指定大小：因为img元素是内联元素，所以在加载图片后会改变宽高，严重的情况会导致整个页面重排，所以最好在渲染前就指定其大小，或者让其脱离文档流。
		（七）对页面中可能发生大量重排重绘的元素单独触发渲染层，使用GPU分担CPU压力。（这项策略需要慎用，得着重考量以牺牲GPU占用率为代价能否换来可期的性能优化，毕竟页面中存在太多的渲染层对于GPU而言也是一种不必要的压力，通常情况下，我们会对动画元素采取硬件加速。）



3.JS阻塞性能
	脚本带来的问题就是他会阻塞页面的平行下载，还会提高进程的CPU占用率。
	在编程的过程中，如果我们使用了闭包后未将相关资源加以释放，或者引用了外链后未将其置空（比如给某DOM元素绑定了事件回调，后来却remove了该元素），都会造成内存泄漏的情况发生，进而大量占用用户的CPU，造成卡顿或死机。我们可以使用chrome提供的JavaScript Profile版块，开启方式同Layers等版块，这里我就不再多说了，直接上效果图：
	其实浏览器强大的内存回收机制在大多数时候避免了这一情况的发生，即便用户发生了死机，他只要结束相关进程（或关闭浏览器）就可以解决这一问题，但我们要知道，同样的情况还会发生在我们的服务器端，也就是我们的node中，严重的情况，会直接造成我们的服务器宕机，网站崩溃。
	所以没修炼到一定水平，千万别在服务端使用闭包，一个是真没啥用，我们会有更多优良的解决办法，二是真的很容易内存泄漏，造成的后果是你无法预期的

4.【拓展】负载均衡

	4.1.Node.js处理IO密集型请求
		A.现在的开发流程都注重前后端分离，也就是软件工程中常提到的“高内聚低耦合”
		b.前后端分离:前后解耦就相当与把一个项目分成了前端和后端两个大模块，中间通过接口联系起来，分别进行开发。
		c.node:node的核心是事件驱动，通过Event Loop去异步处理用户请求，相比于传统的后端服务，它们都是将用户的每个请求分配一个进程进行处理,Nodejs最赖以自豪的优势莫过于“单线程实现异步IO”了,事件驱动的最大优势是什么？就是在高并发IO时，不会造成堵塞
		d.什么是IO: 
		e.其实现在的企业级网站，都会搭建一层node作为中间层。大概的网站框架如图所示
￼

	4.2.pm2实现Node.js“多进程”
		nodejs的优劣:https://www.zhihu.com/question/19653241/answer/15993549
	
		pm2。这是它的官网：http://pm2.keymetrics.io/ 。它是一款node.js进程管理器，具体的功能，就是能在你的计算机里的每一个内核都启动一个node.js服务，也就是说如果你的电脑或者服务器是多核处理器（现在也少见单核了吧），它就能启动多个node.js服务，并且它能够自动控制负载均衡，会自动将用户的请求分发至压力小的服务进程上处理。


	4.3.nginx搭建反向代理
		1..什么是反向代理? https://www.zhihu.com/question/24723688
￼
		所谓代理就是我们通常所说的中介，网站的反向代理就是指那台介于用户和我们真实服务器之间的服务器，它的作用便是能够将用户的请求分配到压力较小的服务器上，其机制是轮询。听完这句话是不是感觉很耳熟，没错，在我介绍pm2的时候也说过同样的话，反向代理起到的作用同pm2一样也是实现负载均衡，你现在应该也明白了两者之间的差异，反向代理是对服务器实现负载均衡，而pm2是对进程实现负载均衡。

		在nginx中，模块被分为三大类：handler、filter和upstream。而其中的upstream模块，负责完成完成网络数据的接收、处理和转发，也是我们需要在反向代理中用到的模块

		4.3.1.upstream配置信息
			a. upstream关键字后紧跟的标识符是我们自定义的项目名称，通过一对花括号在其中增添我们的配置信息。
			b. ip_hash 关键字：控制用户再次访问时是否连接到前一次连接的服务器
			c. server关键字：我们真实服务器的地址，这里的内容肯定是需要我们去填写的，不然运维怎么知道你把项目放在那个服务器上了，也不知道你封装了一层node而得去监听3000端口。
		
		4.3.2.server配置信息
			a. server是nginx的基本配置，我们需要通过server将我们定义的upstream应用到服务器上。
			b. listen关键字：服务器监听的端口
			c. location关键字：和我们之前在node层说到的路由是起同样的功能，这里是把用户的请求分配到对应的upstream上

		性能优化书籍推荐:
			《大型网站性能监测、分析与优化》
