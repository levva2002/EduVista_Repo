import React from 'react';
import './tutorfooter.css';

function TutorFooter() {
  return (
    <footer id="footer" className="footer">
      <div className="copyright">
        &copy; Copyright{' '}
        <strong>
          <span>EduVista</span>
        </strong>
        . All Rights Reserved
      </div>
      {/* <div className="credits">
        Designed by <a href="#">EduVista Team</a>
      </div> */}
    </footer>
  );
}

export default TutorFooter;
