import React from "react";
import { NavLink } from "react-router-dom";

function MenuLinks({ menu }: any) {
  return (
    <ul>
      <li>
        <NavLink to="/" activeClassName="active" exact>
          Home
        </NavLink>
      </li>
      {menu.length &&
        menu.map((el: any) => (
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
