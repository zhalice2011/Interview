

const result = new Promise(function(resolve, reject) {
  setTimeout(function(){
    let num = Math.floor(Math.random()*10); // 0 - 9 的随机数
    if (num > 5) {
      resolve(num)
    } else {
      reject(num)
    }
  },1000)

})


result.then(function(data) {
  console.log("成功 data = ", data)
  return data // 每一个then方法都会返回一个新的Promise实例（不是原来那个），让then方法支持链式调用，并可以通过返回值将参数传递给下一个then
},function(data) {
  console.log("失败 data = ", data)
  return data
}).then(function(data) {
  console.log("成功2 data = ", data)
},function(data) {
  console.log("失败2 data = ", data)
})


// Promise.all api

let Promise1 = new Promise(function(resolve,reject){})
let Promise2 = new Promise(function(resolve,reject){})
let Promise3 = new Promise(function(resolve,reject){})

let all = new Promise.all(Promise1, Promise2, Promise3)

all.then(function(){
  // 三个都成功则成功  
}, function(){
  // 只要有失败，则失败 
})