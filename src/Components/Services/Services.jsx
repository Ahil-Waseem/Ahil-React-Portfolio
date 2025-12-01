import React, { useState } from "react";
import "./Services.css";
import services_data from "../../assets/services_data";

const Services = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="services" className="services" aria-labelledby="services-title">

      {/* Section Title */}
      <header className="services-title">
        <h2 id="services-title">My Services</h2>
      </header>

      <div className="services-container">
        {services_data.map((item) => {
          const isExpanded = expanded === item.id;
          const shortText = item.description.slice(0, 120) + "...";

          return (
            <article
              key={item.id}
              className="service-card"
              aria-label={`Service: ${item.title}`}
            >

              {/* Icon */}
              <div className="service-icon" aria-hidden="true">
                {item.icon}
              </div>

              {/* Service Title */}
              <h3 className="service-title">{item.title}</h3>

              {/* Short / Full Description */}
              <p className="service-description">
                {isExpanded ? item.description : shortText}
              </p>

              {/* Read More Button */}
              <button
                className="read-more-btn"
                onClick={() => handleToggle(item.id)}
                aria-expanded={isExpanded}
                aria-controls={`service-desc-${item.id}`}
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>

            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
