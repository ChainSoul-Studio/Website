import React, { useState } from "react";

// Firebase Imports
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

// Importing Components
import Burger from "./Burger";
import Menu from "./Menu";
import AuthModal from "./LoginModal";

// Import Auth
import { useAuth } from '../auth'

// Importing Styles
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const {user} = useAuth();

  const handleSignOut = async () => {
    await firebase.auth().signOut()
    .then(() => {
      window.location.href='/'
    })
    .catch((error) => {
      const message = error.message
      toast({
        title: 'An error occurred',
        description: message,
        status: 'error',
        duration: 9000,
        isClosable: true
      })
    })
  }

  const handleDashLink = () => {
    window.location.href = '/authenticated'
  }

  return (
    <>
      <div className={navStyles.container}>
        <div className={navStyles.title}>{/* <h1>ChainSoul</h1> */}</div>

        <nav className={navStyles.nav}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
          <AuthModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
          <div className={navStyles.buttonContainer}>
            <button onClick={() => {
              handleDashLink()
            }}>
              {`User ID: ${ user ? user.uid : 'No user signed in'}`}
            </button>
          </div>

          <div className={navStyles.buttonContainer}>
            <button 
            onClick={() => {
              handleSignOut()
            }}
            >
              Sign Out
            </button>
          </div>


        </nav>
      </div>
    </>
  );
};

export default Nav;
