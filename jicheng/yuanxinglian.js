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


function Dog(name, variety) {
  this.name = name
  this.variety = variety // variety : 种类
}

// 一、原型链继承

Dog.prototype = new Animal()
// Dog.prototype.constructor = Dog;

var dog1 = new Dog('阿黄', '中华田园犬')
// console.log(dog1) // Animal { name: '阿黄', variety: '中华田园犬' }
// console.log(dog1.feeling) // happy
// console.log(dog1.__proto__.constructor) // 此时是Animal

// 修改构造函数指向
Dog.prototype.constructor = Dog;
// console.log(dog1) // Dog { name: '阿黄', variety: '中华田园犬' }
// console.log(dog1.__proto__.constructor) // 此时是Dog

// 1.原型链继承存在两个问题：
  // a. 第一点是当被继承对象中包含引用类型的属性时，该属性会被所有实例对象共享，示例代码如下；
var dog2 = new Dog('小黑', '中华田园犬')
// console.log(dog2.obj) // { name: 'dali', city: 'haha' }
// console.log(dog2.colors) // [ 'red', 'blue', 'green' ]
dog1.obj.name = '阿黄'
dog1.colors[0] = '修改'
dog1.name = '阿黄2'
// console.log('比较name',dog1.name)  // 比较name 阿黄2
// console.log('比较name',dog2.name)  // 比较name 小黑
// console.log('比较obj',dog1.obj)    // 比较obj { name: '阿黄', city: 'haha' }
// console.log('比较obj',dog2.obj)    // 比较obj { name: '阿黄', city: 'haha' }
// console.log('比较colors',dog1.colors) // 比较colors [ '修改', 'blue', 'green' ]
// console.log('比较colors',dog2.colors) // 比较colors [ '修改', 'blue', 'green' ]
// 由上面的测试看出来 是引用类型的(Function Array Object)是共享的,也就是说你一个实例修改了这三个,其他实例也会被修改,但是基本类型不会(基本类型是 Srting Number null undefined Boolean)


  // b.第二点是不能在不影响所有实例对象的情况下，向父级构造函数传递参数
Dog.prototype = new Animal('哈哈')
var dog3 = new Dog('小绿', '中华田园犬')

console.log(dog3.Param) // 哈哈
var dog4 = new Dog('小紫', '中华田园犬')
console.log(dog4.Param) // 哈哈

