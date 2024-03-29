define(["require", "exports"], function (require, exports) {
    "use strict";
    var UIElement = /** @class */ (function () {
        function UIElement(context) {
            this.element = document.createElement("DIV");
            context.appendChild(this.element);
        }
        UIElement.prototype.update = function (content) {
            if (content == null) {
                this.element.innerHTML = "!";
            }
            else {
                this.element.innerHTML = content.toString();
            }
        };
        return UIElement;
    }());
    return UIElement;
});
