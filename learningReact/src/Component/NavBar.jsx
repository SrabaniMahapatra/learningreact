import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
      <NavLink 
        to="/" 
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Home
      </NavLink>

      <NavLink 
        to="/about" 
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        About
      </NavLink>

      <NavLink 
        to="/contact" 
        style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default NavBar;