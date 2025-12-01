import React from 'react';
import "./MyWork.css";
import mywork from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <section id="projects" className="my_work" aria-labelledby="mywork-title">

      {/* ---- Section Title ---- */}
      <header className="mywork-title">
        <h2 id="mywork-title">My Latest Works</h2>
      </header>

      {/* ---- Project Grid ---- */}
      <div className="mywork-container">
        {mywork.map((work, index) => {
          return (
            <article
              key={index}
              className="work-card"
              aria-label={`Project: ${work.w_name}`}
            >
              <a
                href={work.w_link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open project: ${work.w_name}`}
              >
                <img
                  src={work.w_img}
                  alt={`${work.w_name} - Project preview`}
                  loading="lazy"
                />
              </a>

              {/* ---- Optional SEO-Friendly Title Below Image ---- */}
              <h3 className="work-title">{work.w_name}</h3>
            </article>
          );
        })}
      </div>

      {/* ---- Show More Button ---- */}
      <div className="mywork-showmore">
        <a
          href="#"
          className="show-more-btn"
          aria-label="Show more projects"
        >
          Show More <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>

    </section>
  );
};

export default MyWork;
