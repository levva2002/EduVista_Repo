import React from 'react';
import './studentmain.css';
import StudentPageTitle from './StudentPageTitle';
import StudentDashboard from './StudentDashboard';

function StudentMain() {
  return (
    <main id="main" className="main">
      <StudentPageTitle />
      <StudentDashboard />
    </main>
  );
}

export default StudentMain;
