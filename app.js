import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Correct import

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React Developers"
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
