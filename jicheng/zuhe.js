// 继承

function Animal(name) {
  this.name = name
  this.feeling = 'happy'
  this.colors = ['red', 'blue', 'green']
  this.obj = {
    name: 'dali',
    city: 'haha'
  }
}
Animal.prototype.sayName = function() {
  console.log('this name is', this.name)
}

// 三、组合继承 (利用构造函数实现对实例属性的继承，使用原型链完成对原型属性和方法的继承，避免了原型链和构造函数的缺陷。)


function Dog(name, variety) {
  // 1. 继承属性
  Animal.call(this, name)
  this.name = name
  this.variety = variety // variety : 种类
}
// 2. 继承prototype上面的方法 
Dog.prototype = Animal.prototype
// 3. 修改constructor的指向
Dog.prototype.constructor = Dog

// 测试是否会修改属性
var dog1 = new Dog('阿黄', '中华田园犬')
console.log('dog1', dog1)
dog1.sayName()
dog1.colors[1] = 0

var dog2 = new Dog('阿黄2', '中华田园犬2')

dog2.obj.name = 'test'

console.log('dog1', dog1)

console.log('dog2', dog2)
