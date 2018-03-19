
// 1. es5的继承

// function father () {
//   this.speaking = function() {
//     console.log('father说话')
//   }
// }

// function son () {
//   this.speak = function() {
//     console.log('son说话')
//   }
// }
// son.prototype = new father()
// son.prototype.constructor = son

// var dali = new son()


// 2. es6的继承

class Father {
  speaking() {
    console.log('father说话')
  }
}

class Son extends Father {
  constructor() {
    super()
    this.a = 1 
  }
  speak = function() {
    console.log('son说话')
  }
}

var dali = new Son()