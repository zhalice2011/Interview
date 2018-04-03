// 需求:  对下面的数组进行去重

let arr = [1, 2, 3, 4, 4, 5, 5, 5 ,5]

// 1. Set + Array.from()  
//  Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用
//  Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例

let setNewArr = Array.from(new Set(arr))

console.log('Array.from+Set对数组去重的结果', setNewArr)

// 2.  …[拓展运算符] + Set

let setArr = [...new Set(arr)]

console.log('拓展运算符+Set对数组去重的结果', setNewArr)



// 3. indexOf的方法

function indexOfUniq(arr) {
  let newArr = []
  arr.forEach(value => {
    if (newArr.indexOf(value) === -1) {
      newArr.push(value)
    }
  });
  return newArr
}

let indexOfUniqArr = indexOfUniq(arr)

console.log('indexOf对数组去重的结果', indexOfUniqArr)


// 4. indexOf的方法
