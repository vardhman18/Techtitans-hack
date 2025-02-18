import React, { useState, useEffect } from "react";
import "./InfoSection.css";

const images = [
  "/assets/image1.jpg",
  "/assets/image2.jpg",
  "/assets/image3.jpg",
  "/assets/image4.jpg"
];

const InfoSection = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="info-section">
      {/* Left Side - Text */}
      <div className="info-text">
        <h2 className="animated-text">
          Stay <span className="highlight">Informed.</span> <br />
          Stay <span className="highlight">Connected.</span>
        </h2>
        <p className="description">
          Your go-to platform for the latest campus news, events, and opportunities.
        </p>
        <a href="#" className="cta-button">
          Join Now
        </a>
      </div>

      {/* Right Side - Animated Image */}
      <div className="info-image">
        <img src={images[currentImage]} alt="Campus Buzz" className="animated-image" />
      </div>
    </div>
  );
};

export default InfoSection;
