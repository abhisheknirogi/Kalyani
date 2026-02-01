import React, { useEffect } from "react";
import "./flower.css";

const FlowerAnimation = ({ petalCount = 12, emoji = "🌸" }) => {
  useEffect(() => {
    const petals = document.querySelectorAll(".petal");

    petals.forEach((petal) => {
      const randomLeft = Math.random() * 100;
      const randomDelay = Math.random() * 2;
      const randomDuration = 3.5 + Math.random() * 1; // 3.5s to 4.5s
      const randomRotation = Math.random() * 360;

      petal.style.left = randomLeft + "vw";
      petal.style.animationDelay = randomDelay + "s";
      petal.style.animationDuration = randomDuration + "s";
      petal.style.transform = `rotate(${randomRotation}deg)`;
    });

    // Remove petals after animation completes to save performance
    const timer = setTimeout(() => {
      petals.forEach((petal) => {
        petal.style.display = "none";
      });
    }, 5500); // extended to account for variable duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flower-container">
      {[...Array(petalCount)].map((_, i) => (
        <span key={i} className="petal">
          {emoji}
        </span>
      ))}
    </div>
  );
};

export default FlowerAnimation;
