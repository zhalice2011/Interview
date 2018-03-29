
// var s = 'hello'

// function printName(name) {
//   console.log(s + name)
// }
// printName('达理')


'use strict';

var s = 'Hello';

function greet(name) {
    console.log(s + ', ' + name + '!');
}

//下面这句代码暂时先不用管
module.exports = greet;