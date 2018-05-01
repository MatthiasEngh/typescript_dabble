import UIElement = require("./ui/UIElement")

export class GameController {
  upNumber = 0
  rightNumber = 0
  upElement = new UIElement(document.body)
  rightElement = new UIElement(document.body)

  constructor() {
    this.initKeyListener()
    this.updateVisuals()
  }

  initKeyListener() {
    var controller = this
    document.addEventListener("keydown", function(event) {
      controller.updateState(event.keyCode)
      controller.updateVisuals()
    })
  }

  updateState(keyEvent: number) {
    switch(keyEvent) {
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
