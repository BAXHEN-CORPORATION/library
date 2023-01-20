import React from "react";

export interface TypingProps {
  texts: string[];
}

export const Typing: React.FC<TypingProps> = ({ texts }) => {
  return (
    <ul>
      {texts}
      {/* <li>
        <span>Youtuber</span>
      </li>
      <li>
        <span>Designer</span>
      </li> */}
    </ul>
  );
};

export default Typing;
