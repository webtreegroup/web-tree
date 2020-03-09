import React from 'react';
import { NavLink } from 'react-router-dom';

function Logo() {
  return (
    <NavLink
      to="/"
      activeClassName="active"
      className="navbar-brand"
      exact>
      Web-Tree
    </NavLink>
  );
}

export default Logo;
