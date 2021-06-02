import React from "react";

// Importing Styles
import menuStyles from "../styles/Menu.module.css";

const Menu = ({open}) => {
  return (
    <nav className={open ? menuStyles.navOpen : menuStyles.navNotOpen} open={open}>
      <a href="/">Home</a>
      <a href="/">About</a>
      <a href="/">Marketplace</a>
    </nav>
  );
};

export default Menu;
