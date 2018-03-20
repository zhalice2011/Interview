



//es5 继承

// 动物
function Animal () {
  this.eat = function() {
    console.log('Animal eating')
  }
}

// 狗
function Dog () {
  this.bark = function(){
    console.log('汪汪汪')
  }
}
Dog.prototype = new Animal()

// 土狗
var hashiqi = new Dog()
hashiqi.eat()

//class 的继承
class Animal2 {
  constructor (name) {
    this.name = name
  }
  eat () {
    console.log(`${this.name} eating`)    
  }
}
class Dog2 extends Animal2 {
  constructor (name) {
    super(name)   //super的意思是 执行父级的constructor
    this.name = name
  }
  bark () {
    console.log(`${this.name} 汪汪汪`)    
  }
}
// 土狗
const tugou = new Dog2('土狗')

tugou.eat()
tugou.bark()