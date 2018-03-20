

// 原始

// 加载图片的函数 src:资源路径  callback:成功执行的函数  fail:失败执行的函数
function loadImg(src, callback, fail) {
  var img = document.createElement('img')
  img.onload = function() {
    callback(img)
  }
  img.onerror = function() {
    fail()
  }
  img.src = src
}

var  src = 'https://a.wattpad.com/cover/14722147-352-k153789.jpg'

loadImg(src, function(img) {
  console.log('图片的宽度loadImg' + img.width)
},function() {
  console.log('图片加载失败')
})


// promise的改造
function loadImgPromise(src) {
  // new Promise 是promise的一个实例
  const promise = new Promise(function(resolve,reject){
    var img = document.createElement('img')
    img.onload = function() {
      resolve(img)
    }
    img.onerror = function() {
      reject()
    }
    img.src = src
  })
  return promise
}

const result = loadImgPromise(src)
result.then(function(img) {
  console.log('图片的宽度loadImgPromise' + img.width)
},function(){
  console.log('图片加载失败')  
})