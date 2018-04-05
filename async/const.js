
// const声明一个只读的常量。一旦声明，常量的值就不能改变。

const obj = {}

obj.name = 1

obj.name = 2

// obj = {
//   a: 'haha'
// }


console.log('obj', obj)


const str = 'string'

// str = '2'

console.log('str', str)

// console.log('global', global)
// console.log('process', process)
console.log('process', process.env)