
let obj = {}
let _name = 'zhangsan'
Object.defineProperty(obj,'name',
  // 获取
  {
    get: function() {
      console.log('你正在获取这个对象的属性')
      return _name
    },
    // 设置
    set: function(newVal) {
      console.log('你正在设置这个对象的属性', newVal)
      _name = newVal
    }

});
