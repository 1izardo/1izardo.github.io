"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getMoveIndex = function (mouseEventDirection, elPosition, elDimension, movementSpeed) {
    var relativePos = mouseEventDirection - elPosition;
    return (relativePos - elDimension / 2) / movementSpeed;
};
exports.default = getMoveIndex;
//# sourceMappingURL=getMoveIndex.js.map