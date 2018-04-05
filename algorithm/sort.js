

// 排序算法

// 我一般是使用 arrayObject.sort(sortby)  sortby是传入的函数  arrayObject是要进行排序的数组对象

let arr = [1, 7, 100, 300, 5, 40, 8]


// 1. 冒泡排序
function bubblingSort(arr) {
  let length = arr.length;
  for(let i = 0; i < length; i++) { // 遍历arr
    for (let j = 0; j < length -1 - i; j++) { // 再次遍历为什么要减i 因为后面第i个元素已经确定了
      if (arr[j] >  arr[j+1]) { // 相邻的两个元素对比 若是前面大于后面的
        var temp = arr[j+1]
        arr[j+1] = arr[j] // 两个元素交换位置
        arr[j] = temp  // 两个元素交换位置
      }  
    }
  }
}

// 2. 快速排序  时间复杂度上表现最稳定的排序算法之一，因为无论什么数据进去都是O(n²)的时间 用到它的时候,数据规模越小越好

function fastSort() {

}


// 3. 递归