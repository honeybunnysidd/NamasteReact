import React from "react";
import ReactDOM from "react-dom/client";

//React Element is object at creation time and when the object render, it turn into html tag using DOM🚀
/*
const heading = React.createElement("h1", { id: "heading" }, "I am Heading!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
*/

//JSX (It is not HTML it is JavaScript XML but it looks like HTML/XML like syntax)
// JSX = React.createElement => bable do it
//Babel converted JSX code into React code or browser understand(Transpiled)

const jsxHeading = <h1 id="heading"> I am JSX Heading🚀</h1>; //React Element(Object)
const rootjsx = ReactDOM.createRoot(document.getElementById("root"));
// rootjsx.render(jsxHeading);

//React Component = > 2 Types
//1. Class based Component => Old
//2. Function Component => New

//2. Function Component
const HeadingComponent = () => {
  return <h1>Functional Component🚀</h1>;
};
//Same Same

//Component composition => one element inside other
const HeadingComponent2 = () => (
  <div className="head2">
    <HeadingComponent />
    <h1 className="heading">Functional Component</h1>
  </div>
);

rootjsx.render(<HeadingComponent2 />);
