import React from "react";

import { Logo } from "./Components";
import { MenuLinks } from "./Components";

import "./Menu.css";

function Menu() {
  return (
    <section
      className="navbar custom-navbar navbar-fixed-top"
      role="navigation"
    >
      <div className="container">
        <div className="navbar-header">
          <Logo />
        </div>

        <MenuLinks />
      </div>
    </section>
  );
}

export default Menu;
