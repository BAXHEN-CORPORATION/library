import React from "react";
import { act, render, screen } from "@testing-library/react";
import Typing from "./Typing";

const texts = ["Youtuber", "Designer"];

const SPEED = 250;

test("if it render the letters of the texts in order according each speed time", async () => {
  jest.useFakeTimers();
  render(<Typing texts={texts} speed={SPEED} />);

  for (let index = 0; index < texts.length; index++) {
    for (let wordIndex = 1; wordIndex <= texts[index].length; wordIndex++) {
      const linkElement = screen.getByText(texts[index].slice(0, wordIndex));
      expect(linkElement).toBeInTheDocument();
      act(() => {
        jest.advanceTimersByTime(SPEED);
      });
    }
  }
});

test("if it types each only once by default and display the last one in the end", () => {
  jest.useFakeTimers();
  render(<Typing texts={texts} speed={SPEED} />);

  const timeToFinishDisplay = texts.reduce((acc, text) => {
    return acc + text.length;
  }, 1);

  act(() => {
    jest.advanceTimersByTime(SPEED * timeToFinishDisplay);
  });

  const linkElement = screen.getByText(texts[texts.length - 1]);
  expect(linkElement).toBeInTheDocument();
});
