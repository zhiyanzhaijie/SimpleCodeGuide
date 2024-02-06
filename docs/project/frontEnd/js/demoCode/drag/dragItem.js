class DragItem {
  dom = null
  radius = 25
  left = Math.random() * 2200
  top = Math.random() * 700
  speed = 50

  constructor(radius) {
    this.id = this.IDGenerator()

    this.dom = this.initDom()
    this.Instances[this.id] = this
    
    if (this.nowId == this.id) {
      this.setNowDomActive()
    }

    this.setDomPosition()
    this.radius = radius ?? this.radius
  }

  initDom() {
    const dom = document.createElement('div')
    dom.className = 'dragItem'
    return dom
  }

  moveTo(direction) {
    switch (direction) {
      case 'w':
        this.top -= this.speed
        break;
      case 's':
        this.top += this.speed
        break;
      case 'd':
        this.left += this.speed
        break;
      case 'a':
        this.left -= this.speed
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

  setNowDomActive() {
    let allIds = Object.keys(this.Instances)
    allIds.forEach(id => {
      if (id == DragItem.prototype.nowId) {
        this.Instances[id].dom.className = 'dragItem active'
      } else {
        this.Instances[id].dom.className = 'dragItem'
      }
    })
  }

  setOverlap(id, isOverlap) {
    let className = ['dragItem']
    if (id == this.nowId) {
      className.push('active')
    }
    if (isOverlap) {
      className.push('overlap')
    }

    this.Instances[id].dom.className = className.join(' ')
  }

  changeNowId() {
    let nowId = DragItem.prototype.nowId
    let instanceNums = Object.keys(DragItem.prototype.Instances).length
    let nextId = nowId + 1
    if (nextId == instanceNums) {
      nextId = 0
    }
    DragItem.prototype.nowId = nextId
    this.setNowDomActive()
  }
  
  checkOverlap() {
    let nowId = DragItem.prototype.nowId
    let allIds = Object.keys(this.Instances)

    let isOverlap = false
    allIds.forEach(id => {
      if (id != nowId)  {
        isOverlap ||= this.checkBetween(this.Instances[nowId], this.Instances[id])
      }
    })
    this.setOverlap(nowId, isOverlap)
  }

  checkBetween(o, p) {
    const { left: x1, top: y1, radius: r1 } = o
    const { left: x2, top: y2, radius: r2 } = p

    const distance = Math.pow(Math.pow(Math.abs(x1 - x2), 2) + Math.pow(Math.abs(y1 - y2), 2), 0.5)
    if (distance < r1 + r2) {
      this.setOverlap(o.id, true)
      this.setOverlap(p.id, true)
      return true
    } else {
      this.setOverlap(o.id, false)
      this.setOverlap(p.id, false)
      return false
    }
  }
}

DragItem.prototype.initIDGenerator = () => {
  let id = 0
  return () => {
    return id ++
  }
}


DragItem.prototype.IDGenerator = DragItem.prototype.initIDGenerator()
DragItem.prototype.Instances = {}
DragItem.prototype.nowId = 0

export default DragItem
