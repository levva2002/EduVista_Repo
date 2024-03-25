import React from 'react';
import './tutormain.css';
import TutorPageTitle from './TutorPageTitle';
import TutorDashboard from './TutorDashboard';

function TutorMain() {
  return (
    <main id="main" className="main">
      <TutorPageTitle />
      <TutorDashboard />
    </main>
  );
}

export default TutorMain;
