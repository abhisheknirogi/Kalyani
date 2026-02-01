import React, { useState } from "react";

const Gallery = () => {
  const [imageError, setImageError] = useState({});

  const galleryImages = [
    { id: 1, alt: "Bridal saree draping service" },
    { id: 2, alt: "Party saree styling" },
    { id: 3, alt: "Traditional saree draping" },
    { id: 4, alt: "Wedding saree arrangement" },
    { id: 5, alt: "Festive saree styling" },
    { id: 6, alt: "Professional saree draping" },
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
              src="https://via.placeholder.com/400"
              alt={image.alt}
              loading="lazy"
              onError={() => handleImageError(image.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
