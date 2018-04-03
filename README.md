# Interview 前端面试 

## HTML

1. 你是如何理解 HTML 语义化的

	dali: 增加代码的易读性

	答案:  为了改变 "一堆div+css" , 语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

			需要注意的点1. header  footer  section nav article
						2.尽可能少的使用无语义的标签div和span；
						3.在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
						4.不要使用纯样式标签，如：b、font、u等，改用css设置。
						

2. meta viewport 是做什么用的，怎么写？
	
	dali: meta:变换  viewport:视口   maximum:最大量 initial:最初的 scalable:可伸缩的
	
	答案: 
  1. <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词
  1. viewport是指 web 页面上用户的可见区域。
	1. 名字 viewport   内容  宽度=设备的宽度 初始缩放1.0 最大缩放1.0 不许用户缩放
	`<meta name="viewport"  content="width=device-width,intial-scale=1.0,  maximun-scale=1.0, user-saclable=0">`


3. canvas 元素是干什么的？
	
	达理:  画布  用来绘制的

	答案:  <canvas> 是 HTML5 新增的，一个可以使用脚本(通常为JavaScript)在其中绘制图像的 HTML 元素。它可以用来制作照片集或者制作简单(也不是那么简单)的动画，甚至可以进行实时视频处理和渲染。




CSS

1.盒模型
		
	达理: 盒模型:content( width height )  border padding margin
			标准盒模型 : 盒子的高度 = content.height + border + padding
			怪异盒模型:  盒子的高度 = content.height(包括了border 和 padding)
			使用: border-box:bordersizing

	答案:
		盒模型 :every element in web design is a rectangular box (在网页设计中每一个元素是一个长方形的盒子)

￼
		box-sizing :  content-box  | padding-box(宽度包含padding) | border-box(宽度包含border和padding)
		标准盒模型:Width = width + padding-left + padding-right + border-left + border-right
		怪异盒模型:Width = width(包含padding-left + padding-right + border-left + border-right)
		使用: box-sizing: border-box
	

2.css reset 和 normalize.css 有什么区别？  (ps: normalize :使正常化  reset:重置)

	达理: 都是取消浏览器的默认css,使得每个浏览器初始都是一样的效果

	答案: 1. reset.css ->重置 
			把各浏览器最不一致的地方强制归0，例如margin、line-height都调成一样的大小。
	
		   2. normalize.css ->保留通用性
			保留每个浏览器的不同预设值，就不会<h1>跟<p>看起来一样大(这是reset的结果)之类的。
			保留跨浏览器的一致性




  3.如何居中？

	达理:   1. flex  align-items  : center    
		    2. margin : 0 auto
		    3. position  + transfrom
		    4. line-height
		    5. vi-alin:middle

	答案:  1.Flexbox的解决方案 
			父元素上设置display: flex，和在垂直居中的元素上设置margin: auto
￼

		    2.绝对定位解决方案
			 a.知道自身宽度: top:50 margin-top: -3px(元素自身宽度的一半)
			 b.不知道自身宽度:transform: translate(-50%, -50%);   (让元素移动是相对于自身的宽度和高度的)
￼

		    3..视窗单位的解决方案  -vw:相对于视窗的宽度  1vw相当于视窗宽度的1%
￼
	
			4.flex - 子元素垂直居中: display: flex;   align-items: center;

			5.flex - 子元素垂直居中
￼
			6.flex - 水平垂直居中  align-items: center;  justify-content:center
￼

			7.水平垂直居中 : position+auto
		 	8.水平垂直居中 : table-cell


3.选择器优先级如何确定
	Import  >  style=""   > id > class > 伪类(a:hover a:active 选定的链接 )> tag >  *
￼


4.BFC是什么

	达理: 格式化块级作用域
	
	答案: 块格式化上下文（Block Formatting Context，BFC）  BFC容器中与外界环境互不干扰。

		BFC实例:
			1.margin的bug 垂直方向margin出现了合并
	
				可以通过使得两个Box不处于同一BFC就可以解决这个BUG，比如对其中一个Box设置overflow为hidden：
			2. 清除浮动 : 利用父元素的伪元素是最佳实践
	
5.如何清除浮动
	
	达理: .clearfix:after{ clear:both  zoom:1 }(兼容IE)

	答案: 
		1.  使用overflow    .clearfix {overflow: auto;zoom: 1 (兼容IE6)}

		2.万能清除法 after伪类 
			clearfix:after{
            			content:".";
            			clear:both;
            			display:block;
            			height:0;
            			overflow:hidden;
            			visibility:hidden;
              		}





JS


1.js数据类型
		
	达理:  	基本类型: Number Srtring null  undefined  Boolen 
			引用类型: Object (包含Function Array)
			es6新增: symbol 代表独一无二的值

	答案: OK
￼


2.Promise 怎么使用？  (resolve:决定  rejected:拒绝)

	达理: promise是异步的一种解决方案
			使用就是  return new Promise(resolve, reject){}    调用就是通过.then链式调用  .then方法接受2个函数,第一个是成功的回调函数,第二个是失败的回调函数

	答案: Promise，js异步编程的流行解决方案,已经成为了es6
			1.Promise是有“状态”的，分别是pending（等待态）、fulfilled（成功态）、rejected（失败态）
				resolve将pending转为fulfilled
				rejected将pending转为rejected
			2.then方法传递两个函数作为参数，可以提供改变状态时的回调，第一个函数是成功的回调，第二个则是失败的回调。
			3.每一个then方法都会返回一个新的Promise实例（不是原来那个），让then方法支持链式调用，并可以通过返回值将参数传递给下一个then
			4.	•	catch() 捕获异常
			5.	•	Promise.all()



1.预排序遍历树算法：modified preorder tree traversal algorithm

		优点: 由于这种方法不使用递归查询算法，有更高的查询效率。

		用法:  1. 查看整个树(A)有多少节点(包含自己)  直接看根节点就行了 
				(right-left+1)/2 = (20-1+1)/2 = 10

		
			   2. 查看子节点 

				所有left左值大于2和右值right小于11的节点 都是"Fruit" 2-11 的子孙节点
