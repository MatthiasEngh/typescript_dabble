define(["require", "exports"], function (require, exports) {
    "use strict";
    var CanvasElement = /** @class */ (function () {
        function CanvasElement(context) {
            this.canvasHeight = 300;
            this.canvasWidth = 500;
            this.elementType = "canvas";
            this.leftOffset = 0;
            this.topOffset = 0;
            this.initBackground();
            this.initCanvas(context);
            context.appendChild(this.element);
        }
        CanvasElement.prototype.initBackground = function () {
            var mapTile = document.createElement("canvas");
            mapTile.width = 50;
            mapTile.height = 50;
            var tileContext = mapTile.getContext("2d");
            tileContext.fillStyle = "orange";
            tileContext.fillRect(0, 0, 50, 50);
            this.background = document.createElement("canvas");
            var backgroundContext = this.background.getContext("2d");
            backgroundContext.drawImage(mapTile, 10, 10);
            backgroundContext.drawImage(mapTile, 10, 70);
        };
        CanvasElement.prototype.initCanvas = function (context) {
            this.element = document.createElement(this.elementType);
            this.element.width = this.canvasWidth;
            this.element.height = this.canvasHeight;
            this.twoDContext = this.element.getContext("2d");
        };
        CanvasElement.prototype.draw = function () {
            this.twoDContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.twoDContext.drawImage(this.background, this.leftOffset, this.topOffset);
        };
        CanvasElement.prototype.update = function (topOffset, leftOffset) {
            this.topOffset = -topOffset;
            this.leftOffset = leftOffset;
            this.draw();
        };
        return CanvasElement;
    }());
    return CanvasElement;
});
