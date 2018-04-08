/* 浏览器环境
js执行为单线程（不考虑web worker），所有代码皆在主线程调用栈完成执行。当主线程任务清空后才会去轮询取任务队列中任务。
任务队列
异步任务分为task（宏任务，也可称为macroTask）和microtask（微任务）两类。
当满足执行条件时，task和microtask会被放入各自的队列中等待放入主线程执行，我们把这两个队列称为Task Queue(也叫Macrotask Queue)和Microtask Queue。

task：script中代码、setTimeout、setInterval、I/O、UI render。
microtask: promise、Object.observe、MutationObserver。

具体过程

执行完主执行线程中的任务。
取出Microtask Queue中任务执行直到清空。
取出Macrotask Queue中一个任务执行。
取出Microtask Queue中任务执行直到清空。
重复3和4。

即为同步完成，一个宏任务，所有微任务，一个宏任务，所有微任务......
注意

在浏览器页面中可以认为初始执行线程中没有代码，每一个script标签中的代码是一个独立的task，即会执行完前面的script中创建的microtask再执行后面的script中的同步代码。
如果microtask一直被添加，则会继续执行microtask，“卡死”macrotask。
部分版本浏览器有执行顺序与上述不符的情况，可能是不符合标准或js与html部分标准冲突。可阅读参考文章中第一篇。
new Promise((resolve, reject) =>{console.log(‘同步’);resolve()}).then(() => {console.log('异步')})，即promise的then和catch才是microtask，本身的内部代码不是。
个别浏览器独有API未列出。
*/

// 1. promise
// 2. setTimeout

new Promise((resolve,reject) => {
  console.log('Promise')
  setTimeout(function() {
    console.log('setTimeout1')
    new Promise((resolve,reject) => {
      reject("Promise.then,reject")
    }).then(function(){

    },function(data) {
      console.log('Promise.then.reject',data)
    })
  })

  setTimeout(function() {
    console.log('setTimeout2')
  },1000)

  resolve('nihao')

}).then(function(data) {
  console.log('Promise.then',data)
})


setTimeout(function() {
  console.log('setTimeout3')
})

console.log('dali')



// 达理        同步      清空异步微任务        执行一个宏任务     清空异步微任务            执行一个宏任务            执行一个宏任务 
 // Promise -> dali ->  Promise.then  ->   setTimeout1 ->    Promise.then.reject    setTimeout3->          setTimeout2
