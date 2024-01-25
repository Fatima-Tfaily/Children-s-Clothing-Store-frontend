import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/login.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Contact from "./components/Contact";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import ApproveProducts from "./components/ApproveProducts";
import Error from "./components/Error";
import Favorite from "./components/Favorite";
import Girls from "./components/Girls";
import Boys from "./components/Boys";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Girls" element={<Girls />} />
        <Route path="/Boys" element={<Boys />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ApproveProducts" element={<ApproveProducts />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
