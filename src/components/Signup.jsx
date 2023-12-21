import React, { useState } from "react";
import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setFormData({ username: "", email: "", password: "" });
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <div className="signUp-form">
      <form onSubmit={handleSubmit} className="form">
        <h1 className="mt-3">Sign Up</h1>

        <div className="who-are-you">
          <p>Who are you?</p>
          <select name="" id="">
            <option value="Select">Select</option>
            <option value="Student">Student</option>
            <option value="Parent">Parent</option>
            <option value="Warden">Warden</option>
            <option value="Security">Security</option>
          </select>
        </div>

        <div className="details-div">
          {/* USERNAME */}
          <div className="username-div">
            <label>
              Username:
              <input
                className="username-input"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />

          {/* EMAIL */}
          <div className="email-div">
            <label>
              Email:
              <input
                className="email-input"
                type="email"
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />

          {/* PASSWORD */}
          <div className="password-div">
            <label>
              Password:
              <input
                className="password-input"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
        </div>

        {/* SIGNUP AND LOGIN BUTTON */}
        <div className="button">
          <button type="submit" className="signup-btn">
            Sign Up
          </button>
          <button className="login-btn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
