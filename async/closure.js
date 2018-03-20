

// 闭包 达理自己的理解  保存了当时的环境变量

// 1.闭包返回一个函数  
// 这个环境中包含两个私有项：名为 privateCounter 的变量和名为 changeBy 的函数。
// 这两项都无法在这个匿名函数外部直接访问。必须通过匿名函数返回的三个公共函数访问。
var closure = function(){
  var initial = 0;
  function algorithm(x) {
    initial += x
  }
  // 返回一个对象
  return {
    add : function(x) {
      algorithm(x)
    },
    plus: function(x) {
      algorithm(-x)
    },
    value: function() {
      return initial
    }
  }
}


// 需要一起实现  加 减 获取值  这三个的方法哦

// closure.add(1)
// closure.add(1)
// closure.add(1)
// console.log('结果', closure.value())  // 结果是3

// closure.plus(10)

// console.log('结果', closure.value())  // 结果是-7


// 闭包的进阶   2个函数
// 每次调用其中一个计数器时，通过改变这个变量的值，会改变这个闭包的词法环境。然而在一个闭包内对变量的修改，不会影响到另外一个闭包中的变量。


var counterOne = closure()
var counterTwo = closure()

counterOne.add(1)
counterOne.add(1)
console.log('counterOne 的 结果', counterOne.value())  // 结果是2 ? OK

counterTwo.plus(1)
counterTwo.plus(1)
counterTwo.plus(1)
counterTwo.plus(1)
counterTwo.plus(1)
counterTwo.plus(1)
console.log('counterTwo 的 结果', counterTwo.value())  // 结果是-6 ? OK


