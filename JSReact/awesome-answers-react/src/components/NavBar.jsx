import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => {
    const { currentUser } = props;

    return (
      <nav className="NavBar">
        {/* <a href="/">Welcome</a> */}
        <NavLink exact to="/">
          Welcome
        </NavLink>
        <NavLink exact to="/questions/new">
          New Question
        </NavLink>
        <NavLink exact to="/questions">
          Questions
        </NavLink>

        {currentUser ? ( <span>{currentUser.full_name}</span> ) :
        (
            <NavLink className="supports-classname" exact to="/sign_in">
              Sign In
            </NavLink>
          )}
          
      </nav>
    );
  };
export default NavBar;