class CanvasElement {
  background
  element
  elementType = "CANVAS"
  leftOffset = 0
  topOffset = 0
  TwoDContext

  constructor (context) {
    this.initBackground()
    this.initCanvas(context)
    context.appendChild(this.element)
  }

  initBackground () {
    this.background = document.createElement("IMG")
    this.background.setAttribute("src", "https://img00.deviantart.net/b355/i/2011/178/a/f/octocat_by_rstovall-d3k6a7n.jpg")
  }

  initCanvas (context) {
    this.element = document.createElement(this.elementType)
    this.TwoDContext = this.element.getContext("2d")
  }

  draw() {
    this.TwoDContext.drawImage(this.background, this.leftOffset, this.topOffset)
  }

  update(topOffset: number, leftOffset: number) {
    this.topOffset = -topOffset
    this.leftOffset = leftOffset
    this.draw()
  }
}

export = CanvasElement