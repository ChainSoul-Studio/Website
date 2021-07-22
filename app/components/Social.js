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
          <a href="https://twitter.com/home">
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          </div>
          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home">
            <FaReddit style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home">
            <FaTelegramPlane style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home">
            <FaYoutube style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home">
            <FaGithub style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          <div className={socialStyles.icon}>
          <a href="https://twitter.com/home">
            <SiTiktok style={{ width: "22px", height: "22px" }} />
          </a>
          </div>

          </div>
        </div>
    )
}

export default Social
