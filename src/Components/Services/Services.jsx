import React, { useState } from "react";
import "./Services.css";
import services_data from "../../assets/services_data";

const Services = () => {
  // Track which service is expanded
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {services_data.map((item) => {
          const isExpanded = expanded === item.id;
          const shortText = item.description.slice(0, 100) + "...";

          return (
            <div className="service-card" key={item.id}>
              <div className="service-icon">{item.icon}</div>
              <div className="service-title">{item.title}</div>
              <div className="service-description">
                {isExpanded ? item.description : shortText}
              </div>
              <button
                className="read-more-btn"
                onClick={() => handleToggle(item.id)}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
