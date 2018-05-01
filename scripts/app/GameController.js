define(["require", "exports", "./ui/UIElement"], function (require, exports, UIElement) {
    "use strict";
    exports.__esModule = true;
    var GameController = /** @class */ (function () {
        function GameController() {
            var _this = this;
            this.random_number = 0;
            this.ui_element = new UIElement(document.body);
            this.main_loop = function () {
                _this.random_walk();
                _this.draw();
                requestAnimationFrame(_this.main_loop);
            };
        }
        GameController.prototype.draw = function () {
            this.ui_element.update(this.random_number);
        };
        GameController.prototype.random_walk = function () {
            this.random_number += Math.random() - 0.5;
        };
        GameController.prototype.run = function () {
            requestAnimationFrame(this.main_loop);
        };
        return GameController;
    }());
    exports.GameController = GameController;
});
