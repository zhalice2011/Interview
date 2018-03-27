# Interview 前端面试 -- 

##HTML

1. 你是如何理解 HTML 语义化的

	dali: 增加代码的易读性

	答案:  为了改变 "一堆div+css" , 语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化），便于开发者阅读和写出更优雅的代码的同时，让浏览器的爬虫和机器很好的解析。

			需要注意的点1. header  footer  section nav article
						2.尽可能少的使用无语义的标签div和span；
						3.在语义不明显时，既可以使用div或者p时，尽量用p, 因为p在默认情况下有上下间距，对兼容特殊终端有利；
						4.不要使用纯样式标签，如：b、font、u等，改用css设置。
						

1. meta viewport 是做什么用的，怎么写？
	
	dali: meta:变换  viewport:视口   maximum:最大量 initial:最初的 scalable:可伸缩的
	
	答案: 
  1. <meta> 元素可提供有关页面的元信息（meta-information），比如针对搜索引擎和更新频度的描述和关键词
  1. viewport是指 web 页面上用户的可见区域。
	1. 名字 viewport   内容  宽度=设备的宽度 初始缩放1.0 最大缩放1.0 不许用户缩放
	`<meta name="viewport"  content="width=device-width,intial-scale=1.0,  maximun-scale=1.0, user-saclable=0">`