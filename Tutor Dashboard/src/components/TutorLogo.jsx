import React from 'react';
import './tutorlogo.css';

function TutorLogo() {
  const handleToggleSideBar = () => {
    document.body.classList.toggle('toggle-sidebar');
  };
  return (
    <div className="d-flex align-items-center justify-content-between">
      <a href="/" className="logo d-flex align-items-center">
        {/* <img src="" alt=""/> */}
        <span className="d-none d-lg-block">TutorDashboard</span>
      </a>
      <i
        className="bi bi-list toggle-sidebar-btn"
        onClick={handleToggleSideBar}
      ></i>
    </div>
  );
}

export default TutorLogo;
