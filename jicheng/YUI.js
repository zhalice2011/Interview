// 继承

// function Animal(name) {
//   this.name = name
//   this.feeling = 'happy'
//   this.colors = ['red', 'blue', 'green']
//   this.obj = {
//     name: 'dali',
//     city: 'haha'
//   }
// }
// Animal.prototype.sayName = function() {
//   console.log('this name is', this.name)
// }

function Animal() {}

Animal.prototype.feeling = 'happy';
Animal.prototype.obj =  {
  name: 'dali',
  city: 'haha'
}

function extend(Child, Parent) {
  var F = function(){};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

extend(Dog, Animal);

var dog = new Dog('二狗', '哈士奇');

console.log('dog.obj', dog.obj)

// 四、YUI式继承 避免了实例对象的prototype指向同一个对象的缺点（Dog.prototype包含一内部指针指向Animal.prototype，同时Dog的所有实例也都包含一内部指针指向Dog.prototype，那么任何对Dog实例上继承自Animal的属性或方法的修改，都会反映到Dog.prototype）。让Dog跳过Animal，直接继承Animal.prototype，这样省去执行和创建Animal实例，提高了效率。利用一个空对象作为媒介，空对象几乎不占用内存，示例如下：



