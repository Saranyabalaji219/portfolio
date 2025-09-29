import React from 'react'
import './Projects.css'
import Myworkdata from '../../assets/Myworkdata'

const Projects = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>

      <div className="mywork-container">
        {Myworkdata.map((work, index) => {
          return (
            <div key={index} className="project-card">
              <img src={work.Proj_image} alt={work.Proj_name} />
              <p><b>Project name:</b> {work.Proj_name}</p>
              <p> <b>Description: </b> {work.proj_description}</p>
              <div className="project-links">
                {work.demo && <a href={work.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
                {work.github && <a href={work.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
              </div>
            </div>
          )
        })}
      </div>  
    </div>
  )
}

export default Projects
