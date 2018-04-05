{
  let a = 10;
  var b = 1;
}

// a // ReferenceError: a is not defined.
// console.log(b) // 1


// ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。

// 那些代码块 比如 for () {}


function func(arg) {
  let arg; // 报错
}

function func(arg) {
  {
    let arg; // 不报错
  }
}
// var a = 1

// var a = 2

// let c = 1

// let c = 2



// 循环变量泄漏为全局变量

// var s = 'hello';

// for (var i = 0; i < s.length; i++) {
//   console.log(s[i]);
// }

// console.log(i); // 5

// 块级作用域

function f1() {
  let n = 5;
  if (true) {
    let n = 10;
    n = 100  // 这两个n是不一样的内存地址
  }
  console.log(n); // 5
}

f1()