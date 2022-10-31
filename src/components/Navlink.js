import React from 'react';
import {NavLink} from 'react-router-dom'

export default function Navigation() {
  return (
    <div className="links">
      <NavLink
        className="link"
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/"
        end
      >
        Home page 
      </NavLink> |
      <NavLink
        className="link"
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/about"
        end
      >
        About page 
      </NavLink> |
      <NavLink
        className="link"
        style={({ isActive }) =>
          isActive ? { color: "red" } : { color: "black" }
        }
        to="/users"
      >
        Users
      </NavLink>
    </div>
  );
}