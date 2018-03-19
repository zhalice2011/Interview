
$.ajax({
  url:'./data.json',
  success:function() {
    console.log('aa')
  }
})

setTimeout(() => {
  console.log('延迟 100')
},100)

setTimeout(() => {
  console.log('延迟 50')
},50)

setTimeout(() => {
  console.log('延迟 0')
})

console.log('11')