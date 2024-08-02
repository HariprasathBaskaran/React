import React from "react";

function WithoutJSX() {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "hello world")
  );
}

export default WithoutJSX;
