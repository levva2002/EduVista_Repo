import React, { useState } from 'react';

function FilterCard({ 
  subjectFilter, 
  filterBySubject, 
  clearSubjectFilter, 
  levelFilter, 
  filterByLevel, 
  clearLevelFilter,
  numReviewsFilter,
  filterByNumReviews,
  clearNumReviewsFilter
}) {
  const [showSubjects, setShowSubjects] = useState(false);
  const [showLevels, setShowLevels] = useState(false);
  const [showNumReviews, setShowNumReviews] = useState(false);

  const toggleSubjects = () => {
    setShowSubjects(!showSubjects);
  };

  const toggleLevels = () => {
    setShowLevels(!showLevels);
  };

  const toggleNumReviews = () => {
    setShowNumReviews(!showNumReviews);
  };

  return (
    <div className="filter-container">
      <div className="filter-title">Filters:</div>
      <div className="toggle-subjects-button" onClick={toggleSubjects}>
        <button className="filter-button">Subjects</button>
      </div>
      {showSubjects && (
        <div className="filter-options">
          <span className="filter-option" onClick={() => filterBySubject('Web Development')}>Web Development</span>
          <span className="filter-option" onClick={() => filterBySubject('Musical Instruments')}>Musical Instruments</span>
          <span className="filter-option" onClick={() => filterBySubject('Graphic Design')}>Graphic Design</span>
          <span className="filter-option" onClick={() => filterBySubject('Business Finance')}>Business Finance</span>
        </div>
      )}
      <div className="toggle-levels-button" onClick={toggleLevels}>
        <button className="filter-button">Levels</button>
      </div>
      {showLevels && (
        <div className="filter-options">
          <span className="filter-option" onClick={() => filterByLevel('All Levels')}>All Levels</span>
          <span className="filter-option" onClick={() => filterByLevel('Beginner Level')}>Beginner Level</span>
          <span className="filter-option" onClick={() => filterByLevel('Intermediate Level')}>Intermediate Level</span>
          <span className="filter-option" onClick={() => filterByLevel('Expert Level')}>Expert Level</span>
        </div>
      )}
      <div className="toggle-reviews-button" onClick={toggleNumReviews}> {/* Added toggle-reviews-button class */}
        <button className="filter-button">Number of Reviews</button>
      </div>
      {showNumReviews && (
        <div className="filter-options">
          <span className="filter-option" onClick={() => filterByNumReviews('0-500')}>0-500</span>
          <span className="filter-option" onClick={() => filterByNumReviews('501-1000')}>501-1000</span>
          <span className="filter-option" onClick={() => filterByNumReviews('1001-2000')}>1001-2000</span>
          <span className="filter-option" onClick={() => filterByNumReviews('2001-3000')}>2001-3000</span>
        </div>
      )}
    </div>
  );
}

export default FilterCard;
