/**
 * Created by sg on 7/9/17.
 */

function $(element) {
    if (element == document || element == window || element == history || element == location ) {
        this.element = element;
    } else {
        this.element = document.querySelector(element);
    }
    return new jammerElement(this.element);
}

var jammerElement = (function () {
    function jammer(element) {
        this.element = element;
        this.text = function (text) {
            this.element.textContent = text;
            return this;
        };
        this.on = function (event, callback) {
            this.element.addEventListener(event, callback);
        };
        this.html = function (html) {
            this.element.innerHTML = html;
        };
    }
    return jammer;
})();
