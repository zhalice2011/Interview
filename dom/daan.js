// 还原题目真实DOM结构
var list = document.getElementById('list')
void function () {
  var html = ''
  for (var i = 0; i <= 10000; i++) {
  if (i === 1) {
    html += '<li><span>#1</span></li>'
  } else if (i === 4) {
    html += '<li><ul><li>#4</li></ul></li>'
  } else if (i === 9998) {
    html += '<li><a href="//v2ex.com">#9998</a></li>'
  } else {
    html += '<li>#' + i + '</li>'
  }
  }
  list.innerHTML = html
}()

// or, list.className += ' bar'
list.classList.add('bar')

var li10 = document.querySelector('#list > li:nth-of-type(10)')
li10.parentNode.removeChild(li10)

var newItem = document.createElement('LI')
var textNode = document.createTextNode('<v2ex.com />')
newItem.appendChild(textNode)

// index for css nth-of-type is 1-based
var li501 = document.querySelector('#list > li:nth-of-type(501)')
list.insertBefore(newItem, li501)

list.addEventListener('click', function (e) {
  var target = e.target || e.srcElement
  if (target.id === 'list') {
  alert('你点到最外层的ul上了，叫我怎么判断？')
  return
  }
  while (target.nodeName !== 'LI') {
  target = target.parentNode
  }

  var parentUl = target.parentNode
  var children = parentUl.childNodes
  var count = 0
  for (var i = 0, len = children.length; i < len; i++) {
  var node = children[i]
  if (node.nodeName === 'LI') {
    count++
  }
  if (node === target) {
    alert('是当前第' + count + '项')
    break
  }
  }
}, false)

// PS: if querySelector method is not available, the following can be changed.
var li10 = document.querySelector('#list > li:nth-of-type(10)')
var li501 = document.querySelector('#list > li:nth-of-type(501)')

// As below:
function getLiByIndex (index /* 0-based index */) {
  var count = -1
  for (var i = 0, len = list.childNodes.length; i < len; i++) {
  if (list.childNodes[i].nodeName === 'LI') {
    count++
    if (count === index) {
    return list.childNodes[i]
    }
  }
  }
}
var li10 = getLiByIndex(9)
var li501 = getLiByIndex(500)