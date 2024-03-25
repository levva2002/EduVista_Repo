import React, { useState } from "react"; // Importing React and the useState hook from React
import "./CourseCard.css"; // Importing the CSS file for styling
import CourseDetails from "./CourseDetails"; // Importing the CourseDetails component

// Importing images for different subjects
import webDevelopmentImage from "./assets/Unknown-2.jpeg";
import musicalInstrumentsImage from "./assets/Unknown-3.jpeg";
import graphicDesignImage from "./assets/Unknown-4.jpeg";
import businessFinanceImage from "./assets/Unknown-5.jpeg";

// CourseCard component definition
function CourseCard({ title, price, level, subject, numReviews, numSubscribers }) {

  let imageSrc; // Declaring a variable to hold the image source

  // Switch statement to determine the image source based on the subject
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
      imageSrc = null; // Default to null if subject doesn't match
  }

  const displayPrice = price === 0 ? "Free" : `$${price}`; // Formatting price display

  const [showDetails, setShowDetails] = useState(false); // State for toggling course details

  // Render the CourseCard component
  return (
    <div className="card-container" onMouseEnter={() => setShowDetails(true)} onMouseLeave={() => setShowDetails(false)}>
      <div className="image-container">
        <img src={imageSrc} alt="course" /> {/* Displaying the course image */}
      </div>
      <div className="details-container">
        <h2 className="course-title">{title}</h2> {/* Displaying the course title */}
        <div className="details">
          <p className="price">Price: {displayPrice}</p> {/* Displaying the course price */}
          <p className="level">Level: {level}</p> {/* Displaying the course level */}
          {numSubscribers > 1000 && <div className="best-seller-tag">Best Sellers</div>} {/* Displaying a tag if course is a best seller */}
        </div>

        {/* Rendering CourseDetails component if showDetails is true */}
        {showDetails && (
          <CourseDetails
            title={title}
            price={displayPrice}
            level={level}
            numReviews={numReviews}
            numSubscribers={numSubscribers}
          />
        )}
      </div>
    </div>
  );
}

export default CourseCard; // Exporting the CourseCard component
