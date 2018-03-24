
const list = $('#ul-list')
const btn = $('#btn')
const text = $('#text-title')

btn.click(function() {
  var title = text.val()
  if(!title) {
    return  // 如果是空字符串就返回
  }
  var $li = $('<li>'+title+'</li>')
  
  list.append($li)
})