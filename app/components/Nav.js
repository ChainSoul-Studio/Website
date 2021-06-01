import React, { useEffect } from "react";

// Importing Icons
import {
  FaTwitter,
  FaReddit,
  FaTelegramPlane,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

// Importing Styles
import navStyles from "../styles/Nav.module.css";

// Importing Next
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className={navStyles.container}>
        <div className={navStyles.title}>
          <h1>ChainSoul</h1>
        </div>
        <div className={navStyles.icons}>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          <a href="https://twitter.com/home" passHref={true}>
            <FaReddit style={{ width: "22px", height: "22px" }} />
          </a>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTelegramPlane style={{ width: "22px", height: "22px" }} />
          </a>
          <a href="https://twitter.com/home" passHref={true}>
            <FaYoutube style={{ width: "22px", height: "22px" }} />
          </a>
          <a href="https://twitter.com/home" passHref={true}>
            <FaGithub style={{ width: "22px", height: "22px" }} />
          </a>
          <a href="https://twitter.com/home" passHref={true}>
            <SiTiktok style={{ width: "22px", height: "22px" }} />
          </a>
        </div>
        <nav className={navStyles.nav}>
          <ul className={navStyles.navLinks}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Marketplace</Link>
            </li>
          </ul>
        </nav>
        <div className={navStyles.hamburger}>
          <span className={navStyles.line}></span>
          <span className={navStyles.line}></span>
          <span className={navStyles.line}></span>
        </div>
      </div>
    </>
  );
};

export default Nav;
