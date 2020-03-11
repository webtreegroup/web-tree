import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "./Components";
import { MenuLinks } from "./Components";

import { getMainMenuAsync } from 'redux/actions';

import { IRootState } from "redux/types";

import "./Menu.scss";

function Menu({
  mainMenu,
  getMainMenuAsync
}: any) {
  useEffect(() => {
    getMainMenuAsync();
  }, []);

  return (
    <section className="custom-navbar">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Logo />
          </div>

          <div className="col-7">
            <MenuLinks mainMenu={mainMenu} />
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

export default connect(
  (state: IRootState) => ({
    mainMenu: state.mainMenu
  }),
  {
    getMainMenuAsync
  }
)(Menu);
