

let str = 'hello dali'
let strArr = [...str]  // [ 'h', 'e', 'l', 'l', 'o', ' ', 'd', 'a', 'l', 'i' ]
let strReverse = [...str].reverse() // [ 'i', 'l', 'a', 'd', ' ', 'o', 'l', 'l', 'e', 'h' ]
let strFinal = strReverse.join('') // ilad olleh
