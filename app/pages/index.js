import React, { useEffect } from 'react'
import Head from "next/head";
import styles from "../styles/Home.module.css";

// Import Components
import Nav from "../components/Nav";
import Social from "../components/Social";
import NavAuthorized from '../components/NavAuthorized'

// Import Auth
import { useAuth } from '../auth'

// Icon Imports
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaTwitch,
  FaArrowRight,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";

import { IoLogoTiktok } from "react-icons/io5";

export default function Home() {

  const {user} = useAuth()

  return (
    <>
    {user ? <NavAuthorized /> : <Nav />}

      <Social />
      <div className={styles.hero}>
        <Head>
          <title>ChainSoul - Studio</title>
          <meta name="description" content="ChainSoul Studio" />
          <link rel="icon" href="/tokenlogo.png" />
        </Head>
        <div className={styles.heroContent}>
          <div className={styles.heroTopTitle}>
            <p>Welcome to</p>
          </div>
          <div className={styles.heroBottomTitle}>
            <h1>ChainSoul Studio</h1>
          </div>
          <div className={styles.heroDescription}>
            <p>
              ChainSoul Studio is reforging the gaming industry with NFTs{" "}
              <br></br> and social applications to meet every gamers needs.
            </p>
          </div>

          <div className={styles.heroButtonsContainer}>
            <div className={styles.liveChartButton}>
              <button href="/">Contribute</button>
            </div>
            <div className={styles.projectsButton}>
              <button href="/">
                View Projects
                <FiArrowRight
                  style={{
                    height: "18px",
                    width: "18px",
                    marginLeft: "10px",
                    position: "absolute",
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.spacer}></div>
      <div className={styles.features}>
        <div className={styles.featureContainer}>
          <div className={styles.featureTitle}>
            <h1>Community</h1>
          </div>
          <div className={styles.featureDescriptions}>
            <p>
              ChainSoul is an open source project hosted on GitHub, made
              possible by an amazing community of dedicated users. The ChainSoul
              community contributes their knowledge and experiences on our
              Discord server, Telegram, and social platforms. Join us as we take
              on the task of reforging the gaming industry!
            </p>
            <br></br>
            <br></br>
            <p>
              Join/follow/subscribe to our Twitter, Discord, Twitch, and TikTok.
              You can also reach out to us at Community@chainsoul.io with
              feedback on our vision and ideas. Or reach out to
              Recruitment@chainsoul.io with information regarding your skill set
              and exceptional ability.
            </p>
          </div>
          <div className={styles.featureLinks}>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTwitter style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Twitter</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaDiscord style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Discord</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaYoutube style={{ width: "34px", height: "34px" }} />
              </a>
              <span>YouTube</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTwitch style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Twitch</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <IoLogoTiktok style={{ width: "34px", height: "34px" }} />
              </a>
              <span>TikTok</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaGithub style={{ width: "34px", height: "34px" }} />
              </a>
              <span>GitHub</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTelegramPlane style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Telegram</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featureContainer}>
          <div className={styles.featureTitle}>
            <h1>Community</h1>
          </div>
          <div className={styles.featureDescriptions}>
            <p>
              ChainSoul is an open source project hosted on GitHub, made
              possible by an amazing community of dedicated users. The ChainSoul
              community contributes their knowledge and experiences on our
              Discord server, Telegram, and social platforms. Join us as we take
              on the task of reforging the gaming industry!
            </p>
            <br></br>
            <br></br>
            <p>
              Join/follow/subscribe to our Twitter, Discord, Twitch, and TikTok.
              You can also reach out to us at Community@chainsoul.io with
              feedback on our vision and ideas. Or reach out to
              Recruitment@chainsoul.io with information regarding your skill set
              and exceptional ability.
            </p>
          </div>
          <div className={styles.featureLinks}>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTwitter style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Twitter</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaDiscord style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Discord</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaYoutube style={{ width: "34px", height: "34px" }} />
              </a>
              <span>YouTube</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTwitch style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Twitch</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <IoLogoTiktok style={{ width: "34px", height: "34px" }} />
              </a>
              <span>TikTok</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaGithub style={{ width: "34px", height: "34px" }} />
              </a>
              <span>GitHub</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTelegramPlane style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Telegram</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.featureContainer}>
          <div className={styles.featureTitle}>
            <h1>Community</h1>
          </div>
          <div className={styles.featureDescriptions}>
            <p>
              ChainSoul is an open source project hosted on GitHub, made
              possible by an amazing community of dedicated users. The ChainSoul
              community contributes their knowledge and experiences on our
              Discord server, Telegram, and social platforms. Join us as we take
              on the task of reforging the gaming industry!
            </p>
            <br></br>
            <br></br>
            <p>
              Join/follow/subscribe to our Twitter, Discord, Twitch, and TikTok.
              You can also reach out to us at Community@chainsoul.io with
              feedback on our vision and ideas. Or reach out to
              Recruitment@chainsoul.io with information regarding your skill set
              and exceptional ability.
            </p>
          </div>
          <div className={styles.featureLinks}>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTwitter style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Twitter</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaDiscord style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Discord</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaYoutube style={{ width: "34px", height: "34px" }} />
              </a>
              <span>YouTube</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTwitch style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Twitch</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <IoLogoTiktok style={{ width: "34px", height: "34px" }} />
              </a>
              <span>TikTok</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaGithub style={{ width: "34px", height: "34px" }} />
              </a>
              <span>GitHub</span>
            </div>
            <div className={styles.featureIcons}>
              <a href="/" passHref={true}>
                <FaTelegramPlane style={{ width: "34px", height: "34px" }} />
              </a>
              <span>Telegram</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.spacer}></div>

      <div className={styles.meet}>
        <h1>Core Team</h1>
      </div>
      <div className={styles.meetDescription}>
        <p>
          ChainSoul is being developed and maintained by a dedicated and
          passionate team. We are outsiders to the gaming industry, bringing
          plans to reforge it with blockchain and innovative solutions for
          creators at the forefront of creation. With funding and awareness, we
          are confident that veterans and ambitious talent will want to join our
          mission to revolutionize gaming.
        </p>
      </div>
      <div className={styles.team}>
        <div className={styles.teamContainer}>
          <div className={styles.teamMemberImageOne}></div>
          <div className={styles.teamMemberInfo}>
            <h1>Michael C Stewart</h1>
            <p>ChainSoul CEO</p>
            <div className={styles.teamIconLink}>
              <a href="https://twitter.com/home" passHref={true}>
                <FaTwitter style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaInstagram style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaFacebook style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaLinkedin style={{ width: "22px", height: "22px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamMemberImageTwo}></div>
          <div className={styles.teamMemberInfo}>
            <h1>Larry M Stewart</h1>
            <p> ChainSoul COO</p>
            <div className={styles.teamIconLink}>
              <a href="https://twitter.com/home" passHref={true}>
                <FaTwitter style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaInstagram style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaFacebook style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaLinkedin style={{ width: "22px", height: "22px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamMemberImageThree}></div>
          <div className={styles.teamMemberInfo}>
            <h1>Brandon W Sievert</h1>
            <p> ChainSoul CTO</p>
            <div className={styles.teamIconLink}>
              <a href="https://twitter.com/home" passHref={true}>
                <FaTwitter style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaInstagram style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaFacebook style={{ width: "22px", height: "22px" }} />
              </a>
              <a href="https://linkedin.com" passHref={true}>
                <FaLinkedin style={{ width: "22px", height: "22px" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.footerHero}>
            <h1>ChainSoul</h1>
            <h2>
              ChainSoul Studio is a community driven and industry changing
              solution for gamers and game creators.
            </h2>
          </div>
          <div className={styles.footerLinks}>
            <h2>Community</h2>
            <a href="/">Discord</a>
            <a href="/">Telegram</a>
            <a href="/">YouTube</a>
            <a href="/">Twitch</a>
            <a href="/">TikTok</a>
          </div>
          <div className={styles.footerLinks}>
            <h2>Social</h2>
            <a href="/">Facebook</a>
            <a href="/">Twitter</a>
            <a href="/">Instagram</a>
            <a href="/">LinkedIn</a>
          </div>
          <div className={styles.footerLinks}>
            <h2>Resources</h2>
            <a href="/">Contract</a>
            <a href="/">White paper</a>
            <a href="/">Brand</a>
          </div>
        </div>
        <div className={styles.footerCopyright}></div>
      </div>
      <div className={styles.copyRightWrapper}>
        <div className={styles.copyRight}>
          <p>Copyright © 2021 ChainSoul LLC. | All Rights Reserved</p>
        </div>
      </div>
    </>
  );
}
