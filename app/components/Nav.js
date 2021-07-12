import React, { useState } from "react";

// Importing Components
import Burger from "./Burger";
import Menu from "./Menu";

// Importing Styles
import navStyles from "../styles/Nav.module.css";

// Importing Next
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={navStyles.container}>
        <div className={navStyles.title}>
          {/* <h1>ChainSoul</h1> */}
        </div>
        

        <nav className={navStyles.nav}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <ul className={navStyles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Projects</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
