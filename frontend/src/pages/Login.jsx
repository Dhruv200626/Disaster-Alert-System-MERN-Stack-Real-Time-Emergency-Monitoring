import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import api from "../services/api";
import "../styles/login.css";

function Login() {
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

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login Successful!");

      navigate("/admin");
    } catch (error) {
      alert(error.response?.data?.message || "Login Failed");
    }
  };

  return (
    <div className="login-container">

      <form className="login-card" onSubmit={handleSubmit}>

        <h1>Welcome Back 👋</h1>

        <p className="subtitle">
          Sign in to access the Disaster Alert Dashboard
        </p>

        <div className="input-group">
          <FaEnvelope className="input-icon" />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
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

        <button type="submit" className="login-btn">
          Login
        </button>

        <div className="login-footer">
          Don't have an account?
          <Link to="/register"> Register</Link>
        </div>

      </form>

    </div>
  );
}

export default Login;