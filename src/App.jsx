import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Services from './Components/Services/Services'
import MyWork from './Components/MyWork/MyWork'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      <a
        href="https://wa.me/919793167187"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

    </div>
  )
}

export default App
