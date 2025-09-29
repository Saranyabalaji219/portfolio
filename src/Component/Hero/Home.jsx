import React from 'react'
import './Home.css'
import profile1 from '../../assets/profile1.jpg'

const Home = () => {
  return (
    <div id='home' className='Home'>
        <img src={profile1} alt="" className='profile1'/>
        <h1><span>Hi! I'm Saranya,</span> </h1>
        <p className='p1'>Java Fullstack Developer</p>
        <p>Welcome to my Portfolio 😊</p>
        <div className="hero-action">
           <a href="#contact" className="hero-connect">Connect with me</a>
            <a href="/resume.pdf"  className="hero-resume"  target="_blank"   rel="noopener noreferrer"  download > My resume </a>        
          </div>
    </div>
  )
}

export default Home