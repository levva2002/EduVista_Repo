// Filter.jsx

import React, { useState } from 'react';

const courseTypes = ['Math', 'Science', 'History', 'English', 'Art', 'Music', 'Physical Education', 'Computer Science']; // Assume 8 course types

function Filter({ onFilter }) {
  const [selectedType, setSelectedType] = useState('');

  const handleTypeChange = (type) => {
    setSelectedType(type);
    onFilter(type);
  };

  return (
    <div className="filter">
      <label htmlFor="course-type">Filter by Course Type:</label>
      <select id="course-type" value={selectedType} onChange={(e) => handleTypeChange(e.target.value)}>
        <option value="">All Types</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
