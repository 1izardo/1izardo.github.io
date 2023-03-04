"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getStyleProp = function (value) {
    return getComputedStyle(document.documentElement).getPropertyValue(value);
};
exports.default = getStyleProp;
//# sourceMappingURL=getStyleProp.js.map