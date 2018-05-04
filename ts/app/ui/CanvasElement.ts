class CanvasElement {
  background
  canvasHeight = 300
  canvasWidth = 500
  element
  elementType = "canvas"
  leftOffset = 0
  topOffset = 0
  twoDContext

  constructor (context) {
    this.initBackground()
    this.initCanvas(context)
    context.appendChild(this.element)
  }

  initBackground () {
    let mapTile = document.createElement("canvas")
    mapTile.width = 50
    mapTile.height = 50

    let tileContext = mapTile.getContext("2d")
    tileContext.fillStyle = "orange"
    tileContext.fillRect(0,0,50,50)

    this.background = document.createElement("canvas")
    let backgroundContext = this.background.getContext("2d")

    backgroundContext.drawImage(mapTile, 0, 0)
    backgroundContext.drawImage(mapTile, 60, 0)
    backgroundContext.drawImage(mapTile, 120, 0)

    backgroundContext.drawImage(mapTile, 30, 52)
    backgroundContext.drawImage(mapTile, 90, 52)
    backgroundContext.drawImage(mapTile, 150, 52)

    backgroundContext.drawImage(mapTile, 0, 104)
    backgroundContext.drawImage(mapTile, 60, 104)
    backgroundContext.drawImage(mapTile, 120, 104)
  }

  initCanvas (context) {
    this.element = document.createElement(this.elementType)
    this.element.width = this.canvasWidth
    this.element.height = this.canvasHeight
    this.twoDContext = this.element.getContext("2d")
  }

  draw() {
    this.twoDContext.clearRect(0,0, this.canvasWidth, this.canvasHeight)
    this.twoDContext.drawImage(this.background, this.leftOffset, this.topOffset)
  }

  update(topOffset: number, leftOffset: number) {
    this.topOffset = -topOffset
    this.leftOffset = leftOffset
    this.draw()
  }
}

export = CanvasElement