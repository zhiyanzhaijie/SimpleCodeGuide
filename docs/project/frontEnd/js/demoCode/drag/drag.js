import DragItem from "./dragItem.js"

window.onload = () => {
  const dragBoxDom = document.querySelector('.drag_box')
  
  let a = new DragItem()
  let b = new DragItem()
  let c = new DragItem()

  console.log(a.id, b.id, c.id)
  
}
