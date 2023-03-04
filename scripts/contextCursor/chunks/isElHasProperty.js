"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var propNames_1 = require("../propNames");
var isElHasProperty = function (el, property) {
    if (el.getAttribute(propNames_1.default.dataAttr).includes(property)) {
        return true;
    }
    else {
        return false;
    }
};
exports.default = isElHasProperty;
//# sourceMappingURL=isElHasProperty.js.map