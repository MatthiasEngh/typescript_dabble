import UIElement = require("./ui/UIElement")

export class GameController {
  random_number = 0
  ui_element = new UIElement()

  draw() {
    console.log(this.random_number)
  }

  main_loop = () => {
    this.random_walk()
    this.draw()
    requestAnimationFrame(this.main_loop)
  }

  random_walk() {
    this.random_number += Math.random() - 0.5
  }

  run() {
    requestAnimationFrame(this.main_loop)
  }
}
