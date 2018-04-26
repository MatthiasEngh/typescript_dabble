var Controller = /** @class */ (function () {
    function Controller() {
        var _this = this;
        this.random_number = 0;
        this.main_loop = function () {
            _this.random_walk();
            _this.draw();
            requestAnimationFrame(_this.main_loop);
        };
    }
    Controller.prototype.draw = function () {
        console.log(this.random_number);
    };
    Controller.prototype.random_walk = function () {
        this.random_number += Math.random() - 0.5;
    };
    Controller.prototype.run = function () {
        requestAnimationFrame(this.main_loop);
    };
    return Controller;
}());
var controller = new Controller();
controller.run();
