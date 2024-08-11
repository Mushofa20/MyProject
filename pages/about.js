import Head from "next/head";
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/About.module.css';

const About = () => ( 
<div className="main">
<Head>
      <title>About Ahmad Mushofa Salsabil</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <link rel="icon" href="/alfabet.ico"/>
</Head> 
<header className="header">
      <nav className="navigation"> 
        <Link href="/" className="navLink">Home</Link>
        <Link href="/about" className="navLink">About</Link>
        <Link href="/projects" className="navLink">Projects</Link>
        <Link href="/blog" className="navLink">Blog</Link>
        <Link href="/contact" className="navLink">Contact</Link>
      </nav>
</header>
<main className={styles.main}>
     {/*Hero Section*/}
     <section id="aboutpt">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full self-center lg:w-1/2">
                    <h1 className="text-base font-semibold text-gray-600" style={{ fontSize: '1.5rem' }}> 
                        Hallo guys, I am <span className="block font-bold text-gray-900 text-4xl">Ahmad Mushofa Salsabil</span>
                    </h1>
                    <h2 className="text-base text-gray-600">
                        A Science Teacher &amp; Amateur Web Dev
                    </h2>
                    <div className="pt-8">
                        <h1 className="text-base font-bold text-gray-900" style={{ fontSize: '1.5rem' }}>
                        Who am I?
                        </h1>
                        <p className="text-base text-gray-600 pt-5" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
                           A bachelor&apos;s degree in Biology education. I am a Biology teacher who loves to learn and teach. 
                           I am also an amateur web developer who are still learning to create and develop a website.
                           I am actively seeking full-time remote or hybrid roles as website developer and data development.
                           My expertise lies in web development and data-centric technologies, with orientation on both frontend and backend.
                           Despite not having an educational background in computers, I am open to the opportunity to develop my skills in the field of web development. 
                           As a self-taught developer, I love the thrill of exploring and mastering new technologies.
                        </p>
                    </div>
                    <div className="pt-8">
                        <h1 className="text-base font-bold text-gray-900" style={{ fontSize: '1.5rem' }}>
                            What am I Using?
                        </h1>
                        
                    </div>
                </div>
                <div className="w-full self-end px-4 lg:w-1/2 flex justify-center items-start" style={{ alignSelf: 'flex-start' }}>
                    <div className="mt-10 lg:mt-0">
                        <Image src="/assets/img/pas-foto.jpg" alt="profile picture" className="rounded-lg" style={{ height: '400px', width: '300px', borderRadius: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
     </section>
</main>
</div> 
); 
export default About;
