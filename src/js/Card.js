  const names = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8]
  
export default class Card {
  img = new Image()
  id = this.randomImage() // how to do it better?

  constructor(position, ctx) {
    const { left, top, width, height } = position
    this.ctx = ctx
    this.left = left
    this.top = top
    this.width = width
    this.height = height
    this.img.src = `src/img/${this.id}.jpg`
    this.open(false)
  }
  
  open (value = true) {
    if (value) {
      this.ctx.drawImage(this.img, this.left, this.top, this.width, this.height)      
    } else {
      this.ctx.fillStyle = 'black'
      this.ctx.fillRect(this.left, this.top, this.width, this.height)
    }
  }

  randomImage() {
    names.sort(() => 0.5 - Math.random())
    return names.pop()
  }
}