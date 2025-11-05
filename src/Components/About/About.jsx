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
          <img src={profile} alt="" />
      </div>
      {/* </div> */}
<div className='about-right'>
    <div className="about-para">
                      <p>My name is Ahil Waseem. I am a graduate from JNCU University and have completed a Diploma in Full Stack Development from IIHT Institute, Vashi. I have 1.7 years of experience in the IT field, including Frontend Development, Web and Software Development, and Technical SEO. I have worked at Unstoppable Creative Agency as a Frontend Developer, where I created responsive and visually appealing websites.</p>
                      <p> I am skilled in HTML, CSS, JavaScript, WordPress, software installation, and troubleshooting. I am passionate about both Software Development and IT operations, and I am open to opportunities in either field to enhance my professional growth</p>
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
