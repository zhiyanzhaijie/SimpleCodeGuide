let id = 0, activeId = 0
const ANIMAL_HUCO = {

}
const MOVEDOM_HUCO = {}

const ANIMAL_TYPE = {
  DOG: 'dog',
  GOOSE: 'goose'
}

class Animal {
  id
  name
  mantra = 'animal'
  type = 'animal'
  sayMantra = [
    '我是动物'
  ]

  constructor(id, type, name, mantra, sayMantra) {
    this.id = id
    this.type = type ?? this.type
    this.name = name
    this.mantra = mantra ?? this.mantra
    this.sayMantra = sayMantra ?? this.sayMantra
  }

  sayHello() {
    console.log(`你好xx, 我是${this.name}`)
  }

  getSay() {
    return this.sayMantra[Math.random() * this.sayMantra.length >> 0] 
  }
}


class AnimalMoveDom extends Animal {

  dom = null
  width = 100
  height = 40
  left = Math.random() * 200
  top = Math.random() * 200
  isActive = false
  moveSpeed = 30

  constructor(id, moveSpeed) {
    let animal = ANIMAL_HUCO[id]
    super(
      id, 
      animal.type,
      animal.name,
      animal.mantra,
      animal.sayMantra
    )
    this.moveSpeed = moveSpeed ?? this.moveSpeed

    this.dom = document.createElement('div')
    this.dom.innerText = this.name
    this.dom.className = `movedom ${animal.type}`
    this.dom.style.width = `${this.width}px`
    this.dom.style.height = `${this.height}px`
    this.dom.style.backgroundColor = 'white'
    this.dom.style.border = '1px solid black'
    this.dom.style.borderRadius = '5px'

    this.dom.style.position = 'absolute'
    this.setDomPosition()
  }
  
  // onActive() {
  //   this.isActive = true
  // }

  move(direction) {
    switch (direction) {
      case 'left':
        this.left -= this.moveSpeed
        break;
      case 'right':
        this.left += this.moveSpeed
        break;
      case 'up':
        this.top -= this.moveSpeed
        break;
      case 'down':
        this.top += this.moveSpeed
        break;
      default:
        break;
    }

    this.setDomPosition()
  }
  
  setDomPosition() {
    this.dom.style.left = `${this.left}px`
    this.dom.style.top = `${this.top}px`
  }

  
}


window.onload = () => {
  
  ANIMAL_HUCO[id] = new Animal(id, ANIMAL_TYPE.DOG, '小白', '小白哟', [
    '大家今天都要高兴哦',
    '我最讨厌下雨了',
    '我的主人很快就回来了哦',
    '让我来帮助你'
  ])
  id ++
  
  ANIMAL_HUCO[id] = new Animal(id, ANIMAL_TYPE.GOOSE, '大鹅', '嘎嘎', [
    '嘎嘎',
    '嘎嘎嘎嘎',
    '嘎嘎  嘎嘎 嘎'
  ])
  id ++
  ANIMAL_HUCO[id] = new Animal(id, ANIMAL_TYPE.DOG, '大黑', '黑爷降临', ['牛逼'])
  id ++

  
  // right
  let activeAnimal = null
  const chatLstDom = document.querySelector('.chat_list')
  const avatarDom = document.querySelector('#avatar')
  const inputDom = document.querySelector('#sendInput')
  const sendDom = document.querySelector('#send')
  const selectDom = document.querySelector('#select')
  // left
  let activeMoveDom = null
  const leftDom = document.querySelector('.left')
  const leftAddDom = document.querySelector('#left_add')


  initChatUI()
  function initChatUI() {
    initSelectDom()
    function initSelectDom() {
      selectDom.innerHTML = null
      Object.values(ANIMAL_HUCO).forEach((animal) => {
        const {id, name} = animal
        const optDom = document.createElement('option')
        optDom.value = id
        optDom.label = name
        optDom.innerText = name
        selectDom.appendChild(optDom)
      })
    }
    asyncActiveId()
  }
  initMoveUI()
  function initMoveUI() {
    Object.values(ANIMAL_HUCO).forEach(animal => {
      const {id} = animal
      const moveDom = new AnimalMoveDom(id, 50)
      MOVEDOM_HUCO[id] = moveDom
      leftDom.appendChild(MOVEDOM_HUCO[id].dom)
    })
  }

  let nextSay = ''
  addChatEvent()
  function addChatEvent() {
    selectDom.addEventListener('change', () => {
      let id = selectDom.value
      activeId = id
      asyncActiveId()
    })
  
    inputDom.addEventListener('input', (e) => {
      nextSay = e.target.value
    })
  
    sendDom.addEventListener('click', () => {
      activeAnimalSpeak()
    })
  }
  addMoveEvent() 
  function addMoveEvent() {
    window.addEventListener('keydown', (e) => {
      activeMoveDom = MOVEDOM_HUCO[activeId]
      if (!activeMoveDom) return
      switch (e.key) {
        case 'w':
          activeMoveDom.move("up")
          break;
        case 's':
          activeMoveDom.move("down")
          break;
        case 'a':
          activeMoveDom.move("left")
          break;
        case 'd':
          activeMoveDom.move("right")
          break;
        case 'e':
          activeId = (activeId + 1) % id
          asyncActiveId()
          break;
        case 'f':
          activeAnimalSpeak()
          break;
      }

    })
    leftAddDom.addEventListener('click', () => {

    })
  }


  function asyncActiveId() {
    activeAnimal = ANIMAL_HUCO[activeId]
    avatarDom.className = `avatar ${activeAnimal.type}`
    selectDom.value = activeAnimal.id

    activeMoveDom = MOVEDOM_HUCO[activeId]
  }

  function activeAnimalSpeak() {
    // 根据当前动物信息，以及nextSay创建dom
    const liDom = document.createElement('li')
    const avatarDom = document.createElement('div')
    avatarDom.className = `avatar ${activeAnimal.type}`
    const infoDom = document.createElement('div')
    infoDom.className = 'info'
    const nameDom = document.createElement('div')
    nameDom.className = 'name'
    const sayDom = document.createElement('div')
    sayDom.className = 'say'

    nameDom.innerText = activeAnimal.name
    if (nextSay) {
      sayDom.innerText = nextSay
    } else {
      sayDom.innerText = activeAnimal.getSay()
    }

    inputDom.value = ''
    nextSay = ''

    infoDom.appendChild(nameDom)
    infoDom.appendChild(sayDom)
    liDom.appendChild(avatarDom)
    liDom.appendChild(infoDom)
    chatLstDom.appendChild(liDom)
    chatLstDom.scrollTop = chatLstDom.scrollHeight
  }

} 
