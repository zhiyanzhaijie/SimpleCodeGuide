class DragItem {

  radius = 50
  constructor(radius) {
    this.id = this.IDGenerator()
    this.radius = radius ?? this.radius
  }
}

DragItem.prototype.initIDGenerator = () => {
  let id = 0
  return () => {
    return id ++
  }
}
DragItem.prototype.IDGenerator = DragItem.prototype.initIDGenerator()
export default DragItem
