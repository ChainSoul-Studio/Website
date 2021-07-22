import React, { useState} from "react";
import { useToast } from "@chakra-ui/react"

// Firebase Imports
import firebaseClient from "../firebaseClient";
import firebase from "firebase/app";
import "firebase/auth";

// Component Imports
import AuthModalSignUp from "./RegisterModal";

// Modal Styles
import modalStyles from "../styles/AuthModal.module.css";

// Icon Imports
import { GrClose } from "react-icons/gr";

// Material UI For Backdrop
// Slight UI bug when closing modal for login...
// Might use Backdrop to allow time for modal to close before returning main page.

const AuthModal = ({ modalOpen, setModalOpen }) => {

  const toast = useToast()

  const handleLogin = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password)
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

  firebaseClient();

  const [signUpModalOpen, setSignUpModalOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <AuthModalSignUp
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        signUpModalOpen={signUpModalOpen}
        setSignUpModalOpen={setSignUpModalOpen}
      />
      <div
        className={
          modalOpen ? modalStyles.modalIsOpen : modalStyles.modalNotOpen
        }
        modalOpen={modalOpen}
      >
        <div className={modalStyles.modalContainer}>
          <div className={modalStyles.titleAndClose}>
            <div className={modalStyles.title}>
              <h1>Log in to ChainSoul.io</h1>
            </div>
            <div className={modalStyles.close}>
              <GrClose
                modalOpen={modalOpen}
                onClick={() => setModalOpen(!modalOpen)}
                style={{ width: "22px", height: "22px" }}
              />
            </div>
          </div>
          <div className={modalStyles.formContainer}>
            <form>
              <label htmlFor="email" className={modalStyles.label}>
                <input
                  type="text"
                  name="email"
                  autoFocus
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className={modalStyles.placeholder}>Email</span>
              </label>

              <label htmlFor="password" className={modalStyles.label}>
                <input
                  autoComplete="off"
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className={modalStyles.placeholder}>Password</span>
              </label>

              <a className={modalStyles.forgotPassword}>
                Forgot your password?
              </a>
              <div className={modalStyles.loginButton}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleLogin()
                  }}
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          <div className={modalStyles.loginSeparator}>
            <hr style={{ width: "83%", marginTop: "1%" }} />
          </div>
          <div className={modalStyles.bottomSection}>
            <div className={modalStyles.signUpContainer}>
              <div className={modalStyles.signUp}>
                <p>Don't have an account?</p>
                <button
                  signUpModalOpen={signUpModalOpen}
                  onClick={() => {
                    setSignUpModalOpen(!signUpModalOpen);
                    setModalOpen(null);
                  }}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
