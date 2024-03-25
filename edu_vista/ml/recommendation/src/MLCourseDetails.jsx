// CourseDetails.jsx

import React from 'react';
import './MLCourseDetails.css'; // Import CSS file for styling
// Functional component for displaying course details
function CourseDetails({ course }) {
  // Destructure props to extract course information
  const { title, level, numSubscribers, numReviews, subject, image } = course;

  // Function to handle adding the course to the cart
  const handleAddToCart = () => {
    // Placeholder functionality to alert when course is added to cart
    alert(`Course "${title}" added to cart.`);
  };

  // JSX to render the course details
  return (
    <div className="course-details">
      {/* Display course image */}
      <img src={image} alt={title} className="course-image" />
      {/* Display course title */}
      <h2>{title}</h2>
      {/* Display course level */}
      <p><strong>Level:</strong> {level}</p>
      {/* Display number of subscribers */}
      <p><strong>Subscribers:</strong> {numSubscribers}</p>
      {/* Display number of reviews */}
      <p><strong>Number of Reviews:</strong> {numReviews}</p>
      {/* Display course subject */}
      <p><strong>Subject:</strong> {subject}</p>
      {/* Button to add course to cart */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
}

// Export the CourseDetails component
export default CourseDetails;
