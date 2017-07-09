/**
 * Created by sg on 7/9/17.
 */

function $(element) {

    this.element = document.querySelector(element);
    return new jammerElement;
};

var jammerElement = (function () {
    function jammer() {
        this.element = element;

        this.text = function (text) {
            element.textContent = text;
        };


    }

    return jammer;
})();
