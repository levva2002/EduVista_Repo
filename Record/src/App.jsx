// App.js
import React, { useState } from 'react';
import RecordingTable from './RecordingTable';
import RecordingForm from './RecordingForm';
import './App.css';

function App() {
  const [recordings, setRecordings] = useState([]);

  const handleRecordingSubmit = (newRecording) => {
    setRecordings([...recordings, newRecording]);
  };

  const handleRecordingEdit = (index, updatedRecording) => {
    const updatedRecordings = [...recordings];
    updatedRecordings[index] = updatedRecording;
    setRecordings(updatedRecordings);
  };

  return (
    <div className="app">
      <div className="background-image"></div> 
      <div className="content">
      <h1>EduVista Recording Platform</h1>
      <RecordingForm onRecordingSubmit={handleRecordingSubmit} />
      <RecordingTable recordings={recordings} onRecordingEdit={handleRecordingEdit} />
      </div>
    </div>
  );
}

export default App;
