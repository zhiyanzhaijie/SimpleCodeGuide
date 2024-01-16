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
    let dicDom = document.createElement('div')
    dicDom.innerHTML = newAdd

    kitchenDom.appendChild(dicDom)
  })
}
