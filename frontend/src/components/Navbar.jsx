import { Link, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaMapMarkedAlt,
  FaBell,
  FaUserShield,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="navbar">

      {/* Logo */}

      <div className="logo">
        <div className="logo-icon">⚡</div>

        <div>
          <h2>DISASTER ALERT</h2>
          <p>Stay Aware, Stay Safe</p>
        </div>
      </div>

      {/* Navigation */}

      <div className="nav-links">

        <Link to="/">
          <FaHome />
          Home
        </Link>

        <Link to="/">
          <FaBell />
          Dashboard
        </Link>

        <Link to="/map">
          <FaMapMarkedAlt />
          Map
        </Link>

        {token && role === "admin" && (
          <Link to="/admin">
            <FaUserShield />
            Admin
          </Link>
        )}
      </div>

      {/* Buttons */}

      <div className="nav-buttons">

        {!token ? (
          <>
            <Link to="/login" className="login-btn">
              <FaSignInAlt />
              Login
            </Link>

            <Link to="/register" className="register-btn">
              <FaUserPlus />
              Register
            </Link>

            <Link to="/admin-login" className="admin-btn">
              Admin Login
            </Link>
          </>
        ) : (
          <button className="logout-btn" onClick={handleLogout}>
            <FaSignOutAlt />
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}

export default Navbar;