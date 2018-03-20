


// es5 构造函数
function Animal (x,y) {
  this.x = x
  this.y = y
}

Animal.prototype.speak = function() {
  console.log('Animal1 汪汪汪')
  return this.x + this.y
} 

var es5 = new Animal(1,2)

console.log(es5.x)
console.log(es5.y)
console.log(es5.speak())

// es6 class语法糖
class Animal2 {
  constructor(x,y) {
    this.x = x
    this.y = y
  }
  speak() {
    console.log('Animal2 汪汪汪')
    return this.x + this.y
  }
}
const class2 = new Animal2(5,6)

console.log(class2.x)
console.log(class2.y)
console.log(class2.speak())