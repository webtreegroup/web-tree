import React from "react";
import { NavLink } from "react-router-dom";

function MenuLinks({ mainMenu }: any) {
  return (
    <ul className="header-navigation">
      <li>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
      </li>
      {mainMenu &&
        mainMenu.map((el: any) => (
          <li>
            <NavLink to={`/${el.slug}`} activeClassName="active" exact>
              {el.title}
            </NavLink>
          </li>
        ))}
    </ul>
  );
}

export default MenuLinks;
