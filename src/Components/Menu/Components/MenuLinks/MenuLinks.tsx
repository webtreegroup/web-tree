import React from "react";
import { NavLink } from "react-router-dom";

function MenuLinks() {
  return (
    <ul className="header-navigation">
      <li>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/our-services" activeClassName="active">
          Our Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  );
}

export default MenuLinks;
