一.es6 (node v8的版本是已经完全可以运行es6,  浏览器可以运行部分es6 所以都是需要打包)

	1.babel
		a.安装:npm i babel-core babel-preset-es2015 babel-preset-latest -D --registry=https://registry.npm.taobao.org
￼
￼
		b.创建.babelrc文件

		c.全局安装cli:$ sudo npm i -g babel-cli
		d.查看版本:babel --version
		e.使用babel编译: $ babel es6/src/index.js
￼

	2.webpack开发环境
		a.安装:npm i  webpack-cli webpack babel-loader -D  --registry=https://registry.npm.taobao.org  (ps:webpack4.0之后 命令行单独分出一个包，webpack-cli, 安装webpack-cli包。 )
		b.编写配置文件: webpack.config.js



	3.rollup 开发环境  (rollup功能单一 做到极致,webpack功能强大,只能打包模块化)
		a.安装: 哈哈是的护发素发
		b.配置.babelrc
		b.配置.rollup.config.js



	4.语法

		a.class:其实就是构造函数的语法糖,class是模仿java,class的typeof其实就是function  (两者的本质是一样的,语法糖只是更好看 更加容易理解)			优点:语法上更加贴合面对对象的写法,更加易读,更加容易理解
			(ps:本质还是语法糖,使用prototype )

￼
￼

		b.继承
￼
￼
		c.let var
￼

		d.es6的常用内容
			a.let / const
			b.模板字符串 ``
			c.解构赋值  ... 
			d.块级作用域  :  for循环中的var  和 let的区别
			f.函数默认参数
			g.箭头函数

	4.Promise的基本使用(其实也是在es6的语法中)
		异步:异步都有callback
	


	5.Jquery 和 Zepto
		a.原型的实际应用: jquery是如何使用原型的

		b.问题: jq的原型为什么要放在 JQuery.fn上面   
			答案:  因为要扩展插件
