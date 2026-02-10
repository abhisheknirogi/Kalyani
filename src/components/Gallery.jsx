import React, { useState } from "react";

const Gallery = () => {
  const [imageError, setImageError] = useState({});

  const galleryImages = [
  { id: 1, src: "/files/1.jpeg", alt: "Bridal saree draping service" },
  { id: 2, src: "/files/2.jpeg", alt: "Party saree styling" },
  { id: 4, src: "/files/4.jpeg", alt: "Wedding saree arrangement" },
  { id: 5, src: "/files/5.jpeg", alt: "Festive saree styling" },
];


  const handleImageError = (id) => {
    setImageError((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((image) => (
           <img
  key={image.id}
  src={image.src}
  alt={image.alt}
  loading="lazy"
/>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
