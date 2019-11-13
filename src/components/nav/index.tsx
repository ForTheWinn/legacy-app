import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../scenes/routes";
import DisplayWallet from "../display-wallet";

interface MenuProps {
  toggleSidebar: (status: boolean) => void;
}

const Menu = ({ toggleSidebar }: MenuProps) => {
  return (
    <>
      <aside className="menu" style={{ marginBottom: "20px" }}>
        <ul className="menu-list">
          {routes.map(route => {
            return (
              <li key={route.path}>
                <NavLink
                  exact={route.exact}
                  activeClassName="is-active"
                  to={`${process.env.PUBLIC_URL}${route.path}`}
                  onClick={() => toggleSidebar(false)}
                >
                  {route.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </aside>
      <hr />
      <DisplayWallet />
    </>
  );
};

export default Menu;
