

var obj = {
  a: 100,
  b: 200
}
for (var item in obj) {
  console.log(item)
}
console.log(item)

for (let _item in obj) {
  console.log(_item)
}
console.log(_item)


//es6 的默认值


function run(a, b) {
  if(b == null) {
    b =0
  }
}

function run(a, b = 0) {

}



var arr = [1,2,3]
arr.map(function(item) {
  console.log(this)
  console.log(item)
})
arr.map(item => {
  console.log(this)
  
  console.log(item)
})