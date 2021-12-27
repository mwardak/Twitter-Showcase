//user react router to create a new route for the favourite page and home page
import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourite" activeClassName="active">
            Favourite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
