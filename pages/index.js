import Head from "next/head";
import Link from 'next/link';
import styles from '../styles/Home.module.css'; 

const Home = () => ( 
  <div className={styles.container}>
    <Head>
      <title>Ahmad Mushofa Salsabil</title>
      <link rel="icon" href="/alfabet.ico"/>
    </Head> 
    <header className={styles.header}>
      <nav className={styles.navigation}> 
        <Link href="/" className={styles.navLink}>Home</Link>
        <Link href="/about" className={styles.navLink}>About</Link>
        <Link href="/projects" className={styles.navLink}>Projects</Link>
        <Link href="/blog" className={styles.navLink}>Blog</Link>
        <Link href="/contact" className={styles.navLink}>Contact</Link>
      </nav>
    </header>
    <main className={styles.main}>
      <h2 className={styles.greeting}>Hello! I'm <b>Ahmad Mushofa Salsabil.</b></h2>
      <h1 className={styles.title}>
        I do everything i like<br />
        for now, I do some websites development.
      </h1>
      <p className={styles.description}>
        I recently learned programming algorithms and coding, While I may not claim mastery over any single domain, 
        I take pride in my expertise in one essential area: <b>the dedication and hard work I bring to everything I do</b>. 
        I'm highly interested in exploring frontend and
        backend engineering.
      </p>
      <div className={styles.cta}>
        <Link href="/about" className={styles.ctaButton}>Learn More ↓</Link>
        <Link href="/projects" className={styles.ctaButton}>Explore My Work ↓</Link>
      </div>
    </main>
    <footer className={styles.footer}>
      <nav>
        <Link href="/about" className={styles.footerLink}>About</Link>
        <Link href="/blog" className={styles.footerLink}>Blog</Link>
        <Link href="/projects" className={styles.footerLink}>Projects</Link>
      </nav>
      <p>©2024 Ahmad Mushofa Salsabil. All rights reserved.</p>
    </footer>
  </div> 
);

export default Home;