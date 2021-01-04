import React from "react";
import ReactDOM from "react-dom";
import Login from "../components/login";
import { BrowserRouter } from "react-router-dom";

const history = {
  action: "REPLACE",
};
describe("Login component", () => {
  it("Login renders without crashing", () => {
    const div = document.createElement("div");

    ReactDOM.render(
      <BrowserRouter>
        <Login history={history} />
      </BrowserRouter>,
      div
    );

    ReactDOM.unmountComponentAtNode(div);
  });
});
