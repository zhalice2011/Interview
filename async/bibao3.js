
// 闭包有非常强大的功能。举个栗子： 对象内部封装一个私有变量


// 实现一个累加器 你没法访问这个变量你

function summation(initial) {
  var x = initial || 0
  return function() {
    return x += 1
  }

  // return {
  //   inc: function() {
  //     return x
  //   }
  // }
};

var a = summation();

// console.log(a()) // 1
// console.log(a()) // 2
// console.log(a()) // 3
// console.log(a()) // 4

var b = summation(10);
// console.log(b()) // 11
// console.log(b()) // 12
// console.log(b()) // 13


// 闭包就是携带状态的函数，并且它的状态可以完全对外隐藏起来。



// 定义数字0:
var zero = function (f) {
  return function (x) {
      return x;
  }
};

// 定义数字1:
var one = function (f) {
  return function (x) {
      return f(x);
  }
};

// 定义加法:
function add(n, m) {
  return function (f) {
      return function (x) {
          return m(f)(n(f)(x));
      }
  }
};

// 闭包  面试题 一

for (var i = 0; i < 5; i++) { 

  // (function(i){
  //   setTimeout(function() {  
  
  //   console.log(i);  
  
  //   }, 1000); 
  // })(i)

  // setTimeout((function(i) {  
  
  //   console.log(i);  
  
  // })(i), 1000); 

};

// 闭包  面试题 二 这个在node环境会报错  在浏览器环境会依次打印 0 -4
for (var i = 0; i < 5; i++) { 

  setTimeout((function(i) { 
 
    console.log(i); 
 
  })(i), i * 1000);
 }