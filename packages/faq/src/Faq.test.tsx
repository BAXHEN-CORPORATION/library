import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./Faq";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/test 1/i);
  expect(linkElement).toBeInTheDocument();
});
