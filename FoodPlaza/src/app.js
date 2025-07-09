import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./components/Header.";
import Body from "./components/Body";

//Whole app layout
const AppLayout = () => {
  return (
    <div className="app">
      {/* //Header */}
      <Header />
      {/* //body */}
      <Body />
      {/* //Footer */}
    </div>
  );
};

//Creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering App
root.render(<AppLayout />);
