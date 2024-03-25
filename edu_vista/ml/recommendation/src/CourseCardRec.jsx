import React, { useState } from "react";
import "./CourseCardRec.css"; // Assuming there's a CSS file for styling

// Import images for different subjects
import webDevelopmentImage from "./assets/Unknown-2.jpg";
import musicalInstrumentsImage from "./assets/Unknown-3.jpg";
import graphicDesignImage from "./assets/collection-colored-thin-icon-learning-subject-book-graduated-hat-learning-education-concept-vector-illustration_168824-141.jpg.avif";
import businessFinanceImage from "./assets/Unknown-5.jpg";

function CourseCard({ title, price, level, subject, numReviews, numSubscribers }) {
  // Determine the image based on the subject
  let imageSrc;
  switch (subject) {
    case "Web Development":
      imageSrc = webDevelopmentImage;
      break;
    case "Musical Instruments":
      imageSrc = musicalInstrumentsImage;
      break;
    case "Graphic Design":
      imageSrc = graphicDesignImage;
      break;
    case "Business Finance":
      imageSrc = businessFinanceImage;
      break;
    default:
      imageSrc = null; // Default image if subject is not recognized
  }

  // Display "Free" if the price is 0, otherwise display the price with a dollar sign
  const displayPrice = price === 0 ? "Free" : `$${price}`;

  // State to manage whether the details are visible or not
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="card-container">
      <div className="image-container">
        <img src={imageSrc} alt="course" />
      </div>
      <div className="details-container">
        <h2 className="course-title">{title}</h2>
        <hr></hr>
        <div className="details">
          <p className="level">Level: {level}</p>
          <p className="subject">Subject: {subject}</p>
          <p className="reviews">Reviews: {numReviews}</p>
          <p className="subscribers">Subscribers: {numSubscribers}</p>
        </div>
        
      </div>
    </div>
  );
}

export default CourseCard;
