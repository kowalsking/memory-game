import Card from './Card.js'

export default class Game {
  constructor() {
    this.IMAGES_AMOUNT = 8
    this.names

    this.canvas = this.createCanvas()
    this.ctx = this.getContext()
    this.fillBackground()
    this.createCards()
    this.drawGrid()
  }

  createCanvas() {
    const root = document.querySelector('#root')
    const canvas = document.createElement('canvas')
    canvas.width = window.innerWidth / 1.25
    canvas.height = window.innerHeight / 1.25
    root.append(canvas)
    return canvas
  }

  getContext() {
    return this.ctx = this.canvas.getContext('2d')
  }

  fillBackground() {
    this.ctx.fillStyle = '#eeeeee'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  createCards() {
    for (let i = 0; i < this.IMAGES_AMOUNT; i++) {
      
    }
  }

  drawGrid() {
    const w = this.canvas.width
    const h = this.canvas.height
    let name = 0
    for (let i = 0; i < this.IMAGES_AMOUNT / 2; i++) {
      for (let j = 0; j < this.IMAGES_AMOUNT / 2; j++) {
        const x = (w / 4) * i + 90
        const y = (h / 4) * j + 20
        const width = w / 8
        const height = h / 5
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(x, y, width, height)
        console.log(this.getRandomImage())
        name = name++ < 8 ? name : this.getRandomImage()
        this.drawCard({ name, open:  false, x, y, width, height })
      }
    }
  }

  drawCard(options) {
    const { name, x, y, width, height } = options
    const card = new Image()
    card.src = `src/img/${name}.jpg`
    card.addEventListener("load", () => {
      this.ctx.drawImage(card, x, y, width, height)
    });
  }

  getRandomImage() {
    this.n = []
    const name = Math.round(Math.random() * (this.n.length + 2))
    this.n.find(el => name === el) ? Math.round(Math.random() * this.n.length) : this.n.push(name)
    return name
  }
}