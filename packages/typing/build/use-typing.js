import React from "react";
export var useTyping = function (_a) {
    var texts = _a.texts, _b = _a.infinite, infinite = _b === void 0 ? false : _b, _c = _a.speed, speed = _c === void 0 ? 1000 : _c, _d = _a.color, color = _d === void 0 ? "primary" : _d;
    var _e = React.useState(0), index = _e[0], setIndex = _e[1];
    var _f = React.useState(1), wordIndex = _f[0], setWordIndex = _f[1];
    var maxIndex = texts.length - 1;
    var text = texts[index];
    var displayText = texts[index].slice(0, wordIndex);
    React.useEffect(function () {
        setTimeout(function () {
            var maxWordIndex = text.length;
            if (wordIndex < maxWordIndex) {
                setWordIndex(function (old) { return old + 1; });
                return;
            }
            if (index < maxIndex) {
                setIndex(function (old) { return old + 1; });
                setWordIndex(1);
                return;
            }
            if (infinite) {
                setWordIndex(1);
                setIndex(0);
            }
        }, speed);
    }, [index, wordIndex, text]);
    return { text: displayText, color: color };
};
