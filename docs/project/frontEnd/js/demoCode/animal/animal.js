window.onload = () => {
  // dom
  const selectDom = document.querySelector('#select')
  const actionAvatarDom = document.querySelector('#actionAvatar')
  const chatContentDom = document.querySelector('.chat_content')
  const chatListDom = document.querySelector('#chat_ul')
  const inputDom = document.querySelector('#input')
  const sendDom = document.querySelector('#send')
  const addDom = document.querySelector('#add')

  const types = ['dog', 'goose']
  const mantras = [
    ['我的主人很快就回来了哦',
    '我最喜欢下雨了'],
    ['嘎嘎  嘎嘎嘎嘎',
    '嘎嘎 ',]
  ]
  // 数据区
  const animals = [
    {
      id: 0,
      type: 'dog',
      name: '小白',
      mantras: [
        '我的主人很快就回来了哦',
        '我最喜欢下雨了'
      ]
    },
    {
      id: 1,
      type: 'goose',
      name: '大鹅',
      mantras: [
        '嘎嘎  嘎嘎嘎嘎',
        '嘎嘎 ',
      ]
    }
  ]

  let activeAnimal = animals[0]
  let nextText = ''

  // UI渲染
  renderUI() 
  function renderUI() {
    selectDom.innerHTML = null
    inputDom.value = ''
    // selectDom渲染
    animals.forEach(animal => {
      const { id, name } = animal
      const optDom = document.createElement('option')
      optDom.value = id
      optDom.label = name
      selectDom.appendChild(optDom)
    })
    selectDom.value = activeAnimal.id
    
    // 渲染actionAvatar的头像 - 根据avtiveAnimal
    actionAvatarDom.className = `avatar ${activeAnimal.type}`
  }

  // UI事件
  addEvent()
  function addEvent() {
    // input bind
    inputDom.addEventListener('input', (e) => {
      nextText = e.target.value
    })
    // send bind
    sendDom.addEventListener('click', () => {
      // 拿到nextText， 拿到当前的动物activeAnimal
      // 生成对应的liDom塞到 chatListDom
      
      const liDom = document.createElement('li')
      liDom.className = "chat_message"

      const avatarDom = document.createElement('div')
      avatarDom.className = `avatar ${activeAnimal.type}`
      liDom.appendChild(avatarDom)

      const mainDom = document.createElement('div')
      mainDom.className = 'message_main'
      const main_nameDom = document.createElement('div')
      main_nameDom.className = "name"
      main_nameDom.innerText = activeAnimal.name
      const main_textDom = document.createElement('div')
      main_textDom.className = 'text'
      main_textDom.innerText = nextText 
        || activeAnimal.mantras[Number.parseInt(Math.random() * activeAnimal.mantras.length)]

      mainDom.appendChild(main_nameDom)
      mainDom.appendChild(main_textDom)

      liDom.appendChild(mainDom)

      chatListDom.appendChild(liDom)
      
      // console.log(chatContentDom.scrollHeight, chatContentDom.clientHeight)
      chatContentDom.scrollTop = chatContentDom.scrollHeight
    })

    // selectDom bind
    selectDom.addEventListener('change', (e) => {
      // 把activeAnimal切换成所select id对应的动物
      let selectAnimal = animals.filter(animal => animal.id == e.target.value)[0]
      activeAnimal = selectAnimal
      nextText = ''
      renderUI()
    })

    // addDom bind 
    addDom.addEventListener('click', () => {
      animals.push({
        id: animals.length,
        type: types[Math.random() * types.length >> 0],
        name: 'animalName' + animals.length,
        mantras: mantras[Math.random() * mantras.length >> 0]
      })
      renderUI()
    })
  }
}
