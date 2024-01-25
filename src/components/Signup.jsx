import React, { useState, useEffect } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const validateInput = () => {
    if (!email || !password) {
      setError("Email and Password are required :(");
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(
        "https://minifashion-backend.onrender.com/users/addUser",
        {
          fullName,
          email,
          password,
          phoneNumber,
        }
      );
      console.log(response.data);
      const token = response.data.token;
      const userId = response.data.userId;

      Cookies.set("authToken", token, { expires: 7 });
      Cookies.set("userEmail", email, { expires: 7 });
      Cookies.set("userId", userId, { expires: 50 });
      navigate("/");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleRegister} className="cart" action="#">
        <h1 className="title">Create Account</h1>
        {error && <p className="error-message">{error}</p>}
        <div className="contentCart">
          <input
            className="fullNameSignup"
            type="text"
            required
            value={fullName}
            placeholder="Enter your Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="emailSignup"
            required
            value={email}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="passwordSignup"
            type="passord"
            required
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="confirmPassword"
            type="password"
            required
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            className="phoneNumberSignup"
            type="text"
            required
            value={phoneNumber}
            placeholder="Enter your Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="SignupButton">SignUp</button>
          <p className="pLogin">
            Don't have an acount?
            <a className="aLogin" href="/Login">
              LogIn
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
