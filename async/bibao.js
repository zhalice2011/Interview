
// 相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。

// 求和函数

function sum(arr) {
  return arr.reduce(function(pre, next) {
    return pre + next
  })
}
var arr = [1, 2, 4, 5]
console.log(sum(arr))

// 但是，如果不需要立刻求和，而是在后面的代码中，根据需要再计算怎么办？可以不返回求和的结果，而是返回求和的函数！
function lazySum(arr) {
  var sum = function() {
    return arr.reduce(function(pre, next) {
      return pre + next
    })
  }
  return sum
}

// 当我们调用lazy_sum()时，返回的并不是求和结果，而是求和函数：  相关参数和变量都保存在返回的函数中
var f = lazySum([1,2,2])
var f2 = lazySum([1,2,2])
console.log(f())
console.log(f === f2) // false 每次调用都会返回一个新的函数，即使传入相同的参数：


