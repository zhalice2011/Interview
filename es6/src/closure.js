

//Q: JS 实现一个闭包函数,每次调用都自增1;

const selfAdd = (function selfAddFuc() {
  let initial = 0
  function add () {
    initial += 1
    console.log('此时的initial = ', initial)
  }
  return  add
})();


console.log('a',selfAdd());
console.log('a',selfAdd());
console.log('a',selfAdd());



// const addSelf = (function(){
//   let initial = 0
//   return function() {
//     initial ++
//     return initial
//   }
// })()

// console.log('haha',addSelf())
// console.log('haha',addSelf())
// console.log('haha',addSelf())


['1','2','3'].map(parseInt) 