import React from 'react'
import './Home.css'
import profile2 from '../../assets/profile2.jpeg'

const Home = ({ setPage }) => {
  return (
    <div id='home' className='Home' role="region" aria-label="Hero">
        <img src={profile2} alt="Portrait of Saranya" className='profile1'/>
        <h1><span>Hi! I'm Saranya,</span> </h1>
        <p className='p1'>Java Fullstack Developer</p>
        <p>Welcome to my Portfolio 😊</p>
        <div className="hero-action" role="group" aria-label="Primary actions">
          <button className="btn btn-primary hero-connect" aria-label="Go to contact section" onClick={() => setPage("contact")}>
            Connect with me
          </button>
          <a href="/resume.pdf" className="btn hero-resume" target="_blank" rel="noopener noreferrer" download aria-label="Download resume as PDF">
            My resume
          </a>
        </div>
    </div>
  )
}

export default Home