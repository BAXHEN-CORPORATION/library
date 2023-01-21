import React from "react";

import { styled } from "@mui/material";

export interface TypingProps {
  texts: string[];
  speed?: number;
}

const Span = styled("span")({
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

const ListItem = styled("li")({
  listStyle: "none",
  position: "relative",
});
const List = styled("ul")({
  display: "inline-flex",
  marginLeft: "15px",
});

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

      setWordIndex(1);
      setIndex(0);
    }, speed);
  }, [index, wordIndex, text]);

  return (
    <List>
      <ListItem>
        <Span>{displayText}</Span>
      </ListItem>
    </List>
  );
};

export default Typing;
