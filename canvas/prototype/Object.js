export default (function () {

    /** @param {class} c **/
    Object.prototype.isType = function (c) {
        return Object.getPrototypeOf(this) === c.prototype;
    };

})();