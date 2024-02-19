import DragItem from "./dragItem.js"

window.onload = () => {
  const dragBoxDom = document.querySelector('.drag_box')

  for (let i = 0; i < 200; i ++) {
    let dragItem = new DragItem()
    dragBoxDom.appendChild(dragItem.dom)
  }
  
  // bindEvent
  window.addEventListener('keydown', e => {
    let moveItem = DragItem.prototype.Instances[DragItem.prototype.nowId]
    switch (e.key) {
      case 'w':
      case 's':
      case 'a':
      case 'd':
        moveItem.moveTo(e.key)
        DragItem.prototype.checkOverlap()
        break;
      case 'e':
        DragItem.prototype.changeNowId()
        break;
    }
  })
  
}
