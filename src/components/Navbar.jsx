import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signup");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-xl font-bold text-white">
          KS <span className="text-blue-400">Tech</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
          <Link to="/" className="hover:text-white">Home</Link>
          <Link to="/about" className="hover:text-white">About</Link>
          <Link to="/services" className="hover:text-white">Services</Link>
          <Link to="/products" className="hover:text-white">Products</Link>
          <Link to="/contact" className="hover:text-white">Contact</Link>

          {token ? (
            <>
              <Link
                to="/requirement"
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
              >
                New Requirement
              </Link>

              <button
                onClick={logout}
                className="text-red-400 hover:text-red-500 ml-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/signup"
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
            >
              Get Started
            </Link>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-4 py-6 space-y-4 text-gray-300">
          <Link onClick={() => setOpen(false)} to="/">Home</Link>
          <Link onClick={() => setOpen(false)} to="/about">About</Link>
          <Link onClick={() => setOpen(false)} to="/services">Services</Link>
          <Link onClick={() => setOpen(false)} to="/products">Products</Link>
          <Link onClick={() => setOpen(false)} to="/contact">Contact</Link>

          {token ? (
            <>
              <Link
                onClick={() => setOpen(false)}
                to="/requirement"
                className="block text-center bg-blue-500 text-white py-2 rounded-lg"
              >
                New Requirement
              </Link>

              <button
                onClick={() => {
                  setOpen(false);
                  logout();
                }}
                className="block w-full text-center text-red-400 mt-2"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              onClick={() => setOpen(false)}
              to="/signup"
              className="block text-center bg-blue-500 text-white py-2 rounded-lg"
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
