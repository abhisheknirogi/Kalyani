import React from "react";

const whatsappNumber = "919876543210"; // 🔁 replace with real number

const services = [
  {
    category: "Facials & Rituals",
    items: [
      "Bleach",
      "Luxury Facials / Rituals",
      "Clean Ups",
      "Body Polishing / Rejuvenation",
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
  {
    category: "Hair Treatments",
    items: [
      "Spa Treatments",
      "Volumizing",
      "Advanced Hair Moisturising",
      "Scalp Treatments",
    ],
  },
];

const createWhatsAppLink = (serviceName) => {
  const message = `Hello, I would like to book the "${serviceName}" service. Please share the details.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message
  )}`;
};

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <h2 className="section-title">Our Salon Services</h2>
        <p className="section-subtitle">
          All salon services are available exclusively at our studio.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.category}</h3>

              <ul>
                {service.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href={createWhatsAppLink(item)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-link"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
