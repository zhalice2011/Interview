
// set类似于数组 但是set里面的数据是唯一的  map类似于对象

// const arr = [1, 2, 2, 3]

// const set = new Set([1, 2, 2, 3]);
// [...set];

// 方法一 : set

const arr = [1,2,3,4,5,5,5,2,NaN,NaN,undefined,undefined,null,null]

const newarr = [...new Set(arr)]

console.log(newarr)

const dian = [...newarr]
console.log('dian', dian)


// 方法二 : indexOf 
    // 原理: 返回检索的字符串在 如果要检索的字符串值没有出现，则该方法返回 -1。
    // 缺点: 无法分辨NaN

const RemoveDuplicates = (arr) => {
  let newarr = []
  for (let i = 0; i < arr.length; i++) {
    if (newarr.indexOf(arr[i]) == -1) { // 没有出现
      newarr.push(arr[i])
    }
  }
  return newarr
}
console.log('RemoveDuplicates',RemoveDuplicates(arr))  // [1, 2, 3, 4, 5, NaN, NaN, undefined, null]

// 方法三 : 对象 
    // 原理:对象不能添加相同属性名
    // 缺点:这个方法会将 number,NaN,undefined,null，变为字符串形式

const RemoveDuplicatesObj = (arr) => {
  var obj = {}
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i
  }
  return Object.keys(obj)
}

console.log('RemoveDuplicatesObj',RemoveDuplicatesObj(arr)) 
// ["1", "2", "3", "4", "5", "NaN", "undefined", "null"]
