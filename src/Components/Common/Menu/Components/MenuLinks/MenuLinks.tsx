import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { IRootState } from "redux/types";

function MenuLinks({ mainMenu }: any) {
  return (
    <ul className="header-navigation">
      {mainMenu &&
        mainMenu.map((el: any) => (
          <li>
            <NavLink to={el.link} activeClassName="active" exact>
              {el.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default connect(
  (state: IRootState) => ({
    mainMenu: state.mainMenu
  }),
  null
)(MenuLinks);
