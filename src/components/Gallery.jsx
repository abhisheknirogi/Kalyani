import React from "react";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          <img src="https://via.placeholder.com/400" alt="Saree 1" />
          <img src="https://via.placeholder.com/400" alt="Saree 2" />
          <img src="https://via.placeholder.com/400" alt="Saree 3" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
