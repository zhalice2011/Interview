


// 1. 浅拷贝 (内存指向没变)

obj = {
  name: 'dali',
  city: '北京',
  obj: {
    name: 'haha'
  }
}
obj2 = {
  name: undefined,
  city: '北京2'
}

// let objCopy = obj
// objCopy.name = 1
// console.log(obj)

// 2.深拷贝 Object.assign()
let objDeepCopy = Object.assign({},obj)
console.log("obj最初", obj) // obj最初 { name: 'dali', city: '北京' }
console.log("objDeepCopy改变前", objDeepCopy)  // objDeepCopy改变前 { name: 'dali', city: '北京' }
objDeepCopy.name = 'dasi'
objDeepCopy.city = '深圳'
console.log("objDeepCopy改变后", objDeepCopy) // objDeepCopy改变后 { name: 'dasi', city: '深圳' }

console.log("obj最终", obj) // obj最终 { name: 'dali', city: '北京' }

let objDeepCopy2 = Object.assign(obj,obj2)

console.log("objDeepCopy2", objDeepCopy2) // 对象合并 如果有2个相同的值 对象合并是以后面的值为准的


// 3.判断是否有这个属性

let hasOwnProperty = objDeepCopy2.hasOwnProperty('name')
let hasOwnProperty2 = objDeepCopy2.hasOwnProperty('name2')
console.log('hasOwnProperty', hasOwnProperty)  // 有此属性 返回true
console.log('hasOwnProperty2', hasOwnProperty2) // 无此属性 返回false



// 4.深拷贝中的浅拷贝  Object.assign() 内嵌对象的值会被改变
let objDeepCopy3 = Object.assign({},obj)
console.log("obj最初", obj) //  { name: undefined, city: '北京2', obj: { name: 'haha' } }
objDeepCopy3.obj.name = '测试'
console.log("objDeepCopy3", objDeepCopy3) // obj最终 { name: 'dali', city: '北京' }
console.log("obj最终", obj) // obj最终 { name: undefined, city: '北京2', obj: { name: '测试' } }



// if 后面跟一些值 你判断是false 还是 true 比如是空字符串  null  undefined  {}  [] 0 





