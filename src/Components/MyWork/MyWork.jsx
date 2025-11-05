import React from 'react'
import "./MyWork.css"
import mywork from "../../assets/mywork_data"
const MyWork = () => {
  return (
    <div id="projects" className='my_work'>
      <div className="mywork-title">
        <h1>My Latest Works</h1>
      </div>

      <div className="mywork-container">
        {mywork.map((work, index) => {
          return (
            <a
              key={index}
              href={work.w_link}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
            >
              <img src={work.w_img} alt={work.w_name} />
            </a>
          );
        })}
      </div>
          <div className="mywork-showmore">
            <p>Show More</p>
              <i className="fa-solid fa-arrow-right"></i>
          </div>
    </div>
  )
}

export default MyWork
