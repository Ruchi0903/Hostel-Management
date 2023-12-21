import React, { useState } from "react";
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
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
    setFormData({ username: "", password: "" });
  };

  const handleSignup = () => {
    navigate("/signup");
  };

  return (
    <div className="login-form">
      <form onSubmit={handleSubmit} className="loginform">
        <h1 className="mt-3">Login</h1>


        <div className="logindetails-div">
          {/* USERNAME */}
          <div className="loginusername-div">
            <label>
              Username:
              <input
                className="loginusername-input"
                type="text"
                name="username"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />

          {/* EMAIL */}
          <div className="loginemail-div">
            <label>
              Email:
              <input
                type="text"
                name="email"
                className="loginemail-input"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />

          {/* PASSWORD */}
          <div className="loginpassword-div">
            <label>
              Password:
              <input
                type="text"
                className="loginpassword-input"
                name="password"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
        </div>

        {/* FORGOT PASSWORD */}
        <div className="forgot-pass">
          <p>
            Forgot <a href="/">Password</a>?
          </p>
        </div>

        {/* SIGNUP AND LOGIN BUTTON */}
        <div className="new-user">
          <p>New Here? Sign Up!</p>
        </div>
        <div className="lgnbutton">
          <button type="submit" className="lgnsignup-btn" onClick={handleSignup}>
            Sign Up
          </button>
          <button className="lgnlogin-btn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
