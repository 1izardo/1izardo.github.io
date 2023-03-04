"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chunks_1 = require("./chunks");
var contextMode_1 = require("./modes/contextMode");
var propNames_1 = require("./propNames");
var contextCursor = function (props) {
    if (props === void 0) { props = {}; }
    // Default props
    props = {
        radius: props.radius || 20,
        transitionSpeed: props.transitionSpeed || 0.2,
        parallaxIndex: props.parallaxIndex || 10,
        hoverPadding: props.hoverPadding || 6,
    };
    // Set base
    (0, chunks_1.setStyles)();
    var cCursor = (0, chunks_1.addCursor)(props);
    // Load mode when page is loaded
    window.onload = function () {
        var interactElements = document.querySelectorAll("[".concat(propNames_1.default.dataAttr, "]"));
        (0, contextMode_1.default)(cCursor, props, interactElements);
    };
};
exports.default = contextCursor;
//# sourceMappingURL=index.js.map