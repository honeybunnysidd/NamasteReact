import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* Logo and About */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Food Plaza</h2>
          <p className="text-gray-400">
            Serving fresh, hot and hygienic meals. Powered by your trust.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-white">
                Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Social & Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Stay Connected
          </h3>
          <ul className="space-y-1">
            <li>
              <a
                href="https://www.linkedin.com/in/siddhartha-raghuvanshi/"
                className="hover:text-white"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/honeybunnysidd/"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a
                href="mailto:support@foodplaza.com"
                className="hover:text-white"
              >
                siddhartharaghuvanshi01@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Food Plaza. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
