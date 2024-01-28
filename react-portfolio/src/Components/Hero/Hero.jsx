import React from 'react';

import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';

const Hero = () => {
  return <section className= {styles.container}>
    <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anitha</h1>
        <p className={styles.description}>I'm a full-stack developer with hands on experience of many projects with the techologies like HTML, CSS, Bootstrap, Nodejs, ExpressJs, ReactJs, SQL, Python.</p>
        <a href="mailto: myname@gmail.com" className={styles.contactBtn}>
            Contact Me</a>
    </div>
    <img src= {getImageUrl("hero/heroImage.png")} alt="Image of me" className={styles.heroImg} />
    <div className= {styles.topBlur}/>
    <div className = {styles.bottomBlur} />
  </section>;
}

export default Hero