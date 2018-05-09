class CanvasElement {
  background
  canvasHeight = 500
  canvasWidth = 800
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
    tileContext.fillStyle = "green"
    tileContext.fillRect(0,0,50,50)

    this.background = document.createElement("canvas")
    this.background.width = 2000
    this.background.height = 2000
    let backgroundContext = this.background.getContext("2d")

    let rowNumber = 20
    let columnNumber = 20
    let coordinates
    for (var i = 0;  i < rowNumber; i++) {
      for (var j = 0; j < columnNumber; j++ ) {
        coordinates = this.coordinates_by_indexes(i, j)
        backgroundContext.drawImage(mapTile, coordinates[0], coordinates[1])
      }
    }
  }

  initCanvas (context) {
    this.element = document.createElement(this.elementType)
    this.element.width = this.canvasWidth
    this.element.height = this.canvasHeight
    this.twoDContext = this.element.getContext("2d")
  }

  coordinates_by_indexes(rowIndex, columnIndex) {
    let xCoordinate = columnIndex * 60 + (rowIndex % 2) * 30
    let yCoordinate = rowIndex * 52
    return [xCoordinate, yCoordinate]
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