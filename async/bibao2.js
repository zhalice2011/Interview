
// 闭包
// 返回的函数并没有立刻执行，而是直到调用了f()才执行。我们来看一个例子：
function count() {
  var arr = []
  for (var i=1; i<=3; i++) {
    arr.push(function() {
      return i * i
    })
  }
  return arr
}

var results = count();
console.log(results)
console.log(results[0]()) // 16
console.log(results[1]()) // 16
console.log(results[2]()) // 16

// 全部都是16！原因就在于返回的函数引用了变量i，但它并非立刻执行。
// 等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。
// PS (如果将var 改成 let 就会变成1 4 9)

// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量。

// 如果一定要引用循环变量怎么办？方法是再创建一个函数，用该函数的参数绑定循环变量当前的值，无论该循环变量后续如何更改，已绑定到函数参数的值不变：

function count2() {
  var arr = []
  for (var i=1; i<=3; i++) {
    arr.push((function(n) {
      return function() {
        return n * n
      }
    })(i))
  }
  return arr
}
var results2 = count2();
console.log(results2)
console.log(results2[0]()) // 1
console.log(results2[1]()) // 4
console.log(results2[2]()) // 9