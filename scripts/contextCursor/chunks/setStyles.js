"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styles = "\n:root {\n  --main-cursor-clr: rgb(0, 0, 0, 0.2);\n  --main-cursor-hover-clr: rgb(0, 0, 0, 0.07);\n  --ghost-shadow: 0 7px 15px rgba(0, 0, 0, 0.14); }\n\nbody {\n  margin: 0;\n  padding: 0; }\n\n.c-cursor {\n  position: fixed;\n  z-index: 9999;\n  pointer-events: none;\n  border-radius: 200px;\n  background-color: var(--main-cursor-clr);\n  transition: background-color 0.2s ease-in-out;\n}\n\n.c-cursor_active {\n  background-color: var(--main-cursor-hover-clr);\n}\n\n.c-cursor-lift_active {\n  background-color: rgba(0,0,0,0);\n}\n";
var setStyles = function () {
    var styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
};
exports.default = setStyles;
//# sourceMappingURL=setStyles.js.map