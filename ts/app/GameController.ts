import UIElement = require("./ui/UIElement")
import CanvasElement = require("./ui/CanvasElement")

export class GameController {
  upNumber = 0
  rightNumber = 0
  mapElement = new CanvasElement(document.body)

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
    var speed = 10

    switch(keyEvent) {
      case 37:
        this.rightNumber -= speed
        break
      case 38:
        this.upNumber += speed
        break
      case 39:
        this.rightNumber += speed
        break
      case 40:
        this.upNumber -= speed
    }
  }

  updateVisuals() {
    this.mapElement.update(this.upNumber, this.rightNumber)
  }
}
