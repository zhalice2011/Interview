// 异步
function sleep(time) {
  let startTime = new Date()
  while (new Date() - startTime < time) {}
  console.log('1s over')
}
// 异步 先运行这个定时器
setTimeout(() => {
  console.log('setTimeout - 1')
  setTimeout(() => {
      console.log('setTimeout - 1 - 1')
      sleep(1000)
  })
  new Promise(resolve => resolve())
      .then(() => {
      console.log('setTimeout - 1 - then')
      new Promise(resolve => resolve()).then(() => {
          console.log('setTimeout - 1 - then - then')
      })
  })
  sleep(1000)
})

// 异步 然后运行这个定时器
setTimeout(() => {
  console.log('setTimeout - 2')
  setTimeout(() => {
      console.log('setTimeout - 2 - 1')
      sleep(1000)
  })
  new Promise(resolve => resolve()).then(() => {
      console.log('setTimeout - 2 - then')
      new Promise(resolve => resolve()).then(() => {
          console.log('setTimeout - 2 - then - then')
      })
  })
  sleep(1000)
})
process.nextTick(function() {
  console.log('nextTick')

})
console.log('同步任务')


/*
setTimeout - 1
testNode.js:5 1s over
testNode.js:16 setTimeout - 1 - then
testNode.js:18 setTimeout - 1 - then - then
testNode.js:26 setTimeout - 2
testNode.js:5 1s over
testNode.js:32 setTimeout - 2 - then
testNode.js:34 setTimeout - 2 - then - then
testNode.js:11 setTimeout - 1 - 1
testNode.js:5 1s over
testNode.js:28 setTimeout - 2 - 1
testNode.js:5 1s over

*/