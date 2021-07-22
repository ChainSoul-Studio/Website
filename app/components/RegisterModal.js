import React, { useState } from "react";
import modalStyles from "../styles/AuthModalSignUp.module.css";
import { useToast } from "@chakra-ui/react"

// Firebase Imports
import firebase from "firebase/app";
import "firebase/auth";

// Icon Imports
import { GrClose } from "react-icons/gr";

const AuthModalSignUp = ({
  signUpModalOpen,
  setSignUpModalOpen,
  modalOpen,
  setModalOpen,
}) => {

  const toast = useToast()

  const handleRegister = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
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

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');


  return (
    <div
      className={
        signUpModalOpen ? modalStyles.modalIsOpen : modalStyles.modalNotOpen
      }
      signUpModalOpen={signUpModalOpen}
    >
      <div className={modalStyles.modalContainer}>
        <div className={modalStyles.titleAndClose}>
          <div className={modalStyles.title}>
            <h1>Sign Up to ChainSoul.io</h1>
          </div>
          <div className={modalStyles.close}>
            <GrClose
              modalOpen={modalOpen}
              signUpModalOpen={signUpModalOpen}
              onClick={() => {
                setSignUpModalOpen(false);
              }}
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

            {/* <label for="username" className={modalStyles.label}>
              <input type="text" name="username" required />
              <span className={modalStyles.placeholder}>Username</span>
            </label> */}

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

            <div className={modalStyles.signUpButton}>
                <button onClick={(e) => {
                  e.preventDefault()
                  handleRegister()
                }} type='submit'>Sign Up</button>
              </div>

          </form>
        </div>
        <div className={modalStyles.logInSeparator}>
          {/* <hr style={{ width: "83%" }} /> */}
          <hr style={{ width: "38%" }} />
          <p>or</p>
          <hr style={{ width: "38%" }} />
        </div>
        <div className={modalStyles.bottomSection}>
          <div className={modalStyles.logInContainer}>
            <div className={modalStyles.logIn}>
              <p>Already have an account?</p>
              <button
                onClick={() => {
                  setSignUpModalOpen(!signUpModalOpen);
                  setModalOpen(!modalOpen);
                }}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModalSignUp;