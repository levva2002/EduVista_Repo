import React, { useState, useEffect } from 'react';
import image1 from './assets/Machine_Learning.jpg';
import image2 from './assets/Top-12-Pioneers-in-Education-scaled.jpg';
import image3 from './assets/person-holds-a-book-over-a-stack-and-turns-the-page.jpg';   
import './CourseSlideShow.css'; 

function Slideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [image1, image2, image3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(intervalId);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <img src={images[currentImageIndex]} alt="Slideshow" className="slideshow-image" />
      <button className="prev" onClick={handlePrev}>&#10094;</button>
      <button className="next" onClick={handleNext}>&#10095;</button>
    </div>
  );
}

export default Slideshow;
