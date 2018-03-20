//自运行函数
(function(window) {

  var Jquery = function(selector){  // select 传入的选择器 p
    return new Jquery.fn.init(selector)
  }


  // 定义构造函数
  var init = Jquery.fn.init = function(selector) { // select 传入的选择器 p
    var slice = Array.prototype.slice // slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。  . start, 必需。规定从何处开始选取。如果是负数，那么它规定从数组尾部开始算起的位置。也就是说，-1 指最后一个元素，-2 指倒数第二个元素，以此类推。 end, 可选。规定从何处结束选取。
    var dom = slice.call(document.querySelectorAll(selector)) // 通过选择器把所有的dom元素都拿到,然后把它变成数组的形式, 返回的是一个dom数组
    var i, len = dom ? dom.length : 0

    // 遍历dom数组  把数组的元素都变成实例的属性
    for (i = 0; i< len; i++) {
      this[i] = dom[i]
      this.length = len
      this.selector = selector || ''
    }


  }
  Jquery.fn = {
    css: function(key, value) {
      alert('css')
    },
    html: function(key, value) {
      return 'html'
    }
  }
  // 构造函数的原型
  init.prototype = Jquery.fn


  window.$ = Jquery
})(window)



// 扩展jq插件  最终的目的是放在
$.fn.getNodeName = function() {
  console.log('hahahah')
  // this[0] 其实就是相当于 this.0
  alert(this[0].nodeName)
}