￼
￼
		c. 问题:为啥不直接给原型赋值,而要通过JQuery.fn
			答案:只有$会暴露在window全局变量  ($=jquery),所以直接是拿不到

		d.插件的编写  : 将插件扩展统一到$.fn.xxx这一个接口 方便使用
			$.fn.getNodeName = function(
￼





二.异步   (单线程的解决方案是异步,异步的解决方案是promise)  (ps:异步的问题:代码的执行顺序和我们书写代码的顺序是不一致的)

	1.单线程  和 异步的关系
		a.单线程 : 只有一个线程 , 同一时间,只能做一件事
		b.单线程的原因: 避免DOM渲染的冲突
			b.1 js执行的时候,浏览器的DOM渲染会暂停
			b.2 两段js也不能同时执行,都修改DOM就冲突了
			b.3 HTML5中有一个webworker支持多线程,但是无法访问DOM

		c.单线程的解决方案: 异步
		
		d.异步的缺点:
			1.代码的执行顺序和我们书写代码的顺序是不一致的
			2.callback中不容易模块化 ( callback是异步完事之后要执行的代码 )


	2.event-loop (事件循环 / 时间轮询) :js是通过event-loop来实现异步
		a.同步函数,按顺序直接执行
		b.异步函数先放入异步队列中 (settimeout延时100ms 的话,其中的回调会在100ms之后才会放到异步队列中 )
		c.等待同步函数执行完毕, 轮询执行 异步队列的函数 (轮询执行:表示一直查看,有没有异步队列的函数,有就执行,因为settimeout延时100ms才会放入异步队列中)
		d.event-loop的总结
			1.JS实现异步的具体解决方案 : event loop
			2.同步函数
			3.异步函数  ,何时被放入异步队列 (settimeout 延迟被放入 ajax 请求成功才被放入)
			4.
 


	3.jQuery的Deferred  (deferred对象就是jQuery的回调函数解决方案, 在英语中，defer的意思是"延迟")

	4.Promise的基本使用 
		a.基本语法  OK   .then(成功func, 失败func)      then只是将callback拆分了 (因为往then也是穿入callback)
 		b.异常捕获 catch
		c.多个串联 .then .then
		d.可以链式写法,不像以前那样嵌套很多层

	5.async/await (和promise的区别和联系)
		a.同步的写法 , 没有回调函数
		b.基本语法 
			1.使用await函数, function前面加上async表示
			2.await后面的是promise实例
			3.需要用babel-polufill  因为不是完全支持
	


		



三.虚拟DOM (virtual dom )


	1. 是什么虚拟dom  ?   
		不是真正dom,是用JS模拟DOM结构  (通过对象表示结构化文档的方式)
		dom变化的对比,放在JS层来做(原来的是ABC-变成AC,原始的会把abc都弄掉,再插入ac,  现在虚拟dom就直接把B去掉就行了)
		最终实现提高重绘性能

￼
￼
		浏览器创建一个dom: var div = document.createElememt('div')   这个div包含了N多节点,二用v-dom就一个对象就解释了

	2.  vdom如何应用
		a.snabbdom:是一个开源的vdom库
		b.为什么会存在vdom  :  提高性能
		c.核心的api是什么	:   h : 初次渲染  patch : 二次渲染
		d. 是什么虚拟dom?  
			不是真正dom,是用JS模拟DOM结构  (通过对象表示结构化文档的方式)

	3. 什么是diff算法  vdom的核心算法
		a.什么是diff算法
			1.	LINUX下面最基础的diff命令:查看2个文件的差异
￼
			2. 	diff算法非常复杂, 实现难度很大, 源码量很大
			3.	diff实现:  patch函数   
							createElement
							updateChildren


		b.vdom为何用diff算法 : 找出需要更新的节点
			a. 找出本次DOM必须更新的节点来更新,其他的不更新
			b. 找出的过程,需要用到diff算法


	
四.MVVM  (Object.defineProperty)    define:定义	property:性质

	1.使用jquery和使用vue的区别
		a. 数据和视图的分离,     "解耦":什么事都分离开 (开放封闭原则: 对扩展开放,对修改封闭)
		b. 以数据驱动视图 : 只需关心数据变化,Dom操作被封装了

	2. mvc : model:数据原型  view:视图   controller:控制器-------ng1
		mvvm: model:数据原型(data) view:视图(dom)     vm:viewmodel : (vue的实例 vm) 
				viewmodel分为2个 a. view绑定事件操作model  b.model通过数据绑定去渲染view

	3.mvvm框架的三要素
		a.M : Model  -----  data
		b.V  : View	-----  <template>
		c.VM :ViewModel    VM实例
		

	4.vue如何实现双向绑定
		Object.defineProperty(obj, key, {
			set: function(){},
			get: function(){}
		})
	
	5.vue如何实现模板引擎
		a.什么是模板
			本质 :  字符串
			有逻辑 : 比如 v-for
			最终要转化成js代码 有render函数

		b.v-for是怎么实现的:  对list数组进行遍历,每个元素都封装成一个标签,然后一起返回作为ul元素的子元素
		b.v-model 是怎么实现的:  双向数据绑定 核心的东西就是 get 和 set 方法
		b.v-onclick 是怎么实现的:  绑定click事件  然后对应自己定义的函数

	6.vue如何渲染
		a.第一步 : 解析模板成render函数
		b.第二步:  响应式开始监听(get和set)   defineProperty  和 把data的属性都挂载到vm上
		c.第三步:  首次渲染  显示页面 并且绑定依赖
		d.第四部:  data属性变化(被defineProperty的set函数监听到)  => 触发render函数
		


五.组件化(React)

	1.React以及组件化的一些核心概念
		a.组件的封装
			视图封装 ----- render
			数据封装 ----- this.state
			函数封装 ----- this.setState

		b.组件的复用
			props传递不同的属性或者方法展现不同的东西

	2.JSX本质是什么	
		a.JSX本质其实是语法糖 , 需要被解析成JS才能运行
		b.开发环境会将JSX编译成JS代码, 生产环境
		c.就是模板,最终要通过Vdom渲染成Html

	3.JSX和Vdom的关系
		a.为什么需要vdom : JSX需要通过Vdom渲染成html,数据驱动视图

				vdom的  h 和patch

		b.React.createElement函数 和 h函数 ,都会生成vnode
		c.何时patch : ReactDom.render    和 setState
		d.自定义组件的解析: 初始化实例,然后执行render

	

	4.React中setState的过程
		a.setState的异步	 (ps:vue修改属性也是异步的)
			
￼

		b.为什么setState需要异步
			1.可能会一次执行多次setState  ( 把所有的 )
			2.无法规定 限制用户如何使用setState
			3.没必要每次都setState都重新渲染,多次setState,只渲染一次即可  只看到最后的结果即可
			4.,因为即便重新渲染,用户也看不到效果(因为js的执行和DOM渲染是单线程的,JS执行的时候DOM渲染是卡顿的)
			5.

		c.React 和 Vue的区别
			1.模板的区别
				a.React的 模板和JS混在一起,没有分离
				b.开发封闭原则 (对扩展开放,对修改封闭),把该分开的分开,各自修改各自的,相互不影响
				c.React本身就是组件化,Vue也支持组件化,不过是在MVVM上的扩展
			2.Vue的本质是mvvm框架,由mvc框架发展来的
			   React的本质是前端组件化框架,由后端组件化发展而来
			3.Vue使用模板   React使用JSX
			4.模板语法上,更倾向于JSX   |   模板分离上,更倾向于VUE


		d.c.React 和 Vue的共同点
			1.都支持组件化

		e.技术选型 在React 和 Vue
			2.国内使用,首推vue . 文档易读,易学,社区够大
			3.团队水平较高,推荐使用React  组件化 和 JSX标准


六.Hybrid(混合)

	1.Hybrid是什么
		a. Hybrid即混合  就是前端和客户端的混合开发,需要前端开发人员和客户端开发人员配合完成,某些环节也可能涉及到server端

		b. 存在价值: 快速迭代更新  无需app审核(ios审核需要一周以上,有可能被拒绝)

		c. webview: 是app的一类组件的通称呼

	2.hybrid的具体实现
		使用场景:
			a.使用NA : 体验要求极致,变化不频繁 ( 比如头条的首页 )
			b.使用hybrid: 体验要求高,变化频繁 ( 比如头条的新闻详情页 )
			c.使用h5: 体验无要求,不常用 ( 比如举报页面 反馈页面 )
		使用流程:
			a.前端做好静态页面 (html js css) ,然后客户端把该页面以文件形式存储在app中
			b.客户端在一个webview中使用file协议加载静态页面

	2.更新和上线的流程

		a. 实时更新
		
		b. 如何获取内容(前端如何获取新闻内容)	
			1. 不能使用ajax获取  第一是跨域了 第二呢速度慢
			2. 客户端获取新闻内容, 然后JS通讯拿到内容,然后再渲染
			3. js访问客户端能力,传递参数和回调函数, 然后客户端通过回调函数返回内容
￼
￼

	3.hybrid和h5的主要区别	

	4.前端JS和客户端如何通讯  ( schema 协议)

	5.JSSDK其实就是(封装了 前端 和  客户端通信)




	答案: Promise，js异步编程的流行解决方案,已经成为了es6
			1.Promise是有“状态”的，分别是pending（等待态）、fulfilled（成功态）、rejected（失败态）
				resolve将pending转为fulfilled
				rejected将pending转为rejected
			2.then方法传递两个函数作为参数，可以提供改变状态时的回调，第一个函数是成功的回调，第二个则是失败的回调。
			3.每一个then方法都会返回一个新的Promise实例（不是原来那个），让then方法支持链式调用，并可以通过返回值将参数传递给下一个then
			4.	•	catch() 捕获异常
			5.	•	Promise.all()  传入多个promise 是与的关系, // 三个都成功则成功  // 只要有失败，则失败 
			6.    •	Promise resolve("成功") = new Promise(function(resolve,reject){ resolve("成功") })
			7.	•	Promise.reject('出错了')等同于new Promise((resolve, reject) => reject('出错了'))

			8. 原始异步解决方法  ---回调函数----的问题------传说中的回调地狱，万劫不复，不能自拔。
