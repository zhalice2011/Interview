const myPromise = require('./init-promise.js')


var a = new myPromise(function(resolve,reject) {
  resolve('haha1')

  reject('haha2')
})

a.then(function(data) {
  console.log('成功', data)
},function(data) {
  console.log('失败', data)
})

