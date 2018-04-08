console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(function() {
  console.log('promise1');
}).then(function() {
  console.log('promise2');
});

console.log('script end');


// 依次打印

/*
script start

script end
console.log('promise1');
console.log('promise2');

console.log('setTimeout');
*/



// 依次打印

/*
console.log('script start');
console.log('promise1');
console.log('promise2');

console.log('setTimeout');

*/