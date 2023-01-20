import React from "react";

export interface TypingProps {
  texts: string[];
}

export const Typing: React.FC<TypingProps> = ({ texts }) => {
  return (
    <ul>
      {texts.map((text) => (
        <li key={text}>
          <span>{text}</span>
        </li>
      ))}
    </ul>
  );
};

export default Typing;
