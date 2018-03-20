
// 在循环中创建闭包：一个常见的错误


// 需求 input focus的时候 显示对应help中的内容

function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

// 解决的方法一 : 使用更多的闭包
function bind(itemHelp) {
  return function() {
    showHelp(itemHelp);
  }
}

function setupHelp() {
  console.log('1')
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  // for (let i = 0; i < helpText.length; i++) {
  //   var item = helpText[i];
  //   console.log('阿斯蒂芬')

  //   // ps 这个for循环会立即执行完毕，那么当onfocus触发时，
  //   // 在里面的function查找变量item，会在AO+scope中找，AO中没有，
  //   // scope中的变量i已经成为了helpText.length.  所以一直都是最后一个了
  //   // document.getElementById(item.id).onfocus = function() {
  //   //   showHelp(item.help);
  //   // }
  //   document.getElementById(item.id).onfocus = bind(item.help)
  // }

  // 解决的方法二 : 使用匿名闭包
    for (var i = 0; i < helpText.length; i++) {
      (function(){ // 使用匿名闭包保存当时的环境变量
        var item = helpText[i];
        document.getElementById(item.id).onfocus = function() {
          showHelp(item.help);
        }
      })()
    }


  // 解决的方法三 : var 换成 let  =>  let item = helpText[i];

}

setupHelp();