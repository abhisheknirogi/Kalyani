import React, { useEffect } from "react";
import "./flower.css";

const FlowerAnimation = () => {
  useEffect(() => {
    const petals = document.querySelectorAll(".petal");

    petals.forEach((petal) => {
      petal.style.left = Math.random() * 100 + "vw";
      petal.style.animationDelay = Math.random() * 2 + "s";
    });

    // Remove animation after it ends to save performance
    const timer = setTimeout(() => {
      petals.forEach((petal) => {
        petal.style.display = "none";
      });
    }, 4500); // matches animation duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flower-container">
      {[...Array(12)].map((_, i) => (
        <span key={i} className="petal">
          🌸
        </span>
      ))}
    </div>
  );
};

export default FlowerAnimation;
