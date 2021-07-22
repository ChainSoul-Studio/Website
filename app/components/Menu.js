import React from "react";

// NextJs Link
import Link from "next/link";

// Importing Styles
import menuStyles from "../styles/Menu.module.css";

const Menu = ({open}) => {
  return (
    <nav className={open ? menuStyles.navOpen : menuStyles.navNotOpen} open={open}>
      <Link className={menuStyles.Links} href="/">Home</Link>
      <Link className={menuStyles.Links} href="/">About</Link>
      <Link className={menuStyles.Links} href="/">Marketplace</Link>
      <Link className={menuStyles.Links} href='/TormentedSouls'>Patch Notes</Link>
    </nav>
  );
};

export default Menu;
