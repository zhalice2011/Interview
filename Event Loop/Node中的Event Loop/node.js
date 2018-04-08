/*node环境
js执行为单线程，所有代码皆在主线程调用栈完成执行。当主线程任务清空后才会去轮询取任务队列中任务。
循环阶段
在node中事件每一轮循环按照顺序分为6个阶段，来自libuv的实现：

timers：执行满足条件的setTimeout、setInterval回调。
I/O callbacks：是否有已完成的I/O操作的回调函数，来自上一轮的poll残留。
idle，prepare：可忽略
poll：等待还没完成的I/O事件，会因timers和超时时间等结束等待。
check：执行setImmediate的回调。
close callbacks：关闭所有的closing handles，一些onclose事件。

执行机制
几个队列
除上述循环阶段中的任务类型，我们还剩下浏览器和node共有的microtask和node独有的process.nextTick，我们称之为Microtask Queue和NextTick Queue。
我们把循环中的几个阶段的执行队列也分别称为Timers Queue、I/O Queue、Check Queue、Close Queue。
循环之前
在进入第一次循环之前，会先进行如下操作：

同步任务
发出异步请求
规划定时器生效的时间
执行process.nextTick()

开始循环
按照我们的循环的6个阶段依次执行，每次拿出当前阶段中的全部任务执行，清空NextTick Queue，清空Microtask Queue。再执行下一阶段，全部6个阶段执行完毕后，进入下轮循环。即：

清空当前循环内的Timers Queue，清空NextTick Queue，清空Microtask Queue。
清空当前循环内的I/O Queue，清空NextTick Queue，清空Microtask Queue。
清空当前循环内的Check Queu，清空NextTick Queue，清空Microtask Queue。
清空当前循环内的Close Queu，清空NextTick Queue，清空Microtask Queue。
进入下轮循环。

可以看出，nextTick优先级比promise等microtask高。setTimeout和setInterval优先级比setImmediate高。
注意

如果在timers阶段执行时创建了setImmediate则会在此轮循环的check阶段执行，如果在timers阶段创建了setTimeout，由于timers已取出完毕，则会进入下轮循环，check阶段创建timers任务同理。
setTimeout优先级比setImmediate高，但是由于setTimeout(fn,0)的真正延迟不可能完全为0秒，可能出现先创建的setTimeout(fn,0)而比setImmediate的回调后执行的情况。
*/


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


// 达理的答案


// 1.开始阶段 -- >同步任务 ->  发出异步请求 -> 规划定时器生效的时间 -> 执行 process.nextTick()

// 同步任务
// nextTick


// 2.循环阶段  Timers Queue(setTimeout、setInterval回调) => I/O (fs的回调) => Check(setImmediate)  =>Close (closing handles)
// 注意 每一个阶段的中间都穿插(中间穿插process.nextTick() 和 promise.then  ) 

// console.log('setTimeout - 1')
// 1s over
// console.log('setTimeout - 2')
// 1s over

// console.log('setTimeout - 1 - then')
// console.log('setTimeout - 2 - then')

// console.log('setTimeout - 1 - 1')
// 1s over
// console.log('setTimeout - 2 - 1')
// 1s over


// console.log('setTimeout - 1 - then - then')
// console.log('setTimeout - 2 - then - then')



// 实际测试的答案  我吧resolve放在下一轮了 实际上resilve会

/*
nextTick
setTimeout - 1
1s over
setTimeout - 2
1s over
setTimeout - 1 - then
setTimeout - 2 - then
setTimeout - 1 - then - then
setTimeout - 2 - then - then
setTimeout - 1 - 1
1s over
setTimeout - 2 - 1
1s over
*/