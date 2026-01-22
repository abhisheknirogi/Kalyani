import React from "react";

const services = [
  {
    title: "Custom Draping",
    desc: "Perfect saree draping for events, photoshoots, and traditional ceremonies.",
  },
  {
    title: "Styling Consultation",
    desc: "Get the best blouse style, accessories, and color pairing for your look.",
  },
  {
    title: "Saree Care",
    desc: "Expert tips for washing, storing, and maintaining your sarees safely.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{/* Add icon later */}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <a href="#contact" className="btn btn-small">
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
