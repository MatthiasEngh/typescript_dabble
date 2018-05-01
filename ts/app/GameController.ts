import UIElement = require("./ui/UIElement")

export class GameController {
  keyEvent: number
  upNumber = 0
  rightNumber = 0
  upElement = new UIElement(document.body)
  rightElement = new UIElement(document.body)

  constructor() {
    this.initKeyListener()
  }

  initKeyListener() {
    var self = this
    document.addEventListener("keydown", function(event) {
      self.keyEvent = event.keyCode
    })
    document.addEventListener("keyup", function(event) {
      self.keyEvent = null
    })
  }

  mainLoop = () => {
    this.updateState()
    this.updateVisuals()
    requestAnimationFrame(this.mainLoop)
  }

  run() {
    requestAnimationFrame(this.mainLoop)
  }

  updateState() {
    switch(this.keyEvent) {
      case 37:
        this.rightNumber -= 1
        break
      case 38:
        this.upNumber += 1
        break
      case 39:
        this.rightNumber += 1
        break
      case 40:
        this.upNumber -= 1
    }
  }

  updateVisuals() {
    this.upElement.update(this.upNumber)
    this.rightElement.update(this.rightNumber)
  }
}
