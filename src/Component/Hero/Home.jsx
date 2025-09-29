import React from 'react'
import './Home.css'
import profile2 from '../../assets/profile2.jpeg'

const Home = ({ setPage }) => {
  return (
    <div id='home' className='Home'>
        <img src={profile2} alt="" className='profile1'/>
        <h1><span>Hi! I'm Saranya,</span> </h1>
        <p className='p1'>Java Fullstack Developer</p>
        <p>Welcome to my Portfolio 😊</p>
        <div className="hero-action">
        <button className="hero-connect" onClick={() => setPage("contact")}>Connect with me </button>          
        <a href="/resume.pdf"  className="hero-resume"  target="_blank"   rel="noopener noreferrer"  download > My resume </a>        
          </div>
    </div>
  )
}

export default Home