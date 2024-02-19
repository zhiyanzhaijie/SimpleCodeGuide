class Move_Dot {
  id
  radius = 25
  left = Math.random() *  2000
  top = Math.random() * 960
  dom = null
  speed = 25

  constructor() {
    // 为了更好地区分每个dot
    this.id = this.getID()
    // 为了页面上的dom
    this.initDom()
    // 记录户口
    Move_Dot.prototype.HUCOS[this.id] = this
  }

  // 为指定id的dot 设置 是否active
  setActiveStyle(id, isActive) {
    let targetDot = Move_Dot.prototype.HUCOS[id]
    if (isActive) {
      targetDot.dom.className = 'move_dom active'
    } else {
      targetDot.dom.className = 'move_dom'
    }
  }

  // 为指定id的dot 设置 是否overlap
  setOverlapStyle(id, isOverlap) {
    let targetDot = Move_Dot.prototype.HUCOS[id]
    let classList = ['move_dom']
    if (isOverlap) {
      classList.push('overlap')
    }
    if (id == Move_Dot.prototype.activeId) {
      classList.push('active')
    }
    
    targetDot.dom.className = classList.join(' ')
  }

  getID() {
    let nowDefult = Move_Dot.prototype.defaultId
    Move_Dot.prototype.defaultId += 1
    return nowDefult
  }

  // 初始化dom
  initDom() {
    let divDom = document.createElement('div')
    divDom.className = 'move_dom'
    divDom.style.backgroundColor = this.color;
    divDom.style.left = `${this.left}px`
    divDom.style.top = `${this.top}px`
    this.dom = divDom
  }

  // 拿到当前户口中正在被操作的 dot
  getActiveDot() {
    const {activeId, HUCOS} = Move_Dot.prototype
    return HUCOS[activeId]
  }


  // 拿到下一个 要被操作的 dot
  getNextActiveDot() {
    const {activeId, HUCOS} = Move_Dot.prototype
    let nextID = activeId + 1
    // 如果越界了
    const HUCO_len = Object.keys(Move_Dot.prototype.HUCOS).length
    nextID = nextID % HUCO_len
    
    Move_Dot.prototype.activeId = nextID
    return HUCOS[nextID]
  }

  // dom的检测碰撞
  checkOverlap() {
    let activeDot = this.getActiveDot()
    // 遍历户口里所有非activeDot 和 activeDot是否碰撞
    let allDots = Object.values(Move_Dot.prototype.HUCOS)
    allDots.forEach(dot => {
      if (dot.id !== activeDot.id) {
        this.checkOverlapBetween(activeDot, dot)
      }
    })
  }
  // 仅检测a,b两个点是否 overlap
  checkOverlapBetween(aDot, bDot) {
    const { id: aId, left: x1, top: y1, radius: r1 } = aDot
    const { id: bId, left: x2, top: y2, radius: r2 } = bDot

    let xDist = Math.abs(x1 - x2)
    let yDist = Math.abs(y1 - y2)
    let abDist = Math.pow((Math.pow(xDist, 2) + Math.pow(yDist, 2)), 0.5)
    if (abDist < r1 + r2) {
      this.setOverlapStyle(aId, true)
      this.setOverlapStyle(bId, true)
      return true 
    } else {
      this.setOverlapStyle(aId, false)
      this.setOverlapStyle(bId, false)
      return false
    }
  }

  // 移动方法
  move(direction) {
    switch (direction) {
      case "上":
        // 上移动
        this.top -= this.speed // 数据
        this.setDomPostion() // UI
        break;
      case "下":
        // 下移动
        this.top += this.speed // 数据
        this.setDomPostion() // UI
        break;
      case "左":
        // 左移动
        this.left -= this.speed // 数据
        this.setDomPostion() // UI
        break;
      case "右":
        // 右移动
        this.left += this.speed // 数据
        this.setDomPostion() // UI
        break;
    }
  }

  setDomPostion() {
    this.dom.style.left = `${this.left}px`
    this.dom.style.top = `${this.top}px`
  }
}

Move_Dot.prototype.defaultId = 0
Move_Dot.prototype.activeId = 0
Move_Dot.prototype.HUCOS = {}


export default Move_Dot
