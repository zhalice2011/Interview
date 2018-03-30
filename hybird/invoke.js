// 先写我们中间的这一层

(function (window, undefined) {

  // 调用schema的封装
  function _invoke(action, data, callback) {
    // 拼装 schema 协议
    var shema = 'myapp://utils/' + action
    
    // 拼接参数
    schema += '?a=a'
    var key
    for (key in data) {
      if (data.hasOwnProperty(key)) {
        schema += '&' + key + data[key]
      }
    }

    // 处理callback
    var  callbackName = ''
    if( typeof(callback) === 'string') {
      callbackName = callback
    } else {
      callbackName = action + Date.now()
      windowp[callbackName] = callback
    }
    schema += 'callback='+callbackName
  }

  // 暴露到全局变量
  window.invoke = {
    share: function(data, callback) {
      _invoke('share', data, callback)
    },
    scan: function(data, callback) {
      _invoke('scan', data, callback)
    },
    login: function() {
      _invoke('login', data, callback)
    }
  }
})(window)