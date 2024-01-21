window.onload = () => {
  
  // 1.同时实现餐厅和厨房

  // ui层
  const addInptDom = document.querySelector('#addInpt')
  const addBtnDom = document.querySelector('#addBtn')


  const diningDom = document.querySelector('.dining')
  const kitchenDom = document.querySelector('.kitchen')
  const todoLstDom = document.querySelector('.todo')
  const doneLstDom = document.querySelector('.done')

  const toDiningDom = document.querySelector('#toDining')
  const toKitchenDom = document.querySelector('#toKitchen')


  // 数据层
  const meals = [
    {
      name: '蒜炒排骨',
      isDone: false
    },
    {
      name: 'meal2',
      isDone: true,
    }
  ]

  let nextMealName = ''

  // ui层的事件监听

  // 点菜的相关事件
  addInptDom.addEventListener('input', (e) => {
    nextMealName = e.target.value
  })
  addBtnDom.addEventListener('click', () => {
    // 判空操作
    if (!nextMealName) {
      alert('菜名不能为空')
      return
    }

    let newMeal = {
      name: nextMealName,
      isDone: false
    }
    // 数据更新
    meals.push(newMeal)
    addInptDom.value = ''
    nextMealName = addInptDom.value
    // ui更新
    mealsRender()
  })

  // meals的渲染事件 - 根据meal去渲染两个区域的内容
  mealsRender()
  function mealsRender() {
    todoLstDom.innerHTML = null 
    doneLstDom.innerHTML = null
    meals.forEach((meal) => {
      // 根据meal创建liDom
      const { name, isDone } = meal
      // 渲染出一个dom内容
      const liDom = document.createElement('li')
      const checkDom = document.createElement('input')
      checkDom.type = 'checkbox'
      checkDom.checked = isDone

      // 给checkDom添加事件监听
      checkDom.addEventListener('click', () => {
        // 数据更新 
        meal.isDone = !meal.isDone

        // ui更新
        mealsRender()
      })


      const spanDom = document.createElement('span')
      spanDom.innerText = name

      
      liDom.appendChild(checkDom)
      liDom.appendChild(spanDom)   

      // 根据isDone的不同, 把创建的liDom插入不同的区域 
      if (!isDone) {
        todoLstDom.appendChild(liDom)
      } else {
        doneLstDom.appendChild(liDom)
      }
    })
  }


  // 2.根据路由url 选择装载餐厅厨房
  
  // 拿到url里的page

  let page = getUrlPage()
  function getUrlPage() {

    let search = window.location.search
    if (!search) {
      return 'dining'
    }
    let searchArr = search.split('=')

    return searchArr[1]
  }

  // 根据page渲染 dining or kitchen
  renderPage(page)

  function renderPage(page) {
    switch (page) {
      case 'dining':
        diningDom.style.display = 'flex'
        kitchenDom.style.display = 'none'
        break;
      case 'kitchen':
        kitchenDom.style.display = 'flex'
        diningDom.style.display = 'none'
        break;
    }
  }

  toDiningDom.addEventListener('click', () => {
    // url的page改成dining
    window.history.pushState({
      page: 'dining'
    }, "", "?page=dining")

    let page = getUrlPage()
    renderPage(page)
  })

  toKitchenDom.addEventListener('click', () => {
    // 'kitchen
    window.history.pushState({
      page: 'kitchen'
    }, "", "?page=kitchen")
    let page = getUrlPage()
    renderPage(page)
  })
  
}
