import React from 'react';
import styles from "./ProjectCard.module.css";
import { getImageUrl } from '../../utils';



// const ProjectCard = ({project : title, imageSrc, description, skills, demo, source}) => {

const ProjectCard = (props) => {
    const {project, onDeleteProject} = props;
    const {id, title, imageSrc, description, skills, demo, source} = project;

    
   const handleCrossBtn = () => {
      console.log(`deleted with the ${id}`);
      onDeleteProject(id);
   }

  return (
    <div  className={styles.container}>
    <img 
    src= {imageSrc} 
    alt={`image of ${title}`}
    className={styles.image}
      />
     <div className = {styles.links}>
    <h3 className={styles.title}>{title}</h3>
    <button onClick = {handleCrossBtn} className= {styles.link}>Delete</button>
    </div>
    <p className={styles.description}>{description}</p>
    {Array.isArray(skills) ? (
          <ul className={styles.skills}>{
            skills.map((skill, id) => {
              return (
                  <li
                 key = {id} 
                className={styles.skill}>{skill}
                </li>
              );
           
            })
        }</ul>
    ) : (<p>Skills not available</p>)}

    <div className={styles.links}>
        <a href= {demo} className={styles.link}>Demo</a>
        <a href={source} className={styles.link}>Source</a>
    </div>
</div>
  )
}

export default ProjectCard