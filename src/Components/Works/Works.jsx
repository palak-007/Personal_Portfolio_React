import React from 'react'
import './Works.css'
import ProjectCard from './ProjectCard/ProjectCard'
import { ProjectsData } from '../../utils/data' 

const Works = () => {
  return (
    <section className='projects-container' id='project-section'>
        <h5>Projects</h5>

        <div className="projects-content">
            {
                ProjectsData.map((item) =>(
                    <ProjectCard 
                        key = {item.title}
                        info={item}
                    ></ProjectCard>
                ))
            }
        </div>
    </section>
  )
}

export default Works