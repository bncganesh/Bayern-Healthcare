import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css"; // Styles to match homepage

const mockUsers = [
  { email: "user@example.com", name:"user", password: "password123" },
  { email: "admin@example.com", name:"admin", password: "adminpass" },
];

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = "";
    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
    }
    if (name === "password") {
      if (!value) error = "Password is required";
      else if (value.length < 6) error = "Password must be at least 6 characters long";
    }
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    validateField(name, value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!formErrors.email && !formErrors.password && email && password) {
      const user = mockUsers.find((u) => u.email === email && u.password === password);
      if (user) {
        localStorage.setItem("loggedInUser", user.name); 
        navigate("/dashboard");
      }
      else setFormErrors({ ...formErrors, general: "Invalid email or password" });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Login</h2>
        {formErrors.general && <p className="error">{formErrors.general}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" value={email} onChange={handleChange} />
          {formErrors.email && <p className="error">{formErrors.email}</p>}

          <input type="password" name="password" placeholder="Password" value={password} onChange={handleChange} />
          {formErrors.password && <p className="error">{formErrors.password}</p>}

          <button type="submit" disabled={formErrors.email || formErrors.password}>Login</button>
        </form>
        <p><a href="#">Forgot Password?</a></p>
        <p>New User? <a href="/register">Register here</a></p>
      </div>
    </div>
  );
};

export default Login;
