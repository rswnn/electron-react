import React from "react";
import ReactDOM from "react-dom";
import App from "./renderer/app";

console.log("renderer.tsx logging .....");

ReactDOM.render(<App />, document.getElementById("root"));
