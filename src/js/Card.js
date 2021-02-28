export default class Card {
  constructor({name, open, x, y, width, height}) {
    this.name = name
    this.open = open
    this.x = x
    this.y = y
    this.width = width
    this.height = height


    return {
      name: this.name,
      open: this.open,
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height
    }
  }
}