// 需求: 对数组进行求和

const arr = [1, 2, 3, 10, 9]

// foreach实现
let sumForeach = 0;
arr.forEach(function(value) {
  sumForeach +=value 
})

console.log('foreach实现', sumForeach)


// map实现
let sumMap = 0
arr.map(value => {
  sumMap += value
})

console.log('map实现', sumMap)

// reduce实现   previous:前一个值   current: 现在的值
let reduceMap = arr.reduce(function(previous,current) {
  return previous + current
})

console.log('reduce实现', reduceMap)

