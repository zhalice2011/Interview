// 函数的定义和调用：

// 如果没有return语句，函数执行完毕后也会返回结果，只是结果为undefined。
// JavaScript允许传入任意参数，即使函数内部不需要这些参数，也不影响调用。
// JavaScript还有一个免费赠送的关键字arguments，它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。arguments类似Array但它不是一个Array
// 利用arguments即使函数不定义任何参数，还是可以拿到参数的值。

function run() {
  if (arguments.length === 0) {
    return 0;
  }
  console.log('arguments', arguments) //  arguments { '0': 2 } 
  console.log(typeof(arguments) ) // object
  console.log(Object.prototype.toString.call(arguments)) // [object Arguments]
  if (Object.prototype.toString.call(arguments) === '[object Arguments]') {
    console.log('Object.prototype.toString.call(arguments) === "[object Arguments]"成立')
  }
}

console.log(run()) // 0
console.log(run(2)) // arguments { '0': 2 }   函数执行完毕后也会返回结果，只是结果为undefined ,undefined
