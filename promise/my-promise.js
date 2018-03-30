
  // Promise是一个需要接受一个执行器的构造函数，执行器提供两个方法，内部有状态机制，原型链上有then方法。


  function MyPromise(fuc) { // fuc是传入的函数
    let _this = this // 先缓存this以免后面指针混乱
    _this.status = 'pendding' // 状态 : 默认为初始
    _this.resolveData = undefined // resolve要传递的数据
    _this.rejectData = undefined // 失败要传递的数据

    // 成功调用的方法 传入一个数据
    _this.resolve = function(data) {
      if (_this.status == 'pendding') { // 只有pendding态才能转化成其他的态
        _this.status == 'fuillied'
        _this.resolveData = data//保存成功时传进来的数据
      }
    }
    _this.reject = function(data) {
      if (_this.status == 'pendding') { // 只有pendding态才能转化成其他的态
        _this.status == 'rejected'
        _this.rejectData = data // 保存成功时传进来的数据
      }
    }
  }

  // 在原型对象上加上then方法
  MyPromise.prototype.then = function(fun1,func2) {  // 传入2个函数
    let _this = this
    // 对状态进行判断

    if(_this.status == 'fuillied') { // 成功运行第一个
      fun1(_this.resolveData)
    } else { // 失败运行第二个
      if(func2)  {
        func2(_this.rejectData)
      }
    }
  }

  let a = new MyPromise(function(resolve,reject) {
    resolve('hah213213')
  })

  a.then(function(data) {
    console.log('成功 resolve = ', data)
  },function(data) {
    console.log('失败 reject = ', data)
  })