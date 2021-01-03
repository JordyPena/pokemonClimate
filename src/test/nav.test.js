import React from "react";
import ReactDOM from "react-dom";
import Nav from "../components/nav";
import { BrowserRouter } from "react-router-dom";

const user = ["test"];

describe("Nav component", () => {
  it("Nav renders without crashing", () => {
    const div = document.createElement("div");
    const component = (
      <BrowserRouter>
        <Nav user={user} />
      </BrowserRouter>
    );
    ReactDOM.render(component, div);

    ReactDOM.unmountComponentAtNode(div);
  });
});
