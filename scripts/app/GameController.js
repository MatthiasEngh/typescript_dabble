define(["require", "exports", "./ui/UIElement"], function (require, exports, UIElement) {
    "use strict";
    exports.__esModule = true;
    var GameController = /** @class */ (function () {
        function GameController() {
            var _this = this;
            this.upNumber = 0;
            this.rightNumber = 0;
            this.upElement = new UIElement(document.body);
            this.rightElement = new UIElement(document.body);
            this.mainLoop = function () {
                _this.updateState();
                _this.updateVisuals();
                requestAnimationFrame(_this.mainLoop);
            };
            this.initKeyListener();
        }
        GameController.prototype.initKeyListener = function () {
            var self = this;
            document.addEventListener("keydown", function (event) {
                self.keyEvent = event.keyCode;
            });
            document.addEventListener("keyup", function (event) {
                self.keyEvent = null;
            });
        };
        GameController.prototype.run = function () {
            requestAnimationFrame(this.mainLoop);
        };
        GameController.prototype.updateState = function () {
            switch (this.keyEvent) {
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
