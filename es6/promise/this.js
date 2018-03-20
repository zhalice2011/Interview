
function fn() {
  console.log('real', this)  // real { a: 100 }

  var arr = [1]
  // arr.map(function(item){
  //   console.log(this) // 打印出来的是 window
  // })
  arr.map(item => {
    console.log(this)  // 打印出来的是 { a: 100 }
  })
}
fn.call({a:100})