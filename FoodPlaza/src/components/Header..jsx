// import logo from "../../assets/Food-Plaza.png";
import { LOGO_URL } from "../utils/constant";

// Header
export const Header = () => {
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
            <a href="">Login</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
