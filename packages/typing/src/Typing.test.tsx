import React from "react";
import { render, screen } from "@testing-library/react";
import Typing from "./Typing";

const texts = ["Youtuber", "Designer"];

test("if it render the first text", () => {
  render(<Typing texts={texts} />);
  const linkElement = screen.getByText(texts[0]);
  expect(linkElement).toBeInTheDocument();
});
