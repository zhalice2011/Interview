
// 我们需要关心的东西是什么呢

// var vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       name: 'dali'
//     }
//   }
// })


// 模拟实现

var vm = {}
var data = {
  name: 'dali',
  age: '11'
}
var key, value
// 遍历data
for (key in data) {
  // 自运行函数形成闭包 保留key的独立作用域
  (function(key){
    Object.defineProperty(vm, key, {
      get: function() {
        console.log('获取')
        return data[key]
      },
      set: function(newVal) {
        console.log('设置')
        data[key] = newVal
      }
    })
  })(key)
}


