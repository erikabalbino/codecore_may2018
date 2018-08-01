import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
    return (
      <nav className="NavBar">
        {/* <a href="/">Welcome</a> */}
        <NavLink exact to="/">
          Welcome
        </NavLink>
        ✧
        <NavLink exact to="/products/new">
          New Product
        </NavLink>
        ✧
        <NavLink exact to="/products">
          Products
        </NavLink>
      </nav>
    );
  };
export default NavBar;