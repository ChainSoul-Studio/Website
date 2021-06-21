import Head from "next/head";

import styles from "../styles/Home.module.css";

// Images Config
const withImages = require("next-images");

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
} from "react-icons/fa";

import { IoLogoTiktok } from "react-icons/io5";

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
            <h1>Reforge the gaming industry with us!</h1>
              <div className={styles.heroButtonsContainer}>
                <div className={styles.liveChartButton}>
                  <button href='/'>
                    Live Chart
                  </button>
                </div>
                <div className={styles.buyButton}>
                  <button href='/'>
                    Buy Now
                  </button>
                </div>
              </div>
          </div>
          <div className={styles.tokenStats}>
            <div className={styles.statContainer}>
              <p className={styles.statValue}>0.000003850</p>
              <p className={styles.statDescription}>Current Value</p>
            </div>
            <div className={styles.statContainer}>
              <p className={styles.statValue}>2,376,829</p>
              <p className={styles.statDescription}>Holders</p>
            </div>
            <div className={styles.statContainer}>
              <p className={styles.statValue}>581,278,689,148,758.9</p>
              <p className={styles.statDescription}>Supply</p>
            </div>
            <div className={styles.statContainer}>
              <p className={styles.statValue}>$2,237,922,947.46</p>
              <p className={styles.statDescription}>Market Cap</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.features}>
        {/* <div className={styles.featureItem}>
          <div
            className={styles.iconTitleContainer}
            style={{
              backgroundColor: "#0EBBF2",
              borderTopLeftRadius: "6px",
              borderBottomLeftRadius: "6px",
            }}
          >
            <img className={styles.featureIcon} src="./identity.svg" />
            <h1 className={styles.featureTitle}>Identity</h1>
          </div>
          <div className={styles.featureDescription}>
            <p>
              ChainSoul is a community of humans with dreams, born to live in a
              more connected, virtual world. Dedicated, creative, dreamers—the
              future excites us and we can’t stop building toward the virtual
              universe of our dreams.
            </p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div
            className={styles.iconTitleContainer}
            style={{
              backgroundColor: "#8D44AB",
            }}
          >
            <img className={styles.featureIcon} src="./mission.svg" />
            <h1 className={styles.featureTitle}>Objective</h1>
          </div>
          <div className={styles.featureDescription}>
            <p>
            ChainSoul Studio is an community of outcasts attempting to make AAA-quality video games easy to create for the benefit of all gamers and game-creators.
            </p>
          </div>
        </div>
        <div className={styles.featureItem}>
          <div
            className={styles.iconTitleContainer}
            style={{
              backgroundColor: "#29B9A4",
              borderTopRightRadius: "6px",
              borderBottomRightRadius: "6px",
            }}
          >
            <img className={styles.featureIcon} src="./satellite.svg" />
            <h1 className={styles.featureTitle}>Join</h1>
          </div>
          <div className={styles.featureDescription}>
            <p>
            Join a global community of gamers and game-creators who are fed up with pay to win, waiting for releases, and being sold sub-quality games and software.
            </p>
          </div>
        </div>
      */}
      <div className={styles.featureContainer}>
        <div className={styles.featureTitle}>
          <h1>Community</h1>
        </div>
      </div>
      </div>
      <div className={styles.spacer}></div>

      <div className={styles.community}>
        <div className={styles.communityTitle}>
          <h1>Community Driven</h1>
        </div>
        <div className={styles.communityDescription}>
          <p>
            ChainSoul is an open source project hosted on GitHub, made possible
            by an amazing community of dedicated users. The ChainSoul community
            contributes their knowledge and experiences on our Discord server,
            Telegram, and social platforms.
          </p>
          <br></br>
          <br></br>
          <h1>Want to support ChainSoul?</h1>
          <p>
            Join/follow/subscribe to our Twitter, Discord, Youtube, Twitch, and
            TikTok. You can also reach out to us at{" "}
            <span>Community@chainsoul.io</span> with feedback on our vision and
            ideas. Or reach out to <span>Recruitment@chainsoul.io</span> with
            information regarding your skill set and exceptional ability.
          </p>
        </div>
        <div className={styles.iconLinks}>
          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <FaTwitter style={{ width: "34px", height: "34px" }} />
            </a>
            <span>Twitter</span>
          </div>

          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <FaDiscord style={{ width: "34px", height: "34px" }} />
            </a>
            <span>Discord</span>
          </div>

          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <FaYoutube style={{ width: "34px", height: "34px" }} />
            </a>
            <span>YouTube</span>
          </div>

          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <FaTwitch style={{ width: "34px", height: "34px" }} />
            </a>
            <span>Twitch</span>
          </div>

          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <IoLogoTiktok style={{ width: "34px", height: "34px" }} />
            </a>
            <span>TikTok</span>
          </div>

          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <FaGithub style={{ width: "34px", height: "34px" }} />
            </a>
            <span>Github</span>
          </div>

          <div className={styles.communityIcons}>
            <a href="/" passHref={true}>
              <FaTelegramPlane style={{ width: "34px", height: "34px" }} />
            </a>
            <span>Telegram</span>
          </div>
        </div>
      </div>
      <div className={styles.meet}>
        <h1>Core Team</h1>
      </div>
      <div className={styles.meetDescription}>
        <p>ChainSoul is being developed and maintained by a dedicated and passionate team. We are outsiders to the gaming industry, bringing plans to reforge it with blockchain and innovative solutions for creators at the forefront of creation. With funding and awareness, we are confident that veterans and ambitious talent will want to join our mission to revolutionize gaming.</p>
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
        <div className={styles.footerHero}>
          <h1>ChainSoul</h1>
          <h2>The ChainSoul Studio is a community driven, industry changing solution for gamers and game creators.</h2>
        </div>
        <div className={styles.footerLinks}>
          <h2>Community</h2>
          <a href='/'>
            Discord
          </a>
          <a href='/'>
            Telegram
          </a>
          <a href='/'>
            YouTube
          </a>
          <a href='/'>
            Twitch
          </a>
          <a href='/'>
            TikTok
          </a>
        </div>
        <div className={styles.footerLinks}>
          <h2>Social</h2>
          <a href='/'>
            Facebook
          </a>
          <a href='/'>
            Twitter
          </a>
          <a href='/'>
            Instagram
          </a>
          <a href='/'>
            LinkedIn
          </a>
        </div>
        <div className={styles.footerLinks}>
          <h2>Resources</h2>
          <a href='/'>
            Contract
          </a>
          <a href='/'>
            White paper
          </a>
          <a href='/'>
            Brand
          </a>
        </div>
      </div>
      <div className={styles.footerCopyright}>

      </div>
    </>
  );
}
