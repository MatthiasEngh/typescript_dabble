define(["require", "exports", "./ui/UIElement"], function (require, exports, UIElement) {
    "use strict";
    exports.__esModule = true;
    var GameController = /** @class */ (function () {
        function GameController() {
            this.upNumber = 0;
            this.rightNumber = 0;
            this.upElement = new UIElement(document.body);
            this.rightElement = new UIElement(document.body);
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
            switch (keyEvent) {
                case 37:
                    this.rightNumber -= 1;
                    break;
                case 38:
                    this.upNumber += 1;
                    break;
                case 39:
                    this.rightNumber += 1;
                    break;
                case 40:
                    this.upNumber -= 1;
            }
        };
        GameController.prototype.updateVisuals = function () {
            this.upElement.update(this.upNumber);
            this.rightElement.update(this.rightNumber);
        };
        return GameController;
    }());
    exports.GameController = GameController;
});
