export default class Card {
  constructor({ left, top, width, height }) {
    this.names = []
    this.IMAGES_AMOUNT = 8

    for (let i = 1; i <= this.IMAGES_AMOUNT * 2; i++) {
      this.names.push(i)
    }

    this.open = false
    this.left = left
    this.top = top
    this.width = width
    this.height = height
    this.img = new Image()
    const [name] = this.randomImage() // Rewrite logic of random image
    this.img.src = `src/img/${name}.jpg`
    this.id = name
    return this
  }

  toggleOppenning (open) {
    this.open = !open
  }

  randomImage() {
    const random = this.names.sort(() => 0.5 - Math.random()).splice(1, 1)
    return  random.length === 0 ? this.names : random
  }
}