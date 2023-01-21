import React from "react";

import Typography from "@mui/material/Typography";

import { Span } from "./Typing.styles";

export interface TypingProps {
  texts: string[];
  speed?: number;
}

const Typing: React.FC<TypingProps> = ({ texts, speed = 1000 }) => {
  const [index, setIndex] = React.useState(0);
  const [wordIndex, setWordIndex] = React.useState(1);

  const maxIndex = texts.length - 1;

  const text = texts[index];

  const displayText = texts[index].slice(0, wordIndex);

  React.useEffect(() => {
    setTimeout(() => {
      const maxWordIndex = text.length;

      if (wordIndex < maxWordIndex) {
        setWordIndex((old) => old + 1);

        return;
      }

      if (index < maxIndex) {
        setIndex((old) => old + 1);

        setWordIndex(1);
        return;
      }

      // setWordIndex(1);
      // setIndex(0);
    }, speed);
  }, [index, wordIndex, text]);

  return (
    <Typography sx={{ display: "inline-flex", position: "relative" }}>
      <Span>{displayText}</Span>
    </Typography>
  );
};

export default Typing;
