import React from 'react'
import "./Hero.css"
import profile from "../../assets/profile-1.png"

const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile} alt="" />
      <h1><span>I'am Ahil Waseem,</span> Full Stack Devloper based in INDIA</h1>
      <p>I am a graduate from JNCU University and have completed a Diploma in Full Stack Development from IIHT Institute, Vashi. I have 1.7 years of experience in the IT field, including Frontend Development, Web and Software Development, and Technical SEO. </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>

      </div>
    </div>
  )
}

export default Hero
