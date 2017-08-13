/**
 * Created by sg on 7/9/17.
 */
'use strict';
function $(element) {
    return  (element == document ||
            element == window ||
            element == history ||
            element == location) ? element :
             new jammerElement(document.querySelector(element));

}

var jammerElement = (function () {
    function jammer(element) {
        //this.e = this;
        this.element = element;
        this.text = function (text) {
            this.element.textContent = text;
            //console.log(this);
            // console.log(this == e)
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