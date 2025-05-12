import React from "react";
import { Link } from "react-router-dom";
import '../App.css'; // Assure-toi d’avoir ce fichier

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-title">
        <img src="/pngegg.png" alt="Logo" className="logo" />
        <h1>Fitness Tracking</h1>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/register">Créer un compte</Link></li>
        <li><Link to="/login">Login</Link></li> {/* إضافة رابط لتسجيل الدخول */}
      </ul>
    </div>
  );
};

export default Navbar;
