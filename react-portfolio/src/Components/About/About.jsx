import React from 'react';
import styles from  "./About.module.css";
import {getImageUrl} from "../../utils";

const About = () => {
  return (
    <section className= {styles.container}>
        <h2 className= {styles.title}>About</h2>
        <div className= {styles.content}>
            <img 
            src= {getImageUrl("about/aboutImage.png")} 
            alt="Me sitting with a laptop" 
            className= {styles.aboutImage} 
            />
            <ul className= {styles.aboutItems}>
                <li className= {styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}
                     alt="cursor icon" />
                     <div  >
                        <h3>Frontend Developer</h3>
                        <p>
                            I'm a frontend developer with experience in building responsive and optimized sites
                        </p>
                     </div>
                </li>
                <li className= {styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")}
                     alt="server icon" />
                     <div className= {styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>
                            I have a experience developing fast and optimised and APIs
                        </p>
                     </div>
                </li>
                <li className= {styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")}
                     alt="UI icon" />
                     <div className= {styles.aboutItemText}>
                        <h3>UI Developer</h3>
                        <p>
                           i have designed multiple landing pages and have systems as well
                        </p>
                     </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About