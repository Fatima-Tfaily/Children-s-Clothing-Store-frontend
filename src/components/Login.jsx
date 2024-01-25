import React, { useEffect, useState } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const validateInput = () => {
    if (!email || !password) {
      setError("Email and Password are required :(");
      return false;
    }

    return true;
  };
  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;
    try {
      const response = await axios.post(
        "https://minifashion-backend.onrender.com/users/loginUser",
        {
          email,
          password,
        }
      );

      console.log("Response:", response);

      if (!response) {
        console.error("Invalid response structure");
        return;
      }
      console.log(response);
      const token = response.data.token;
      const userId = response.data.data._id;
      const role = response.data.data.role;
      Cookies.set("authToken", token, { expires: 7 });
      Cookies.set("userEmail", email, { expires: 7 });
      Cookies.set("userId", userId, { expires: 50 });
      Cookies.set("role", role, { expires: 50 });

      if (role.toLowerCase() === "admin") {
        navigate("/Dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="login">
      <div className="cart">
        <h1 className="titleLogin">Welcome Back!</h1>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignIn} className="contentCart">
          <input
            className="emailLogin"
            type="text"
            required
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="passwordLogin"
            type="password"
            required
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="LoginButton">LogIn</button>
          <p className="pLogin">
            Don't have an acount?
            <a className="aSignup" href="/Signup">
              SignUp
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
