import React from "react";

interface HeaderProps {
  isSidebarActive: boolean;
  toggleSidebar: (status: boolean) => void;
}

const Header = ({ isSidebarActive, toggleSidebar }: HeaderProps) => {
  return (
    <nav
      className="navbar is-flex"
      style={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <div className="navbar-brand">
        <a
          href="#"
          style={{ marginLeft: 0 }}
          onClick={() => toggleSidebar(!isSidebarActive)}
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <img
        style={{ width: "80px" }}
        src={process.env.PUBLIC_URL + "/assets/FTW-mark-logo.png"}
      />
      <div style={{ width: "52px" }} />
    </nav>
  );
};

export default Header;
