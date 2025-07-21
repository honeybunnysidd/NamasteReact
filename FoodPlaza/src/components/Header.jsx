// import logo from "../../assets/Food-Plaza.png";
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";

// Header
export const Header = () => {
  const [userAuth, setUserAuth] = useState("Login");

  //If no dependecny array => useEffect is called on every render
  useEffect(() => {
    console.log("I'm useEffect()");
  });

  //If dependecny array is empty =[] => useEffect is called on initial render
  useEffect(() => {
    console.log("I'm useEffect() empty array");
  }, []);

  //If dependecny array is not empty =[userAuth] => useEffect is called, whenever dependecny changes
  useEffect(() => {
    console.log("I'm useEffect() with dependecny");
  }, [userAuth]);

  return (
    <div className="header">
      {/* //logo */}
      <div className="logo-container">
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
      </div>

      {/* Nav Items */}
      <div className="navItems">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
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
