import React from "react";
import { TypingProps } from "./types";

export const useTyping = ({
  texts,
  infinite = false,
  speed = 1000,
  color = "primary",
}: TypingProps) => {
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

      if (infinite) {
        setWordIndex(1);
        setIndex(0);
      }
    }, speed);
  }, [index, wordIndex, text]);

  return { text: displayText, color };
};
