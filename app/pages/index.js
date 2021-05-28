import Head from 'next/head'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
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
  )
}
