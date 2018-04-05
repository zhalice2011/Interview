// Javascript语言的执行环境是"单线程"（single thread）。
  // 好处是实现起来比较简单，执行环境相对单纯
  // 坏处是只要有一个任务耗时很长，后面的任务都必须排队等着，会拖延整个程序的执行。常见的浏览器无响应（假死），往往就是因为某一段Javascript代码长时间运行（比如死循环），导致整个页面卡在这个地方，其他任务无法执行。
  
  // 浏览器端，耗时很长的操作都应该异步执行，避免浏览器失去响应，最好的例子就是Ajax操作。
  // 在服务器端，"异步模式"甚至是唯一的模式，因为执行环境是单线程的，如果允许同步执行所有http请求，服务器性能会急剧下降，很快就会失去响应。



// 一、 回调函数 两个函数f1和f2，后者等待前者的执行结果。
    // 优点: 回调函数的优点是简单、容易理解和部署，
    // 缺点: 缺点是不利于代码的阅读和维护，各个部分之间高度耦合（Coupling），流程会很混乱，而且每个任务只能指定一个回调函数。
　　
function f1(callback) {　　　
  setTimeout(function () {
    // f1的任务代码
    callback();　　　
  }, 1000);
}
function f2() {
  console.log('哈哈')
}
f1(f2)

console.log('hahaha')

// f1不会堵塞程序运行


// 二、事件监听  采用事件驱动模式。任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

f1.on('done', f2);

function f1(){
　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　f1.trigger('done');

　　　　}, 1000);
}

// 当f1发生done事件，就执行f2


// 三、发布/订阅 这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。
jQuery.subscribe("done", f2);

function f1(){

　　　　setTimeout(function () {

　　　　　　// f1的任务代码

　　　　　　jQuery.publish("done");

　　　　}, 1000);
  
}

// jQuery.publish("done")的意思是，f1执行完成后，向"信号中心"jQuery发布"done"信号，从而引发f2的执行。

// 此外，f2完成执行后，也可以取消订阅（unsubscribe）。




// 四、Promises对象

// 每一个异步任务返回一个Promise对象，该对象有一个then方法，允许指定回调函数。比如，f1的回调函数f2,可以写成：
  // 优点 回调函数变成了链式写法，
  f1().then(f2);


  function f1(){
  
  　　　　var dfd = $.Deferred();
  
  　　　　setTimeout(function () {
  
  　　　　　　// f1的任务代码
  
  　　　　　　dfd.resolve();
  
  　　　　}, 500);
  
  　　　　return dfd.promise;
  
  　}
  　　f1().then(f2).then(f3);
  
  