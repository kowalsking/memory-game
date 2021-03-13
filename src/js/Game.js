import View from './View.js'
import Card from './Card.js'

export default class Game {
  cards = []
  lastCard = null

  constructor () {
    this.view = new View()
    this.createCards()
    this.handleEvents()
  }
  
  createCards() {
    this.cards = this.view.grid.map(position => new Card(position, this.view.ctx))
  }

  handleEvents() {
    this.view.canvas.addEventListener('click', e => {
      const offsetLeft = this.view.canvas.offsetLeft
      const offsetTop = this.view.canvas.offsetTop
      const xVal = e.pageX - offsetLeft
      const yVal = e.pageY - offsetTop

      this.cards.forEach(el => {
        const isCard = 
          xVal >= el.left &&
          xVal <= el.left + el.width && 
          yVal >= el.top && 
          yVal <= el.top + el.height

        if (isCard) {
          el.open()
          // first card
          if (this.lastCard === null) {
            this.lastCard = el
          // coincidence
          } else if (this.lastCard.id === el.id) {
            this.lastCard = null
          } else {
            setTimeout(() => {
              el.open(false)
              this.lastCard?.open(false)
              this.lastCard = null
            }, 500)
          }
        }
      })
    })
  }
}