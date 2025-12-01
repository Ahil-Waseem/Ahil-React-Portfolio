import React from 'react'
import './About.css'
import profile from "../../assets/Ahil-profile2.jpg"
const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        {/* <img src={profile} alt="" /> */}
      </div>
      <div className='about-section'>
        <div className="about-left">
          <img src={profile} alt="Ahil Waseem - Full Stack and WordPress Developer" />
      </div>
      {/* </div> */}
<div className='about-right'>
    <div className="about-para">
            <p>
              My name is Ahil Waseem. I am a Full Stack Website Developer and WordPress Developer with 1.7+ years of experience. I have worked on frontend development, web development, software development, and technical SEO. I have worked at Unstoppable Creative Agency as a Frontend Developer and built responsive, fast-loading websites for clients.
            </p>
            <p>
              I specialize in HTML, CSS, JavaScript, WordPress, MERN stack, software installation, and IT troubleshooting. I enjoy building modern websites, e-commerce platforms, web apps, and improving website performance. I’m open to new opportunities in web development and IT operations.
            </p>
    </div>
    <div className="about-skills">
        
        <div className="about-skill">
                          <p>HTML & CSS</p> <hr style={{width: "50%"}}/></div>
                      <div className="about-skill"><p>Java-Script</p><hr style={{ width: "50%" }} /></div>
                      <div className="about-skill"><p>React.Js</p><hr style={{ width: "50%" }} /></div>
                      <div className="about-skill"><p>MEARN STACK</p><hr style={{ width: "50%" }} /></div>
    </div>
</div>


    </div>
          <div className="about-achivements">
              <div className="about-achivement">
                  <h1>1.7+</h1>
                  <p>Year of Experience</p>
              </div>
              <hr/>
              <div className="about-achivement">
                  <h1>10+</h1>
                  <p>Projects Completed</p>
              </div>
              <hr />
              <div className="about-achivement">
                  <h1>New Skills</h1>
                  <p>Adding...</p>
              </div>
          </div>
    </div>
  )
}

export default About
