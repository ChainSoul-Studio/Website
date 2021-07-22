import React, { useState } from "react";

// Importing Components
import Burger from "./Burger";
import Menu from "./Menu";
import AuthModal from "./LoginModal";

// Importing Styles
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className={navStyles.container}>
        <div className={navStyles.title}>{/* <h1>ChainSoul</h1> */}</div>

        <nav className={navStyles.nav}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <AuthModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <div className={navStyles.buttonContainer}>
            <button modalOpen={modalOpen} onClick={() => setModalOpen(!modalOpen)} href="/">
              Log In / Sign Up
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Nav;
