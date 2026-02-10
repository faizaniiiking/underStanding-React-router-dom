import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `mr-6 ${isActive ? "text-blue-600 font-bold" : ""}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `mr-6 ${isActive ? "text-blue-600 font-bold" : ""}`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-600 font-bold" : ""
        }
      >
        Contact
      </NavLink>
      
            <NavLink to="/user/101">User 101</NavLink>

    </nav>
  );
};

export default Navbar;
