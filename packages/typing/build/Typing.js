import React from "react";
import { styled } from "@mui/material";
var Span = styled("span")({
    "@keyframes myEffect": {
        "100%": {
            left: "100%",
            margin: "0 -1ch 0 1ch",
        },
    },
    "&::after": {
        content: "''",
        position: "absolute",
        height: "100%",
        width: "100%",
        borderLeft: "2px solid",
        backgroundColor: "white",
        // animation: "myEffect 5s steps(8) infinite",
    },
});
var ListItem = styled("li")({
    listStyle: "none",
    position: "relative",
});
var List = styled("ul")({
    display: "inline-flex",
    marginLeft: "15px",
});
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
            setWordIndex(1);
            setIndex(0);
        }, speed);
    }, [index, wordIndex, text]);
    return (React.createElement(List, null,
        React.createElement(ListItem, null,
            React.createElement(Span, null, displayText))));
};
export default Typing;
