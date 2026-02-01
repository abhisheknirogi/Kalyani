import React from "react";
import { FaPhone } from "react-icons/fa";

const whatsappNumber = "919380132306"; // 🔁 replace with real number

const services = [
  {
    category: "Facials & Rituals",
    items: [
      "Bleach",
      "Luxury Facials / Rituals",
      "Clean Ups",
    ],
  },
  {
    category: "Threading & Waxing",
    items: ["Threading", "Waxing"],
  },
  {
    category: "Hand & Feet Care",
    items: [
      "Manicure",
      "Spa Manicure",
      "Pedicure",
      "Spa Pedicure",
    ],
  },
  {
    category: "Nail Care",
    items: ["Nail Paint", "Nail Art", "Nail Filling"],
  },
  {
    category: "Hair Styling",
    items: [
      "Hair Cut",
      "Ironing",
      "Blow Dry",
      "Roller Setting",
      "Shampoo & Conditioning",
      "Head Massage",
      "Oiling",
    ],
  },
  {
    category: "Hair Colouring",
    items: [
      "Global Colouring",
      "Root Touch Up",
      "Colour Protection",
    ],
  },
  {
    category: "Make Up",
    items: [
      "Party Make Up",
      "Engagement Make Up",
      "Bridal & Reception Make Up",
      "Base Make Up",
      "Eye Make Up",
    ],
  },
  {
    category: "Hair Texture",
    items: [
      "Rebonding",
      "Perming",
      "Keratin",
      "Smoothening",
    ],
  },
  
];

const createWhatsAppLink = (serviceName) => {
  const message = `Hello, I would like to book the ${serviceName} service. Please share the details.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};

const Services = () => {
  return (
    <section id="services" className="services-section" aria-label="Salon services">
      <div className="container">
        <h2 className="section-title">Our Salon Services</h2>
        <p className="section-subtitle">
          All salon services are available exclusively at our studio.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3 id={`service-${index}`}>{service.category}</h3>

              <ul aria-labelledby={`service-${index}`}>
                {service.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div style={{ marginTop: 16, display: "flex", gap: 8, alignItems: "center" }}>
                <a
                  href={createWhatsAppLink(service.category)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-small"
                  aria-label={`Book ${service.category} via WhatsApp`}
                >
                  Book Now
                </a>

                <a
                  href={`tel:+91${whatsappNumber}`}
                  className="btn btn-small"
                  aria-label={`Call to enquire about ${service.category}`}
                  style={{ background: "transparent", border: "1px solid rgba(0,0,0,0.06)", color: "var(--text)" }}
                >
                  <FaPhone style={{ marginRight: 8 }} />
                  Call
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
