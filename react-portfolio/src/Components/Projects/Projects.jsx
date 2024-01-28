
import React, { useState } from 'react';
import {v4 as uuidv4} from "uuid";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import ProjectCard from './ProjectCard';

const Projects = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects")) || [];
  const [projects, setProjects] = useState(storedProjects);

  const [newProject, setNewProject] = useState({
    id: '',
    title: '',
    description: '',
    imageSrc: '',
    skills: '',
    demo: '',
    source: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "skills") {
      // split the input string into an array of skills 

      const skillArray = value.split(',').map(skill => skill.trim());
      setNewProject((prevProject) => ({
        ...prevProject,
        [name] : skillArray,
      }));
    } else {
      setNewProject((prevProject) => ({
        ...prevProject,
        [name]: value,
      }));
    }

   
  };

  const handleAddProject = () => {
    // Update the projects array with the new project
    // For simplicity, you can directly modify the projects array, but in a real application, consider using state management (e.g., Redux) or API calls.
   
    const newId = uuidv4();
    // console.log(newId)

    const updatedProject = {
      ...newProject,
      id: newId,
    };

   
    // projects.push(updatedProject);

    // console.log(updatedProject);

    setProjects((prevProject) => [...prevProject, updatedProject]);

    localStorage.setItem("projects", JSON.stringify([...projects, updatedProject]))

    // Reset the form fields after adding the project
    setNewProject({
      id: '',
      title: '',
      description: '',
      imageSrc: '',
      skills: '',
      demo: '',
      source: '',
    });
  };

  const handleDeleteProject = (id) => {
    const updatedProject = projects.filter((project) => project.id!== id)

    setProjects(updatedProject);
    localStorage.setItem("projects", JSON.stringify(updatedProject));
  }

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>

     {/* Form to add new projects */}
      <div className={styles.addProjectForm}>
        <h3 className={styles.heading}>Add a New Project</h3>
        <div  className={styles.inputContainer}>
          <label className={styles.titleHeading}>Project Title:</label>
          <input
            type="text"
            name="title"
            value={newProject.title}
            onChange={handleInputChange}
            className={styles.userInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label  className={styles.titleHeading}>Description:</label>
          <textarea
            name="description"
            value={newProject.description}
            onChange={handleInputChange}
            className={styles.description}
          ></textarea>
        </div>
        <div className={styles.inputContainer}>
          <label  className={styles.titleHeading}>Image:</label>
          <input type="url"
          name = "imageSrc"
          value = {newProject.imageSrc}
          onChange={handleInputChange}
          className={styles.userInput}/>
        </div>
        <div className={styles.inputContainer}>
          <label  className={styles.titleHeading}>Skills used:</label>
          <input type="text" 
          name = "skills"
          value = {newProject.skills}
          onChange={handleInputChange}
          className={styles.userInput}/>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.titleHeading}>Demo Link:</label>
          <input
            type="url"
            name="demo"
            value={newProject.demo}
            onChange={handleInputChange}
            className={styles.userInput}
          />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.titleHeading}>Source Link:</label>
          <input
            type="url"
            name="source"
            value={newProject.source}
            onChange={handleInputChange}
            className={styles.userInput}
          />
        </div>
        <button onClick={handleAddProject} className={styles.addBtn}>Add</button>
      </div>

      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} onDeleteProject = {handleDeleteProject}/>
        ))}
      </div>
     
    </section>
  );
};

export default Projects;



// import React from 'react';
// import styles from "./Projects.module.css";
// import projects from "../../data/projects.json";

// import ProjectCard from './ProjectCard';


// const Projects = () => {
//   return (
//     <section className={styles.container} id = "projects">
//      <h2 className={styles.title}>Projects</h2>
//      <div className={styles.projects}>
//         {projects.map((project, id) => {
//             return (
//                <ProjectCard key = {id}project = {project}/>
//             )
          
//         })}
//          </div>
//     </section>
//   )
// }

// export default Projects