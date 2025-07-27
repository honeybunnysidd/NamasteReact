// import logo from "../../assets/Food-Plaza.png";
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Header
export const Header = () => {
  const [userAuth, setUserAuth] = useState("🟢Login");

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

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between px-5 py-2 bg-red-200 shadow-xl sticky top-0 w-full z-100">
      {/* //logo */}
      <Link to={"/"}>
        <img className="w-24" src={LOGO_URL} alt="logo" />
      </Link>

      {/* Nav Items */}
      <ul className="flex items-center gap-6 mx-5 opacity-80">
        <li>
          <Link to="/" className="hover:opacity-100">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:opacity-100">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:opacity-100">
            Contact
          </Link>
        </li>
        <li>
          <Link to="/cart" className="hover:opacity-100">
            Cart
          </Link>
        </li>
        <li>
          <a
            href="#"
            className="hover:opacity-100"
            onClick={() => {
              userAuth === "🟢Login"
                ? setUserAuth("🔴Logout")
                : setUserAuth("🟢Login");
            }}
          >
            {userAuth}
          </a>
        </li>
      </ul>
    </div>
  );
};
