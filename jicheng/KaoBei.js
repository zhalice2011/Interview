

// 目前jquery使用的继承方式。

function Animal() {}
Animal.prototype.feeling = 'happy';

function deepCopy(Child, Parent) {
  var p = Parent.prototype;
  var c = Child.prototype;
  for (var i in p) {
      if (typeof p[i] === 'object') {
          c[i] = (p[i].constructor === Array) ? [] : {};
          deepCopy(p[i], c[i]);
      } else {
          c[i] = p[i];
      }
  }
}

deepCopy(Dog, Animal);
 
var dog = new Dog('二狗', '哈士奇');
console.log(dog.feeling); // happy