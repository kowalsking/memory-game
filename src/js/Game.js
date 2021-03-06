import Card from './Card.js'

export default class Game {
  root = document.querySelector('#root')
  canvas = document.createElement('canvas')
  cards = []
  IMAGES_AMOUNT = 8

  constructor() {
    this.init()

  }

  init() {
    this.createCanvas()
    this.getContext()
    this.fillBackground()
    this.drawGrid()
    this.createCards()
    this.handleEvents()
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
        
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(left, top, width, height)
        this.cards.push({ left, top, width, height })
      }
    }
  }

  createCards() {
    this.cards = this.cards.map(position => new Card({...position}))
  }

  handleEvents() {
    this.canvas.addEventListener('click', e => {
      const offsetLeft = this.canvas.offsetLeft
      const offsetTop = this.canvas.offsetTop
      const xVal = e.pageX - offsetLeft
      const yVal = e.pageY - offsetTop
      
      this.cards.forEach(el => {
        const isCard = xVal >= el.left && xVal <= el.left + el.width && yVal >= el.top && yVal <= el.top + el.height
        if (isCard) {
          el.toggleOppenning(el.open)
          if (el.open) {
            this.ctx.drawImage(el.img, el.left, el.top, el.width, el.height)
          } else {
            this.ctx.fillRect(el.left, el.top, el.width, el.height)
          }
        }
      })
    })
  }
}