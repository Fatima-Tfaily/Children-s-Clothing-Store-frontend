import React, { useState, useEffect } from "react";
import "../styles/addAdmin.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAdmins = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(null);

  const validateInput = () => {
    if (
      !validateFullName(fullName) ||
      !validatePhoneNumber(phoneNumber) ||
      !email ||
      !password
    ) {
      return false;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    return true;
  };

  const validateFullName = (fullName) => {
    const fullNameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
    if (!fullNameRegex.test(fullName)) {
      setError("Full Name should contain 2 parts with a space in between");
      return false;
    }
    return true;
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^\d{8}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setError("Phone Number should be 10 digits");
      return false;
    }
    return true;
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!validateInput()) return;

    try {
      const response = await axios.post(
        "https://minifashion-backend.onrender.com/users/addAdmin",
        {
          fullName,
          email,
          password,
          phoneNumber,
        }
      );
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setPhoneNumber("");
      toast.success("Admin Added Successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error Adding Admin:", error);
      toast.error("Error Added Admin. Please try again.");
      setError(error.response.data.message);
    }
  };

  return (
    <div className="addAdmin">
      <ToastContainer />
      <form onSubmit={handleAddAdmin} className="addAdminForm" action="#">
        {error && <p className="error-message">{error}</p>}
        <div className="h1AddAdmin">
          <h1 className="titleDashboard">Add Admin</h1>
        </div>
        <div className="contentForm">
          <input
            className="fullNameAddAdmin"
            type="text"
            required
            value={fullName}
            placeholder="Enter your Name"
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            className="emailAddAdmin"
            required
            value={email}
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="passwordAddAdmin"
            type="password"
            required
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            className="confirmPasswordAddAdmin"
            type="password"
            required
            value={confirmPassword}
            placeholder="Confirm your password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            className="phoneNumberAddAdmin"
            type="text"
            required
            value={phoneNumber}
            placeholder="Enter your Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <button className="AddAdminButton">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddAdmins;
