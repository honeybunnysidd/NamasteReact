import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link, useLocation } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

export const Header = () => {
  const [userAuth, setUserAuth] = useState("🟢Login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onlineStatus = useOnlineStatus();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  //Selector (Subscribing to the store using selector)
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="flex items-center justify-between px-5 py-3 md:px-10">
        {/* Logo */}
        <Link to="/">
          <img
            className="w-24 hover:scale-105 transition-transform"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-2xl focus:outline-none transition-transform hover:scale-110"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`hover:text-red-600 transition ${
                location.pathname === path
                  ? "text-red-500 font-semibold"
                  : "text-gray-700"
              }`}
            >
              {name}
            </Link>
          ))}

          {/* temporary cart */}
          <Link className="font-bold text-xl" to={"/cart"}>
            Cart {cartItems.length}
          </Link>

          <button
            onClick={() =>
              setUserAuth(userAuth === "🟢Login" ? "🔴Logout" : "🟢Login")
            }
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-xl text-xs shadow cursor-pointer"
          >
            {userAuth}
          </button>
        </nav>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col px-5 pb-4 gap-3 text-base text-gray-800 font-medium rounded-b-md shadow-inner">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-red-600"
            >
              {name}
            </Link>
          ))}
          <button
            onClick={() => {
              setUserAuth(userAuth === "🟢Login" ? "🔴Logout" : "🟢Login");
              setIsMobileMenuOpen(false);
            }}
            className="bg-red-400 hover:bg-red-500 text-white px-3 py-1 rounded-xl text-sm shadow-md w-fit"
          >
            {userAuth}
          </button>
        </nav>
      )}
    </header>
  );
};
