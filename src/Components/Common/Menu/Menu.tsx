import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Logo } from "./components";
import { MenuLinks } from "components";
import { Test1 } from "components/UI";

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

  const [value, setValue] = useState<boolean>();

  const handleClick = () => {
    console.log('ok');
    setValue(!value);
  };

  return (
    <section className="custom-navbar">
      <div className="container">
        <div className="row">
          <div className="col-2">
            <Logo />
          </div>

          <div className="col-7">
            <div className="header-navigation">
              <MenuLinks menu={mainMenu} />
            </div>

            <button onClick={handleClick}>shmiak blia</button>

            <Test1
              // onClick={handleClick}
              // value={value}
            />
            <Test1
              // onClick={handleClick}
              // value={value}
            />
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
