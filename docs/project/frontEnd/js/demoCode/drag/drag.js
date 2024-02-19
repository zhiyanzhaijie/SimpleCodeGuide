import Move_Dot from "./moveDot.js"

window.onload = () => {
  // dom
  const boxDom = document.querySelector('.move_box')

  // 数据
  for (let i = 0; i < 2000; i ++ ) {
    let dot = new Move_Dot()
    dot.initDom()
    boxDom.appendChild(dot.dom)
  }

  // UI
  // dot 他有半径，颜色
  // dot 会  移动   dot.move(上|下|左|右)
  // dot 会   响应碰撞   dot.checkOverlap()
  Move_Dot.prototype.setActiveStyle(Move_Dot.prototype.activeId, true)
  let activeDot = null
  window.addEventListener('keydown', (e) => {
    // 根据user按下的键区移动 操作的dom
    activeDot = Move_Dot.prototype.getActiveDot()
    switch(e.key) {
      case 'w':
        activeDot.move('上')
        Move_Dot.prototype.checkOverlap()
        break;
      case 's':
        activeDot.move('下')
        Move_Dot.prototype.checkOverlap()

        break;
      case 'a':
        activeDot.move('左')
        Move_Dot.prototype.checkOverlap()
        break;
      case 'd':
        activeDot.move('右')
        Move_Dot.prototype.checkOverlap()

        break;
      case 'e':
        Move_Dot.prototype.setActiveStyle(activeDot.id, false)
        activeDot = Move_Dot.prototype.getNextActiveDot()
        Move_Dot.prototype.setActiveStyle(activeDot.id, true)
        break;
    }
  })
}
