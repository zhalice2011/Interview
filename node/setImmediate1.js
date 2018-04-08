setImmediate(function () {
  console.log(1);
}, 0);
setTimeout(function () {
  console.log(2);
}, 0); 
// 浏览器环境运行结果 // 1 // 2 
// Nodejs环境运行结果是不确定的 有时候是1 2 有时候是2 1