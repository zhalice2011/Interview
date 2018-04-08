// JS中的算法与数据结构——集合(Set)

  // 1. set 的表示方法 {1, 2, 4} 
  // 2. set是无序的

let arr = [1,2,3,4,5,6,2,4,6]

// 一行代码实现数组去重   ...扩展运算符: 它用于把一个数组转化为用逗号分隔的参数序列，
let setKuozhan = [...new Set(arr)]
// 一行代码实现数组去重   Array.from: 可以把类似数组的对象转换为数组
let arrayFrom = Array.from(new Set(arr))


console.log('setKuozhan',setKuozhan)
console.log('arrayFrom',arrayFrom)


// ES5实现数组去重
var array = [1, '1', 1, 2, 3, 2, 4];
var tmpObj = {};
var result = [];
array.forEach(function(a) {
  var key = (typeof a) + a;
  if (!tmpObj[key]) {
    tmpObj[key] = true;
    result.push(a);
  }
});
console.log(result);
// => [1, "1", 2, 3, 4]


// Map：是一组键值对的结构，具有极快的查找速度。通过传入数组的数组来建立。通过调用 .set(key,value) 来添加新的元素。
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
m.set('Adam', 67); // 添加新的key-value


// Map和Set的区别是什么setImmediate