// 需求 把下面的数组变成表格 

let arr = [
  {
    name: '张三',
    age: '23',
    address: '北京'
  },
  {
    name: '李四',
    age: '24',
    address: '上海'
  },
  {
    name: '王五',
    age: '25',
    address: '广州'
  }
]

const app = document.getElementById('app')
const btn = document.getElementById('btn-change')

function createElement(vnode) {
  var tag = vnode.tag
  var attrs = vnode.attrs || {}
  var children = vnode.children || []
  if(!tag) {
    return null
  }
  // 创建元素
  var elem = document.createElement(tag)
  // 给该元素添加属性
  var attrName
  for (attrName in  attrs) {
    if(attrs.hasOwnProperty(attrName)) {
      // 给该元素添加属性
      elem.setAttribute(attrName, attrs[attrName])
    }
  }
  // 添加子元素 children
  children.forEach(function(childNode) {
    elem.appendChild(createElement(childNode))  //递归
  }) 

}
