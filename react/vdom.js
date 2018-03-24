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

// 渲染函数
function render(arr) {
  var html = ''
  arr.map(item => {
    html +=`<div>
              <span>${item.name}</span>
              <span>${item.age}</span>
              <span>${item.address}</span>
            </div>`
  })
  $('#app').html(html)
}
render(arr)

// 修改信息
$('#btn-change').click(function(){
  arr[1].age = 30
  arr[2].address = '深圳'
  arr[2].name = '达理'
  render(arr)
})