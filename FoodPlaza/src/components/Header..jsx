// import logo from "../../assets/Food-Plaza.png";
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";

// Header
export const Header = () => {
  const [userAuth, setUserAuth] = useState("Login");

  return (
    <div className="header">
      {/* //logo */}
      <div className="logo-container">
        <a href="">
          <img className="logo" src={LOGO_URL} alt="logo" />
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
            <a
              href="#"
              onClick={() => {
                userAuth === "Login"
                  ? setUserAuth("Logout")
                  : setUserAuth("Login");
              }}
            >
              {userAuth}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
