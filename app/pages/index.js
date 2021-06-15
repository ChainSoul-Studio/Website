import Head from "next/head";

import styles from "../styles/Home.module.css";

// Images Config
const withImages = require('next-images')

// Icon Imports
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaTelegramPlane,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
        <Head>
          <title>ChainSoul - Studio</title>
          <meta name="description" content="ChainSoul Studio" />
          <link rel="icon" href="/tokenlogo.png" />
        </Head>
        <div className={styles.heroContent}>
          <div className={styles.heroTitle}>
            <h1>Support the gaming ecosystem of the future</h1>
            <div className={styles.buttonContainer}>
              <button className={styles.heroButton}>Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        <div
          className={styles.featureItem}
          
        >
          <div className={styles.iconTitleContainer} style={{
            backgroundColor: "#0EBBF2",
            borderTopLeftRadius: "6px",
            borderBottomLeftRadius: "6px",
          }}>
          <img className={styles.featureIcon} src='./identity.svg' />
          <h1 className={styles.featureTitle}>Identity</h1>
          </div>
          <div className={styles.featureDescription}>
            <p>ChainSoul is a community of humans with dreams, born to live in a more connected, virtual world. Dedicated, creative, dreamers—the future excites us and we can’t stop building toward the virtual universe of our dreams.</p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.iconTitleContainer} style={{
            backgroundColor: '#8D44AB'
          }}>
        <img className={styles.featureIcon} src='./mission.svg' />
          <h1 className={styles.featureTitle}>Mission</h1>
          </div>
          <div className={styles.featureDescription}>
            <p>Our mission is to build a game engine that will reshape gaming. Through non-fungible tokens allowing players to own and sell assets, we will remove the current monopolizing standards in gaming.</p>
          </div>
        </div>
        <div
          className={styles.featureItem}
        >
          <div className={styles.iconTitleContainer} style={{backgroundColor: "#29B9A4",
            borderTopRightRadius: "6px",
            borderBottomRightRadius: "6px",}}>
          <img className={styles.featureIcon} src='./satellite.svg' />
          <h1 className={styles.featureTitle}>Connect</h1>
          </div>
          <div className={styles.featureDescription}>
            <p>We strive to connect a global community of gamers in a fair monetization ecosystem with free of pay to win while centered around intuitive software that makes creating games as fun as playing them. Join our Telegram and Discord to take part!</p>
          </div>
        </div>
      </div>
      <div className={styles.spacer}>

      </div>

      <div className={styles.community}>
        <div className={styles.communityTitle}>
          <h1>Community Driven</h1>
        </div>
        <div className={styles.communityDescription}>
          <p>ChainSoul is an open source project hosted on GitHub, made possible by an amazing community of dedicated users. The ChainSoul community contributes their knowledge and experiences on our Discord server, Telegram, and social platforms.</p>
        </div>
        <div className={styles.iconLinks}>

          <div className={styles.communityIcons}>
          <a href='/' passHref={true}>
            <FaGithub style={{width: '34px', height: '34px'}} />
          </a>
          <span>Github</span>
          </div>

          <div className={styles.communityIcons}>
          <a href='/' passHref={true}>
            <FaTelegramPlane style={{width: '34px', height: '34px'}} />
          </a>
          <span>Telegram</span>
          </div>

          <div className={styles.communityIcons}>
          <a href='/' passHref={true}>
            <FaDiscord style={{width: '34px', height: '34px'}} />
          </a>
          <span>Discord</span>
          </div>

        </div>
        
      </div>
      <div className={styles.meet}>
        <h1>Our Team</h1>
      </div>
      <div className={styles.team}>
        <div className={styles.teamContainer}>
          <div className={styles.teamMemberImageOne}>
          </div>
          <div className={styles.teamMemberInfo}>
          <h1>Michael C Stewart</h1>
          <p>ChainSoul COO</p>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaInstagram style={{ width: '22px', height: '22px' }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaFacebook style={{ width: '22px', height: '22px' }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaLinkedin style={{ width: '22px', height: '22px' }} />
          </a>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamMemberImageTwo}>
          </div>
          <div className={styles.teamMemberInfo}>
          <h1>Larry M Stewart</h1>
          <p> ChainSoul CEO</p>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaInstagram style={{ width: '22px', height: '22px' }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaFacebook style={{ width: '22px', height: '22px' }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaLinkedin style={{ width: '22px', height: '22px' }} />
          </a>
          </div>
        </div>
        <div className={styles.teamContainer}>
          <div className={styles.teamMemberImageThree}>
          </div>
          <div className={styles.teamMemberInfo}>
          <h1>Brandon W Sievert</h1>
          <p> ChainSoul CTO</p>
          <a href="https://twitter.com/home" passHref={true}>
            <FaTwitter style={{ width: "22px", height: "22px" }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaInstagram style={{ width: '22px', height: '22px' }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaFacebook style={{ width: '22px', height: '22px' }} />
          </a>
          <a href='https://linkedin.com' passHref={true}>
            <FaLinkedin style={{ width: '22px', height: '22px' }} />
          </a>
          </div>
        </div>
      </div>
    </>
  );
}
