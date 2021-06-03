import React from "react";

// Importing Styles
import menuStyles from "../styles/Menu.module.css";

const Menu = ({open}) => {
  return (
    <nav className={open ? menuStyles.navOpen : menuStyles.navNotOpen} open={open}>
      <a className={menuStyles.Links} href="/">Home</a>
      <a className={menuStyles.Links} href="/">About</a>
      <a className={menuStyles.Links} href="/">Marketplace</a>
    </nav>
  );
};

export default Menu;
