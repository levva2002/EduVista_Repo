// App.js
import React, { useState } from 'react';
import './App.css';

const subjects = ['Web Development', 'Music', 'Business', 'Finance', 'Graphic Design'];
const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

function App() {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedLevel, setSelectedLevel] = useState('');

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  return (
    <div className='contiainer-main'>
          <div className="container">
      <h1>EduVista Recommendation Platform</h1>
      <div className="form-group">
        <label htmlFor="subject">What is the field of subject you want to learn?</label>
        <select id="subject" value={selectedSubject} onChange={handleSubjectChange}>
          <option value="">Select</option>
          {subjects.map((subject, index) => (
            <option key={index} value={subject}>{subject}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="level">How much of a knowledge do you cater?</label>
        <select id="level" value={selectedLevel} onChange={handleLevelChange}>
          <option value="">Select</option>
          {levels.map((level, index) => (
            <option key={index} value={level}>{level}</option>
          ))}
        </select>
      </div>
      <div className="filter-options">
        <h2>Filter the raitings (Existing courses) ?</h2>
        <button>Highly Rated</button>
        <button>Moderately Rated</button>
        <button>Low Rated</button>
      </div>
    </div>
    </div>
  );
}

export default App;
