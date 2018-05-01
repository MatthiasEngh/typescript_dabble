define(["require", "exports", "./ui/UIElement"], function (require, exports, UIElement) {
    "use strict";
    exports.__esModule = true;
    var GameController = /** @class */ (function () {
        function GameController() {
            var _this = this;
            this.uiElement = new UIElement(document.body);
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
        };
        GameController.prototype.run = function () {
            requestAnimationFrame(this.mainLoop);
        };
        GameController.prototype.updateState = function () {
        };
        GameController.prototype.updateVisuals = function () {
            this.uiElement.update(this.keyEvent);
        };
        return GameController;
    }());
    exports.GameController = GameController;
});
