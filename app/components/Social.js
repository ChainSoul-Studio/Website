import React from 'react'
import socialStyles from '../styles/Social.module.css'

// Importing Icons
import {
    FaTwitter,
    FaReddit,
    FaTelegramPlane,
    FaYoutube,
    FaGithub,
  } from "react-icons/fa";

import { SiTiktok } from "react-icons/si";

const Social = () => {
    return (
        <div className={socialStyles.iconsContainer}>
            <div className={socialStyles.icons}>
                <div className={socialStyles.icon}>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          </div>
          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home" passHref={true}>
            <FaReddit style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTelegramPlane style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home" passHref={true}>
            <FaYoutube style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home" passHref={true}>
            <FaGithub style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home" passHref={true}>
            <SiTiktok style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          </div>
        </div>
    )
}

export default Social
