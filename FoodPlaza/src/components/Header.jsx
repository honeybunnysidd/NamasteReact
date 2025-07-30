import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [userAuth, setUserAuth] = useState("🟢Login");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onlineStatus = useOnlineStatus();

  return (
    <header className="bg-red-200 shadow-xl sticky top-0 w-full z-50">
      <div className="flex items-center justify-between px-4 py-3 md:px-8">
        {/* Logo */}
        <Link to={"/"}>
          <img className="w-20 sm:w-24" src={LOGO_URL} alt="logo" />
        </Link>

        {/* Hamburger - visible only on small screens */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>

        {/* Navigation (desktop only) */}
        <nav className="hidden md:flex gap-6 text-sm sm:text-base items-center opacity-80">
          <Link to="/" className="hover:opacity-100">
            Home
          </Link>
          <Link to="/about" className="hover:opacity-100">
            About
          </Link>
          <Link to="/contact" className="hover:opacity-100">
            Contact
          </Link>
          <Link to="/cart" className="hover:opacity-100">
            Cart
          </Link>
          <button
            className="hover:opacity-100"
            onClick={() =>
              setUserAuth(userAuth === "🟢Login" ? "🔴Logout" : "🟢Login")
            }
          >
            {userAuth}
          </button>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden flex flex-col px-4 pb-4 gap-3 text-sm opacity-90 bg-red-100">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/cart" onClick={() => setIsMobileMenuOpen(false)}>
            Cart
          </Link>
          <button
            onClick={() => {
              setUserAuth(userAuth === "🟢Login" ? "🔴Logout" : "🟢Login");
              setIsMobileMenuOpen(false);
            }}
          >
            {userAuth}
          </button>
        </nav>
      )}
    </header>
  );
};
