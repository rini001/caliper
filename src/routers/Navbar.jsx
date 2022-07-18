import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link className="link1" to="/">HOME</Link>
      </div>
      <div>
        <Link className="link1" to="/products">PRODUCTS</Link>
      </div>
      <div>
        <Link className="link1" to="/contact">CONTACT US</Link>
      </div>
    </div>
  );
};
