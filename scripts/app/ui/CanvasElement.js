define(["require", "exports"], function (require, exports) {
    "use strict";
    var CanvasElement = /** @class */ (function () {
        function CanvasElement(context) {
            this.elementType = "CANVAS";
            this.leftOffset = 0;
            this.topOffset = 0;
            this.initBackground();
            this.initCanvas(context);
            context.appendChild(this.element);
        }
        CanvasElement.prototype.initBackground = function () {
            this.background = document.createElement("IMG");
            this.background.setAttribute("src", "https://img00.deviantart.net/b355/i/2011/178/a/f/octocat_by_rstovall-d3k6a7n.jpg");
        };
        CanvasElement.prototype.initCanvas = function (context) {
            this.element = document.createElement(this.elementType);
            this.TwoDContext = this.element.getContext("2d");
        };
        CanvasElement.prototype.draw = function () {
            this.TwoDContext.drawImage(this.background, this.leftOffset, this.topOffset);
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
