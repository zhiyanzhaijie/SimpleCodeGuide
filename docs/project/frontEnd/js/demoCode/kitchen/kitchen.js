window.onload = () => {
  const kitchenDom = document.querySelector('.kitchen')
  const addInputDom = document.querySelector('#addInput')
  const addButtonDom = document.querySelector('#addButton')


  let newAdd = ''

  // 绑定事件
  addInputDom.addEventListener('input', (e) => {
    newAdd = e.target.value
  })
  
  addButtonDom.addEventListener('click', () => {
    // 以newAdd创建dom，并塞入kitchhenDom中
    switch (newAdd) {
      case "西瓜":
      case "香蕉":
      case "橘子":
        addInputDom.value = ""
        break;
      default:
        addInputDom.value = ""
        alert("看不懂中文是吧")
        return 
    }

    // 按照newAdd的不同进行对应生成
    let dicDom = document.createElement('div')
    dicDom.innerHTML = newAdd
    dicDom.className = getClassName(newAdd)


    // 给dicDom添加事件 -- 双击清除
    dicDom.addEventListener('dblclick', () => {
      kitchenDom.removeChild(dicDom)
    })

    // 把这个植入了自杀程序的水果放入kitchen中
    kitchenDom.appendChild(dicDom)
  })
}


function getClassName(key) {
  
  switch (key) {
    case "西瓜":
      return "watermelon"
    case "橘子":
      return "orange"
    case "香蕉":
      return "banana"
    default: 
      return ""
  }
}
