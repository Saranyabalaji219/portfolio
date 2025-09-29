import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Hero/Home'
import About from './Component/About/About'
import Skills from './Component/Skills/Skills'
import Projects from './Component/Projects/Projects'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
const App = () => {
  return (
    <div >
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App