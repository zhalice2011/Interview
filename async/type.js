
// 5个基本类型
var  a = 'dali' // String
var  b = 1      // Number
var  c = null // null
var  d = undefined // undefined
var  e = true // Boolean

// 一个引用类型 Object (Object Array Function)

var f = {}
var g = []
var h = function() {}

// 1. 使用typeof判断 
      // 缺点 : 无法判断对象和数组  null 打印出来都是object

console.log(typeof(a))  // string
console.log(typeof(b))  // number
console.log(typeof(c))  // object
console.log(typeof(d))  // undefined
console.log(typeof(e))  // boolean
console.log(typeof(f))  // object
console.log(typeof(g))  // object
console.log(typeof(h))  // function



// 2. 使用Object.prototype.toString.call判断
console.log(Object.prototype.toString.call(a))  // [object String]
console.log(Object.prototype.toString.call(b))  // [object Number]
console.log(Object.prototype.toString.call(c))  // [object Null]
console.log(Object.prototype.toString.call(d))  // [object Undefined]
console.log(Object.prototype.toString.call(e))  // [object Boolean]
console.log(Object.prototype.toString.call(f))  // [object Object]
console.log(Object.prototype.toString.call(g))  // [object Array]
console.log(Object.prototype.toString.call(h))  // [object Function]




// 3.  undefined与null的区别

      // 一个重要的区别，服务于不同的目的和理由。区分这两个值，你可以认为undefined代表一个意想不到的没有值而null作为预期没有值的代表。


