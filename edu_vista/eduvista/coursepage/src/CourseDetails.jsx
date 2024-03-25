import React from "react";
import "./CourseDetails.css";

function CourseDetails({ title, price, level, numReviews, numSubscribers, publishedDate, addToCart }) {
  let levelClassName = "";
  switch (level.toLowerCase()) {
    case "beginner":
      levelClassName = "beginner-level";
      break;
    case "intermediate":
      levelClassName = "intermediate-level";
      break;
    case "advanced":
      levelClassName = "advanced-level";
      break;
    default:
      levelClassName = "";
  }

  const randomPublishedDate = new Date(
    new Date() - Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000
  ).toLocaleDateString();

  const handleAddToCart = () => {
    // Create a course object
    const course = {
      title,
      price,
      level,
      numReviews,
      numSubscribers,
      publishedDate: publishedDate || randomPublishedDate // Use provided publishedDate or generate a random one
    };
    // Call the addToCart function passed from the parent component and pass the course object
    addToCart(course);
  };

  return (
    <div className="course-details-dialog left-position"> 
      <div className="course-details-content">
        <p className="title">{title}</p> 
        <hr /> 
        <div className={`info`}>
          <div className={`level-box ${levelClassName}`}>
            <p className="level">{level}</p> 
          </div>
          <p>{numReviews} reviews</p>
          <p className="price">Price: {price}</p>
        </div>
        <p>{numSubscribers} subscribers</p> 
        <p>Published Date: <span className="green-date">{publishedDate || randomPublishedDate}</span></p> 
        {/* Call handleAddToCart function when the button is clicked */}
        <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button> 
      </div>
    </div>
  );
}

export default CourseDetails;
