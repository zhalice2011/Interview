
// schema 的封装

// 1.分享
function invokeShare(data,callback) {
  _invoke('share', data, callback)
}

// 2.登录
function invokeLogin(data,callback) {
  _invoke('login', data, callback)
}


// 3.扫一扫
function invokeScan(data,callback) {
  _invoke('login', data, callback)
}

// 暴露给全局
window.invoke = {
  share: invokeShare,
  login: invokeLogin,
  scan: invokeScan,
}

// 然后傻瓜式调用
window.invoke.share({title:'xxx',content:''}, function() {
  if (result.errno === 0) {
    alert('分享成功')
  } else {
    alert('分享失败')
  }
})