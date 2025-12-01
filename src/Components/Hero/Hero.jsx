import React from 'react';
import "./Hero.css";
import profile from "../../assets/profile-1.png";

const Hero = () => {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">

      {/* Main Hero Image */}
      <img
        src={profile}
        loading="lazy"
        alt="Ahil Waseem - Full Stack Developer from India"
      />

      {/* Main Heading */}
      <h1 id="hero-title">
        <span>I’m Ahil Waseem,</span> Full Stack Developer based in India
      </h1>

      {/* Short SEO-Friendly Intro */}
      <p>
        I am a Full Stack Developer with 1.7 years of experience in Frontend Development, Web Development, Software Development, and Technical SEO. I completed my Full Stack Diploma from IIHT Institute, Vashi, and hold a graduation degree from JNCU University.
      </p>

      {/* Action Buttons */}
      <div className="hero-action">
        <a
          href="#contact"
          className="hero-connect"
          aria-label="Connect with Ahil Waseem"
        >
          Connect With Me
        </a>

        <a
          href="#"
          className="hero-resume"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Ahil Waseem Resume"
        >
          My Resume
        </a>
      </div>

    </section>
  );
};

export default Hero;
