
// js中各种类型的变量在if条件中是true还是false

// 1. String:
let a = ''  // 返回false
    a = 'a' // 返回true 
    a = '0' // 返回true
// 2. Number:
    a = 0  // 返回false
    a = 1  // 返回true
    a = -1 // 返回true
// 3. undefined:
    a = undefined  // 返回false
// 4. null:
    a = null  // 返回true
// 5. Object -> object:
    a = {}  // 返回true
    a = {name:'1'}  // 返回true
// 5. Object -> Array:
    a = []    // 返回true
    a = [1,2] // 返回true
// 5. Object -> Function:
    a = function run() {}



if (a) {
  console.log('true')
} else {
  console.log('false')
}


// 总结 3种返回false   
  // 空字符串:''
  // 0
  // undefined





  // 另外 字符串类型“123”能转换为数值类型123，所以123==“123”表现为真（true）；
