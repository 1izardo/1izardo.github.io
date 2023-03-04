"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gsap_1 = require("gsap");
var chunks_1 = require("../chunks");
var propNames_1 = require("../propNames");
var contextMode = function (cursor, props, interactElements) {
    var parallaxSpeed = {
        cursor: props.parallaxIndex,
        target: props.parallaxIndex * 1.5,
    };
    var isHovered = false;
    var cursorTarget = null;
    var moveCursor = function (e) {
        // If element is not hovered
        if (!isHovered) {
            gsap_1.TweenLite.to(cursor, props.transitionSpeed, {
                x: e.clientX - props.radius / 2,
                y: e.clientY - props.radius / 2,
            });
            // If eleemnt is hovered
        }
        else {
            var borderRadius = Number(window.getComputedStyle(cursorTarget).borderRadius.slice(0, -2));
            // For "LIFT" mode
            if ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.lift)) {
                gsap_1.TweenLite.to(cursorTarget, props.transitionSpeed, {
                    x: (0, chunks_1.getMoveIndex)(e.clientX, cursorTarget.getBoundingClientRect().left, cursorTarget.clientWidth, parallaxSpeed.target),
                    y: (0, chunks_1.getMoveIndex)(e.clientY, cursorTarget.getBoundingClientRect().top, cursorTarget.clientHeight, parallaxSpeed.target),
                    scale: 1.1,
                    boxShadow: (0, chunks_1.getStyleProp)("--ghost-shadow"),
                });
                gsap_1.TweenLite.to(cursor, props.transitionSpeed, {
                    filter: "blur(8px)",
                    x: cursorTarget.getBoundingClientRect().left +
                        (e.clientX -
                            cursorTarget.getBoundingClientRect().left -
                            cursorTarget.clientWidth / 2) /
                            parallaxSpeed.cursor,
                    y: cursorTarget.getBoundingClientRect().top +
                        (e.clientY -
                            cursorTarget.getBoundingClientRect().top -
                            cursorTarget.clientHeight / 2) /
                            parallaxSpeed.cursor,
                    backgroundImage: "radial-gradient(circle at ".concat(e.clientX - cursorTarget.getBoundingClientRect().left, "px ").concat(e.clientY - cursorTarget.getBoundingClientRect().top, "px, rgba(255,255,255,0.4), rgba(255,255,255,0))"),
                });
                // For default "PARALLAX" mode
            }
            else {
                gsap_1.TweenLite.to(cursor, props.transitionSpeed, {
                    x: cursorTarget.getBoundingClientRect().left -
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noPadding)
                            ? null
                            : props.hoverPadding) +
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noParallax)
                            ? 0
                            : (e.clientX -
                                cursorTarget.getBoundingClientRect().left -
                                cursorTarget.clientWidth / 2) /
                                parallaxSpeed.cursor),
                    y: cursorTarget.getBoundingClientRect().top -
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noPadding)
                            ? null
                            : props.hoverPadding) +
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noParallax)
                            ? 0
                            : (e.clientY -
                                cursorTarget.getBoundingClientRect().top -
                                cursorTarget.clientHeight / 2) /
                                parallaxSpeed.cursor),
                    borderRadius: borderRadius *
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noPadding) ? 1 : 1.5),
                    width: cursorTarget.clientWidth +
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noPadding)
                            ? null
                            : props.hoverPadding * 2),
                    height: cursorTarget.clientHeight +
                        ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noPadding)
                            ? null
                            : props.hoverPadding * 2),
                });
                // For "NO PARALLAX" property
                if (!(0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.noParallax)) {
                    gsap_1.TweenLite.to(cursorTarget, props.transitionSpeed, {
                        x: -(0, chunks_1.getMoveIndex)(e.clientX, cursorTarget.getBoundingClientRect().left, cursorTarget.clientWidth, parallaxSpeed.target),
                        y: -(0, chunks_1.getMoveIndex)(e.clientY, cursorTarget.getBoundingClientRect().top, cursorTarget.clientHeight, parallaxSpeed.target),
                    });
                }
            }
        }
    };
    var handleMouseOver = function (e) {
        isHovered = true;
        cursorTarget = e.target;
        var borderRadius = Number(window.getComputedStyle(cursorTarget).borderRadius.slice(0, -2));
        if ((0, chunks_1.isElHasProperty)(cursorTarget, propNames_1.default.lift)) {
            cursor.classList.add("c-cursor-lift_active");
            gsap_1.TweenLite.to(cursor, props.transitionSpeed, {
                borderRadius: borderRadius,
                width: cursorTarget.clientWidth,
                height: cursorTarget.clientHeight,
                scale: 1.1,
            });
        }
        else {
            cursor.classList.add("c-cursor_active");
        }
    };
    var handleMouseOut = function (e) {
        isHovered = false;
        cursor.classList.remove("c-cursor_active");
        cursor.classList.remove("c-cursor-lift_active");
        gsap_1.TweenLite.to(cursor, props.transitionSpeed, {
            x: e.clientX - props.radius / 2,
            y: e.clientY - props.radius / 2,
            width: props.radius,
            height: props.radius,
            borderRadius: "100px",
            scale: 1,
            backgroundImage: "none",
            filter: "blur(0px)",
        });
        gsap_1.TweenLite.to(cursorTarget, props.transitionSpeed, {
            x: 0,
            y: 0,
            scale: 1,
            boxShadow: "0 7px 15px rgba(0,0,0,0.0)",
        });
    };
    // Event listeners
    document.addEventListener("mousewheel", function (e) {
        handleMouseOut(e);
    });
    document.addEventListener("mousemove", function (e) {
        moveCursor(e);
    });
    interactElements.forEach(function (item) {
        item.addEventListener("mouseenter", function (e) {
            handleMouseOver(e);
        });
    });
    interactElements.forEach(function (item) {
        item.addEventListener("mouseleave", function (e) {
            handleMouseOut(e);
        });
    });
};
exports.default = contextMode;
//# sourceMappingURL=contextMode.js.map