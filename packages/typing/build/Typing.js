import React from "react";
import Typography from "@mui/material/Typography";
import { Span } from "./Typing.styles";
var Typing = function (_a) {
    var texts = _a.texts, _b = _a.speed, speed = _b === void 0 ? 1000 : _b;
    var _c = React.useState(0), index = _c[0], setIndex = _c[1];
    var _d = React.useState(1), wordIndex = _d[0], setWordIndex = _d[1];
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
            // setWordIndex(1);
            // setIndex(0);
        }, speed);
    }, [index, wordIndex, text]);
    return (React.createElement(Typography, { sx: { display: "inline-flex", position: "relative" } },
        React.createElement(Span, null, displayText)));
};
export default Typing;
