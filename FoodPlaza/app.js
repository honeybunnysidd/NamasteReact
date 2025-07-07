import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/Food-Plaza.png";

//Component
/*
Header
    - Logo
    - Nav Items
body
    - search
    - Restaurant Container
        - Restaurant Card
footer
    - CopyRight
    - Links
    - Address
    - Contact
*/

const Header = () => {
  return (
    <div className="header">
      {/* //logo */}
      <div className="logo-container">
        <a href="">
          <img
            className="logo"
            src="https://food-plaza-project.vercel.app/Food-Plaza.b8835a43.png"
            alt="logo"
          />
        </a>
      </div>

      {/* Nav Items */}
      <div className="navItems">
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
            <a href="">Cart</a>
          </li>
          <li>
            <a href="">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      {/* //Header */}
      <Header />
      {/* //body */}
      {/* //Footer */}
    </div>
  );
};

//Creating root
const root = ReactDOM.createRoot(document.getElementById("root"));

//Rendering App
root.render(<AppLayout />);
