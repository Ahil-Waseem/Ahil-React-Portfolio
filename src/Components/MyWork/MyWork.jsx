import React from 'react'
import "./MyWork.css"
import mywork from "../../assets/mywork_data"
const MyWork = () => {
  return (
    <div className='my_work'>
      <div className="mywork-title">
        <h1>My Latest Works</h1>
      </div>
      <div className="mywork-container">
        {mywork.map((work,index) =>{
            return <img src={work.w_img} alt="" key={index} />
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
