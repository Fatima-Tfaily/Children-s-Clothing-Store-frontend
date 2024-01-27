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
import Girls from "./components/Girls";
import Boys from "./components/Boys";
import ProductsByCategory from "./components/ProductsByCategory";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AllProducts" element={<AllProducts />} />
        <Route path="/Girls" element={<Girls />} />
        <Route path="/Boys" element={<Boys />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
        <Route path="/Products/:categoryId" element={<ProductsByCategory />} />
      </Routes>
    </Router>
  );
}

export default App;
