// RecordingForm.js
import React, { useState } from 'react';
import './RecordingForm.css'

function RecordingForm({ onRecordingSubmit }) {
  const [recordingType, setRecordingType] = useState('');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecording = {
      type: recordingType,
      title,
      subject,
      link
    };
    onRecordingSubmit(newRecording);
    // Reset form fields
    setRecordingType('');
    setTitle('');
    setSubject('');
    setLink('');
  };

  return (
    <div className="recording-form">
      <form onSubmit={handleSubmit}>
        <label>
          Recording Type:
          <select value={recordingType} onChange={(e) => setRecordingType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="video">Video</option>
            <option value="link">Link</option>
          </select>
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        {recordingType === 'link' && (
          <label>
            Link:
            <input type="text" value={link} onChange={(e) => setLink(e.target.value)} />
          </label>
        )}
        {recordingType === 'video' && (
          <label>
            Upload Video:
            <input type="file" accept="video/*" />
          </label>
        )}
        <button type="submit">Upload Recording</button>
      </form>
    </div>
  );
}

export default RecordingForm;
