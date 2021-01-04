import React from "react";
import ReactDOM from "react-dom";
import Signup from "../components/signup";
import { BrowserRouter } from "react-router-dom";

describe("Signup component", () => {
  it("Signup renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Signup />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
