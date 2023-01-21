var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
export var Span = styled(function (props) { return (React.createElement(Typography, __assign({ component: "span" }, props))); })(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.primary.main,
        "&::after": {
            content: "''",
            position: "absolute",
            height: "100%",
            width: "100%",
            borderLeft: "2px solid currentColor",
            color: theme.palette.primary.main,
        },
    });
});
