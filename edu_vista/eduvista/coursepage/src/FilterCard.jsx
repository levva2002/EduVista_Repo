import React, { useState } from 'react';
import './FilterCard.css';

function FilterCard({ 
  subjectFilter, // Current subject filter value
  filterBySubject, // Function to filter courses by subject
  clearSubjectFilter, // Function to clear the subject filter
  levelFilter, // Current level filter value
  filterByLevel, // Function to filter courses by level
  clearLevelFilter, // Function to clear the level filter
  numReviewsFilter, // Current number of reviews filter value
  filterByNumReviews, // Function to filter courses by number of reviews
  clearNumReviewsFilter // Function to clear the number of reviews filter
})
 {
  // Define state variables to manage the visibility of different filter sections
const [showSubjects, setShowSubjects] = useState(false); // State variable for subject filter visibility, initially hidden
const [showLevels, setShowLevels] = useState(false); // State variable for level filter visibility, initially hidden
const [showNumReviews, setShowNumReviews] = useState(false); // State variable for number of reviews filter visibility, initially hidden

// Function to toggle the visibility of the subject filter section
const toggleSubjects = () => {
  setShowSubjects(!showSubjects); // Toggles the state of showSubjects to its opposite value
};

// Function to toggle the visibility of the level filter section
const toggleLevels = () => {
  setShowLevels(!showLevels); // Toggles the state of showLevels to its opposite value
};

// Function to toggle the visibility of the number of reviews filter section
const toggleNumReviews = () => {
  setShowNumReviews(!showNumReviews); // Toggles the state of showNumReviews to its opposite value
};


  return (
    <div className="filter-container"> {/* Main container for the filter card */}
      <div className="filter-title">Filters:</div> {/* Title of the filter card */}
      <div className="toggle-subjects-button" onClick={toggleSubjects}>
        {/* Button to toggle visibility of subject filter */}
        <button className="filter-button">Subjects</button> {/* Text for subject filter button */}
      </div>
      {showSubjects && (
        <div className="filter-options"> {/* Container for subject filter options */}
          <span className="filter-option" onClick={() => filterBySubject('Web Development')}>Web Development</span> {/* Option to filter by Web Development */}
          <span className="filter-option" onClick={() => filterBySubject('Musical Instruments')}>Musical Instruments</span> {/* Option to filter by Musical Instruments */}
          <span className="filter-option" onClick={() => filterBySubject('Graphic Design')}>Graphic Design</span> {/* Option to filter by Graphic Design */}
          <span className="filter-option" onClick={() => filterBySubject('Business Finance')}>Business Finance</span> {/* Option to filter by Business Finance */}
        </div>
      )}
      <div className="toggle-levels-button" onClick={toggleLevels}>
        {/* Button to toggle visibility of level filter */}
        <button className="filter-button">Levels</button> {/* Text for level filter button */}
      </div>
      {showLevels && (
        <div className="filter-options"> {/* Container for level filter options */}
          <span className="filter-option" onClick={() => filterByLevel('All Levels')}>All Levels</span> {/* Option to filter by All Levels */}
          <span className="filter-option" onClick={() => filterByLevel('Beginner Level')}>Beginner Level</span> {/* Option to filter by Beginner Level */}
          <span className="filter-option" onClick={() => filterByLevel('Intermediate Level')}>Intermediate Level</span> {/* Option to filter by Intermediate Level */}
          <span className="filter-option" onClick={() => filterByLevel('Expert Level')}>Expert Level</span> {/* Option to filter by Expert Level */}
        </div>
      )}
      <div className="toggle-reviews-button" onClick={toggleNumReviews}>
        {/* Button to toggle visibility of number of reviews filter */}
        <button className="filter-button">Number of Reviews</button> {/* Text for number of reviews filter button */}
      </div>
      {showNumReviews && (
        <div className="filter-options"> {/* Container for number of reviews filter options */}
          <span className="filter-option" onClick={() => filterByNumReviews('0-500')}>0-500</span> {/* Option to filter by 0-500 reviews */}
          <span className="filter-option" onClick={() => filterByNumReviews('501-1000')}>501-1000</span> {/* Option to filter by 501-1000 reviews */}
          <span className="filter-option" onClick={() => filterByNumReviews('1001-2000')}>1001-2000</span> {/* Option to filter by 1001-2000 reviews */}
          <span className="filter-option" onClick={() => filterByNumReviews('2001-3000')}>2001-3000</span> {/* Option to filter by 2001-3000 reviews */}
        </div>
      )}
    </div>
  );

}

export default FilterCard;
