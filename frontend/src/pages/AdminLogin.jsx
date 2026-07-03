import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserShield, FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import "../styles/adminLogin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      if (res.data.user.role !== "admin") {
        window.alert("Only admins can login here.");
        return;
      }

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/admin");
    } catch (err) {
      window.alert(err.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="admin-login-container">

      <form className="admin-login-card" onSubmit={handleSubmit}>

        <div className="admin-icon">
          <FaUserShield />
        </div>

        <h1>Admin Portal</h1>

        <p className="admin-subtitle">
          Secure access for administrators only
        </p>

        <div className="input-group">
          <FaEnvelope className="input-icon" />

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="input-icon" />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button className="admin-btn" type="submit">
          🔐 Login as Admin
        </button>

      </form>

    </div>
  );
}

export default AdminLogin;