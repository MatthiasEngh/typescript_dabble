define(["require", "exports", "./ui/CanvasElement"], function (require, exports, CanvasElement) {
    "use strict";
    exports.__esModule = true;
    var GameController = /** @class */ (function () {
        function GameController() {
            this.upNumber = 0;
            this.rightNumber = 0;
            this.mapElement = new CanvasElement(document.body);
            this.initKeyListener();
            this.updateVisuals();
        }
        GameController.prototype.initKeyListener = function () {
            var controller = this;
            document.addEventListener("keydown", function (event) {
                controller.updateState(event.keyCode);
                controller.updateVisuals();
            });
        };
        GameController.prototype.updateState = function (keyEvent) {
            var speed = 10;
            switch (keyEvent) {
                case 37:
                    this.rightNumber -= speed;
                    break;
                case 38:
                    this.upNumber += speed;
                    break;
                case 39:
                    this.rightNumber += speed;
                    break;
                case 40:
                    this.upNumber -= speed;
            }
        };
        GameController.prototype.updateVisuals = function () {
            this.mapElement.update(this.upNumber, this.rightNumber);
        };
        return GameController;
    }());
    exports.GameController = GameController;
});
