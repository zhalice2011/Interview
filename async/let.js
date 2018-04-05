

var a = 1
function run() {
  let b =1
  var c = function() {
    console.log('b', b)
    console.log('a', a)
  }
  return c
}
run()()



function run2() {
  var dali =1
  let dali2 = 2
}
run2()
console.log(dali)
console.log(dali2)