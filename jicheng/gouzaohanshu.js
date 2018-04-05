// 继承

function Animal(Param) {
  this.feeling = 'happy'
  this.colors = ['red', 'blue', 'green']
  this.obj = {
    name: 'dali',
    city: 'haha'
  }
  this.Param = Param
}
Animal.prototype.sayName = function() {
  console.log('this name is', this.feeling)
}


function Dog(name, variety) {
  Animal.call(this, arguments)
  this.name = name
  this.variety = variety // variety : 种类
}

// 二、构造函数继承(apply或者call方法改变构造函数作用域，将父函数的构造函数绑定到子对象上。虽然解决了子对象向父对象传递参数的目的，但是借助构造函数，方法都在构造函数中定义，函数的复用就无从谈起。)
      // 缺陷 无法继承Animal.prototype中定义的方法

var dog1 = new Dog('阿黄', '中华田园犬')
var dog2 = new Dog('阿黄2', '中华田园犬2')
console.log('dog1', dog1)
console.log('dog1.Param', dog1.Param)
console.log('dog2', dog2)
console.log('dog2.Param', dog2.Param)
// 测试实例属性修改
dog1.obj.name = 'sad'
console.log('dog1.obj', dog1.obj) // dog1.obj { name: 'sad', city: 'haha' }
console.log('dog2.obj', dog2.obj) // dog2.obj { name: 'dali', city: 'haha' }

// 测试 constructor 的指向
console.log('dog1.__proto__.constructor', dog1.__proto__.constructor) // 指向Dog
console.log('dog1.__proto__.constructor', dog2.__proto__.constructor) // 指向Dog


// 测试 能否继承Animal.prototype
dog1.sayName() //  dog1.sayName is not a function