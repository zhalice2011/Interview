// Promise是一个需要接受一个执行器的构造函数，执行器提供两个方法，内部有状态机制，原型链上有then方法。


function MyPromise(executor) { // fuc是传入的函数
  let _this = this // 先缓存this以免后面指针混乱
  _this.status = 'pending' // 状态 : 默认为初始
  _this.resolveData = undefined // resolve要传递的数据
  _this.rejectData = undefined // 失败要传递的数据

  // 实现异步 因为 实例被new时，执行器中的代码会立即执行，但setTimeout中的代码将稍后执行
  _this.onResolvedCallbacks = []; // 存放then成功的回调
  _this.onRejectedCallbacks = []; // 存放then失败的回调

  function resolve(value) { // 内置一个resolve方法，接收成功状态数据
    console.log("传入的value", value)
    // 上面说了，只有pending可以转为其他状态，所以这里要判断一下
    if (_this.status === 'pending') {
      _this.status = 'resolved' // 当调用resolve时要将状态改为成功态
      _this.resolveData = value // 保存成功时传进来的数据
      // 执行数组中存放方法
      _this.onResolvedCallbacks.forEach(function(fn) {
        fn()
      })
    }
  }

  function reject(reason) { // 内置一个reject方法，失败状态时接收原因
    if (_this.status === 'pending') { // 和resolve同理
      _this.status = 'rejected' // 转为失败态
      _this.rejectData = reason // 保存失败原因
      // 执行数组中存放方法
      _this.onRejectedCallbacks.forEach(function(fn) {
        fn()
      })
    }
  }

  // 执行传入的函数
  try{
      executor(resolve, reject)        
  }catch(e){ // 如果捕获发生异常，直接调失败，并把参数传进去
      reject(e)
  }
}

// onFulfilled 成功执行的方法   onRjected 失败时执行的方法
MyPromise.prototype.then = function (onFulfilled, onRjected) {
  let _this = this; // 依然缓存this
  if(_this.status === 'pending'){
    // 每一次then时，如果是等待态，就把回调函数push进数组中，什么时候改变状态什么时候再执行
    _this.onResolvedCallbacks.push(function(){ // 这里用一个函数包起来，是为了后面加入新的逻辑进去
        onFulfilled(_this.resolveData)
    })
    _this.onRejectedCallbacks.push(function(){ // 同理
        onRjected(_this.rejectData)
    })
  }

  console.log("_this.status===", _this.status)
  if (_this.status === 'resolved') { // 判断当前Promise的状态
    onFulfilled(_this.resolveData) // 如果是成功态，当然是要执行用户传递的成功回调，并把数据传进去
  }
  if (_this.status === 'rejected') { // 同理
    onRjected(_this.rejectData)
  }
  // return _this
}


// 成功 test
let a = new MyPromise(function (resolve, reject) {
  setTimeout(function(){
    resolve(100)  
  }, 1000)
})

a.then(function (data) {
  console.log('成功 resolve = ', data)
  return '周达理'
}, function (data) {
  console.log('失败 reject = ', data)
}).then(function(haha) {
  console.log('成功 resolve2 = ', haha)
})