import UIElement = require("./ui/UIElement")

export class GameController {
  keyEvent: number
  uiElement = new UIElement(document.body)

  constructor() {
    this.initKeyListener()
  }

  initKeyListener() {
    var self = this
    document.addEventListener("keydown", function(event) {
      self.keyEvent = event.keyCode
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
  }

  updateVisuals() {
    this.uiElement.update(this.keyEvent)
  }
}
