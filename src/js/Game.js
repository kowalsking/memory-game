import Card from './Card.js'

export default class Game {
  root = document.querySelector('#root')
  canvas = document.createElement('canvas')

  constructor() {
    this.IMAGES_AMOUNT = 8
    this.names = []
    this.cards = []

    for (let i = 1; i <= this.IMAGES_AMOUNT * 2; i++) {
      this.names.push(i)
    }

    this.createCanvas()
    this.getContext()
    this.fillBackground()
    this.drawGrid()
    this.drawCards()

    this.canvas.addEventListener('click', e => {
      const offsetLeft = this.canvas.offsetLeft
      const offsetTop = this.canvas.offsetTop
      const xVal = e.pageX - offsetLeft
      const yVal = e.pageY - offsetTop
      // const el = this.cards[0]
      this.cards.forEach(el => {
      // console.log(xVal >= el.left && xVal <= el.left + el.width && yVal >= el.top && yVal <= el.top + el.height)
        if (xVal >= el.left && xVal <= el.left + el.width && yVal >= el.top && yVal <= el.top + el.height) {
          console.log(el)
        }
      })
    })
  }

  createCanvas() {
    this.canvas.width = window.innerWidth / 1.25
    this.canvas.height = window.innerHeight / 1.25
    this.root.append(this.canvas)
    return this.canvas
  }

  getContext() {
    this.ctx = this.canvas.getContext('2d')
  }

  fillBackground() {
    this.ctx.fillStyle = '#eeeeee'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
  }

  drawGrid() {
    const w = this.canvas.width
    const h = this.canvas.height
    for (let i = 0; i < this.IMAGES_AMOUNT / 2; i++) {
      for (let j = 0; j < this.IMAGES_AMOUNT / 2; j++) {
        const left = (w / 4) * i + 90
        const top = (h / 4) * j + 20
        const width = w / 8
        const height = h / 5
        this.cards.push({ left, top, width, height })
      }
    }
  }

  drawCards() {
    console.log(this.cards)
    this.cards.forEach(c => {
      const card = new Image()
      const [name] = this.randomImage()
      card.src = `src/img/${name}.jpg`
      c.id = name
      this.ctx.fillStyle = 'black'
      this.ctx.fillRect(c.left, c.top, c.width, c.height)
      card.addEventListener("load", () => {
        this.ctx.drawImage(card, c.left, c.top, c.width, c.height)
      })
    })
  }

  randomImage() {
    const random = this.names.sort(() => 0.5 - Math.random()).splice(1, 1)
    return  random.length === 0 ? this.names : random
  }
}