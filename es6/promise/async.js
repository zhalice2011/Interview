
import 'babel-polyfill'

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


const load = async function() {
  const result1 = await loadImg(src1)
  console.log('result1',result1)

  const result2 = await loadImg(src2)

  console.log('result2',result2)

}

