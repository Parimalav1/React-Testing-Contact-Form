import React from "react";
import { render,screen } from "@testing-library/react";
import { mutationObserver } from "mutationobserver-shim";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});
// test('renders App component without errors', () => {
//   // render the App component
//   render(<App />);
//   // throw new Error('This test failed bcos v did it');
//   // breaktheTest(false);
// })


test('App renders the div', () => {
  const screen = render(<App />);
  console.log(screen);
})