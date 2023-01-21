import React from "react";
import Typography from "@mui/material/Typography";
import { Span } from "./Typing.styles";
var Typing = function (_a) {
    var texts = _a.texts, _b = _a.speed, speed = _b === void 0 ? 1000 : _b, _c = _a.infinite, infinite = _c === void 0 ? false : _c;
    var _d = React.useState(0), index = _d[0], setIndex = _d[1];
    var _e = React.useState(1), wordIndex = _e[0], setWordIndex = _e[1];
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
    return (React.createElement(Typography, { sx: { display: "inline-flex", position: "relative" } },
        React.createElement(Span, null, displayText)));
};
export default Typing;
