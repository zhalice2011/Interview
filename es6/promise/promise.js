function loadImg(src) {
  var promise = new Promise(function (resolve, reject) {
    var img = document.createElement('img');
    //throw new Error('自定义错误')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}

var url = 'https://ws1.sinaimg.cn/large/0075tcR2gy1fpjjcdb9xxj30rs0kuq6c.jpg'
var url2 = 'https://wx4.sinaimg.cn/mw690/006rTqBily1fpjfrlqgclg308107gnph.gif3454235'
var result = loadImg(url)
var result2 = loadImg(url2)
result
  .then(function (img) {
    console.log('第一个图片加载完成 img.width = ', img.width)
    return result2   //
  })
  .then(function (img) {
    console.log('第一个图片加载完成 img.width = ', img.width)
  })
  .catch(function(ex) {
    console.log(ex)
  })
