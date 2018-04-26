class Controller {
  random_number = 0

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

let controller = new Controller()
controller.run()


