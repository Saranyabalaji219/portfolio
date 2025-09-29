import React, { useState } from 'react';
import Navbar from './Component/Navbar';
import Home from './Component/Hero/Home';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Projects from './Component/Projects/Projects';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';

const App = () => {
  const [page, setPage] = useState("home");

  return (
    <div className="app-container">
      <Navbar setPage={setPage} />

      {page === "home" && <div className="page"><Home /></div>}
      {page === "about" && <div className="page"><About /></div>}
      {page === "skills" && <div className="page"><Skills /></div>}
      {page === "projects" && <div className="page"><Projects /></div>}
      {page === "contact" && <div className="page"><Contact /></div>}

      <Footer />
    </div>
  );
};


export default App;
