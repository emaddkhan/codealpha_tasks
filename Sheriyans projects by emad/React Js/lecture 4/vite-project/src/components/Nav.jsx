import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="flex gap-10 justify-center p-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold text-xl ${isActive ? "text-red-300" : ""}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `font-semibold text-xl ${isActive ? "text-red-300" : ""}`
        }
      >
        About
      </NavLink>
      <NavLink
        to="/user"
        className={({ isActive }) =>
          `font-semibold text-xl ${isActive ? "text-red-300" : ""}`
        }
      >
        Users
      </NavLink>
    </div>
  );
}

export default Nav;
