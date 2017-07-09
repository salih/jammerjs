/**
 * Created by sg on 7/9/17.
 */

function $(element) {
    if (element == document || element == window) {
        this.element = element;
    } else {
        this.element = document.querySelector(element);
    }
    return new jammerElement(this.element);
};

var jammerElement = (function () {
    function jammer(element) {
        this.element = element;
        this.text = function (text) {
            this.element.textContent = text;
            return this
        };
        this.on = function (event, callback) {
            this.element.addEventListener(event, callback);
        };
    }
    return jammer;
})();
