(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SparnaturalYasguiPlugins"] = factory();
	else
		root["SparnaturalYasguiPlugins"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getAsValue = exports.removeClass = exports.addClass = exports.hasClass = exports.drawFontAwesomeIconAsSvg = exports.drawSvgStringAsElement = exports.MyTable = void 0;
var MyTable = /** @class */ (function () {
    function MyTable(yasr) {
        this.priority = 10;
        this.yasr = yasr;
    }
    MyTable.prototype.getIcon = function () {
        var svgContainer = document.createElement("div");
        svgContainer.className = "svgImg";
        // svgContainer.appendChild(svg);
        return svgContainer;
    };
    MyTable.prototype.draw = function (persistentConfig) {
        console.log("Plugin drawing !");
    };
    MyTable.prototype.canHandleResults = function () {
        return !!this.yasr.results && this.yasr.results.getVariables() && this.yasr.results.getVariables().length > 0;
    };
    return MyTable;
}());
exports.MyTable = MyTable;
function drawSvgStringAsElement(svgString) {
    if (svgString && svgString.trim().indexOf("<svg") == 0) {
        //no style passed via config. guess own styles
        var parser = new DOMParser();
        var dom = parser.parseFromString(svgString, "text/xml");
        var svg = dom.documentElement;
        svg.setAttribute("aria-hidden", "true");
        var svgContainer = document.createElement("div");
        svgContainer.className = "svgImg";
        svgContainer.appendChild(svg);
        return svgContainer;
    }
    throw new Error("No svg string given. Cannot draw");
}
exports.drawSvgStringAsElement = drawSvgStringAsElement;
/**
 * Draws font fontawesome icon as svg. This is a lot more lightweight then the option that is offered by fontawesome
 * @param faIcon
 * @returns
 */
function drawFontAwesomeIconAsSvg(faIcon) {
    return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 ".concat(faIcon.width, " ").concat(faIcon.height, "\" aria-hidden=\"true\"><path fill=\"currentColor\" d=\"").concat(faIcon.svgPathData, "\"></path></svg>");
}
exports.drawFontAwesomeIconAsSvg = drawFontAwesomeIconAsSvg;
function hasClass(el, className) {
    if (!el)
        return;
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp("(\\s|^)" + className + "(\\s|$)"));
}
exports.hasClass = hasClass;
function addClass(el) {
    var classNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        classNames[_i - 1] = arguments[_i];
    }
    if (!el)
        return;
    for (var _a = 0, classNames_1 = classNames; _a < classNames_1.length; _a++) {
        var className = classNames_1[_a];
        if (el.classList)
            el.classList.add(className);
        else if (!hasClass(el, className))
            el.className += " " + className;
    }
}
exports.addClass = addClass;
function removeClass(el, className) {
    if (!el)
        return;
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp("(\\s|^)" + className + "(\\s|$)");
        el.className = el.className.replace(reg, " ");
    }
}
exports.removeClass = removeClass;
function getAsValue(valueOrFn, arg) {
    if (typeof valueOrFn === "function")
        return valueOrFn(arg);
    return valueOrFn;
}
exports.getAsValue = getAsValue;

})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});