import React from 'react'
import './Projects.css'
import Myworkdata from '../../assets/Myworkdata'

const Projects = () => {
  return (
    <div id='projects' className='mywork' role="region" aria-label="Projects">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>

      <div className="mywork-container">
        {Myworkdata.map((work, index) => {
          return (
            <article key={index} className="project-card" aria-label={work.Proj_name}>
              <img src={work.Proj_image} alt={work.Proj_name} />
              <div className="project-content">
                <p className="project-title">{work.Proj_name}</p>
                <p className="project-desc">{work.proj_description}</p>
              </div>
              <div className="project-links">
                {work.demo && <a href={work.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {work.github && <a href={work.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              </div>
            </article>
          )
        })}
      </div>  
    </div>
  )
}

export default Projects
