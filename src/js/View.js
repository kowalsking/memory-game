export default class View {
  root = document.querySelector('#root')
  canvas = document.createElement('canvas')
  grid = []
  IMAGES_AMOUNT = 8

  constructor() {
    this.init()
  }

  init() {
    this.createCanvas()
    this.getContext()
    this.fillBackground()
    this.drawGrid()
  }

  createCanvas() {
    this.canvas.width = window.innerWidth / 1.25
    this.canvas.height = window.innerHeight / 1.25
    this.root.append(this.canvas)
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
        
        this.grid.push({ left, top, width, height })
      }
    }
  }
}