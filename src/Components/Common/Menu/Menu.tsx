import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "./Components";
import { MenuLinks } from "./Components";

import "./Menu.scss";

function Menu() {
  return (
    <section className="custom-navbar">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Logo />
          </div>

          <div className="col-7">
            <MenuLinks />
          </div>

          <div className="col-3">
            <a href="#s" className="header-phone">
              <span><FontAwesomeIcon icon="phone-alt" /></span>
              +7 (917) 953-49-93
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
