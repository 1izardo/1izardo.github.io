"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var addCursor = function (props) {
    if (props) {
        var contextCursor = document.createElement("div");
        contextCursor.setAttribute("style", "transform: translate(-200px, -200px); height: ".concat(props.radius, "px; width: ").concat(props.radius, "px;"));
        contextCursor.setAttribute("class", "c-cursor");
        document.body.prepend(contextCursor);
        return contextCursor;
    }
};
exports.default = addCursor;
//# sourceMappingURL=addCursor.js.map