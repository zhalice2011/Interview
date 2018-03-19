

// es5的继承和es6的继承的区别

class Animal {
  constructor(x,y,name) {
    this.x = x
    this.y = y
    this.name = name
  }
  eat() {
    console.log('我的长 = ' + this.x)
    console.log('我的宽 = ' + this.y)
    console.log('我的名字 = ' + this.name)
  }
}

class Dog extends Animal {
  constructor(x,y,name) {
    super(x,y,name)
  }
  speak () {
    console.log(this.name + ' 汪汪汪')
  }
}

var tugou = new Dog(1, 5, '阿黄')

tugou.speak()
tugou.eat()


// babel编译之后
// es5的继承和es6的继承的区别

var Animal = function () {
  function Animal(x, y, name) {
    _classCallCheck(this, Animal);

    this.x = x;
    this.y = y;
    this.name = name;
  }

  _createClass(Animal, [{
    key: 'eat',
    value: function eat() {
      console.log('我的长 = ' + this.x);
      console.log('我的宽 = ' + this.y);
      console.log('我的名字 = ' + this.name);
    }
  }]);

  return Animal;
}();

var Dog = function (_Animal) {
  _inherits(Dog, _Animal);

  function Dog(x, y, name) {
    _classCallCheck(this, Dog);

    return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, x, y, name));
  }

  _createClass(Dog, [{
    key: 'speak',
    value: function speak() {
      console.log(this.name + ' 汪汪汪');
    }
  }]);

  return Dog;
}(Animal);

var tugou = new Dog(1, 5, '阿黄');

tugou.speak();
tugou.eat();