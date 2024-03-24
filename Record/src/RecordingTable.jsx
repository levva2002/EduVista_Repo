// RecordingTable.js
import React from 'react';
import './RecordingTable.css';

function RecordingTable({ recordings, onRecordingEdit }) {
  const handleEditClick = (index) => {
    const updatedTitle = prompt('Enter new title:');
    if (updatedTitle !== null) {
      const updatedRecording = { ...recordings[index], title: updatedTitle };
      onRecordingEdit(index, updatedRecording);
    }
  };

  return (
    <div className="recording-table">
      <h2>Recordings</h2>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Title</th>
            <th>Subject</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {recordings.map((recording, index) => (
            <tr key={index}>
              <td>{recording.type}</td>
              <td>{recording.title}</td>
              <td>{recording.subject}</td>
              <td>
                <button onClick={() => handleEditClick(index)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecordingTable;
