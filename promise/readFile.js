let readFile = require('fs').readFile; // 异步读取文件的api

// 读取文件的方法
function getFile(url) {
  return new Promise(function(resolve, reject){
    readFile(url, 'utf8', function(err,data) {
      resolve(data)
    })
  })
}

// 使用.then的方法进行链式调用
getFile('./file/1.txt').then(function(data){
  console.log('data',data) // 打印出来1.txt
  return getFile('./file/2.txt')  // 请求第二个文件 返回一个promise
}).then(function(data) {
  console.log('data',data)
  return getFile('./file/3.txt')  // 请求第三个个文件 返回一个promise
}).then(function(data) {
  console.log('data',data)
})
