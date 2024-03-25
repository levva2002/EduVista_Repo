import React from "react";
import "./CourseDetails.css";

function CourseDetails({ title, price, level, numReviews, numSubscribers, publishedDate }) {
  // Determine the class name based on the level
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

  // Generate a random published date (dummy date)
  const randomPublishedDate = new Date(
    new Date() - Math.floor(Math.random() * 100) * 24 * 60 * 60 * 1000
  ).toLocaleDateString();

  return (
    <div className="course-details-dialog left-position"> {/* Apply left-position class here */}
      <div className="course-details-content">
        <p className="title">{title}</p> {/* Display the provided title in bold */}
        <hr /> {/* Horizontal line below the topic */}
        <div className={`info`}>
          <div className={`level-box ${levelClassName}`}>
            <p className="level">{level}</p> {/* Display the level with appropriate styles */}
          </div>
          <p>{numReviews} reviews</p>
          <p className="price">Price: {price}</p> {/* Display the price with the dollar sign */}
        </div>
        <p>{numSubscribers} subscribers</p> {/* Display subscribers count */}
        <p>Published Date: <span className="green-date">{publishedDate || randomPublishedDate}</span></p> {/* Use provided publishedDate or the dummy date */}
        <button className="add-to-cart-button">Add to Cart</button> {/* Add the Add to Cart button */}
      </div>
    </div>
  );
}

export default CourseDetails;
