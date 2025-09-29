import React from 'react'
import './About.css'
import profile2 from '../../assets/profile2.jpeg'
const About = () => {
  return (
    <div id='about' className='About'>
        <h1>About me</h1>
        <div className="about-title"> 
            <img src={profile2} alt=""  className='profile2'/>
            <div className="abt-para">
             <p>  I am a fresher with a Master's degree in Computer Science (M.Sc Computer Science).
                I have successfully completed a <strong>Java Full Stack Development</strong> course,
        where I gained hands-on experience in building web applications using 
        <strong> Java, Spring Boot, Hibernate, MySQL, React, HTML, CSS, and JavaScript</strong>.</p>
            <p> I am passionate about software development and eager to apply my skills to real-world
        projects. I am looking for opportunities where I can contribute, learn, and grow as
        a full-stack developer.</p>
            </div>
            
        </div>
    </div>
  )
}

export default About