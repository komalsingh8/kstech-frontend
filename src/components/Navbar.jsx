import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/signup";
  };

  return (
    <header className="navbar-glass">
      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="nav-logo">
          KS<span className="logo-accent">Tech</span>
        </Link>

        {/* MENU */}
        <nav className="nav-menu">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About" },
            { to: "/services", label: "Services" },
            { to: "/products", label: "Products" },
            { to: "/contact", label: "Contact" },
          ].map((item, i) => (
            <NavLink
              key={i}
              to={item.to}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              {item.label}
            </NavLink>
          ))}

          {/* ADMIN LINK */}
          {token && (
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link" : ""}`
              }
            >
              Admin
            </NavLink>
          )}
        </nav>

        {/* RIGHT SIDE */}
        {token ? (
          <button onClick={logout} className="nav-btn">
            Logout
          </button>
        ) : (
          <Link to="/signup" className="nav-btn">
            Get Started
          </Link>
        )}

      </div>
    </header>
  );
}
