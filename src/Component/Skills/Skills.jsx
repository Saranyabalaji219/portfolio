import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div>
      <div id='skills' className="heading"> 
        <h1>My Skills</h1>
      </div>
      <div className="skills">

        {/* FRONTEND */}
        <div className="frontend">
          <h3>FRONTEND</h3>
          <div className="about-skill">
            <p>HTML</p>
            <div className="skill-bar"><span style={{width:"90%"}}></span></div>
          </div>
          <div className="about-skill">
            <p>CSS</p>
            <div className="skill-bar"><span style={{width:"90%"}}></span></div>
          </div>
          <div className="about-skill">
            <p>Javascript</p>
            <div className="skill-bar"><span style={{width:"80%"}}></span></div>
          </div>
          <div className="about-skill">
            <p>React</p>
            <div className="skill-bar"><span style={{width:"80%"}}></span></div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="backend">
          <h3>BACKEND</h3>
          <div className="about-skill">
            <p>Core Java</p>
            <div className="skill-bar"><span style={{width:"70%"}}></span></div>
          </div>
          <div className="about-skill">
            <p>Hibernate</p>
            <div className="skill-bar"><span style={{width:"80%"}}></span></div>
          </div>
          <div className="about-skill">
            <p>Springboot</p>
            <div className="skill-bar"><span style={{width:"90%"}}></span></div>
          </div>
        </div>

        {/* DATABASE */}
        <div className="Database">
          <h3>DATABASE</h3>
          <div className="about-skill">
            <p>MySQL</p>
            <div className="skill-bar"><span style={{width:"86%"}}></span></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
