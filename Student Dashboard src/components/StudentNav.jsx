import React from 'react';
import './studentnav.css';

import StudentNavSearch from './StudentNavSearch';


function StudentNav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <StudentNavSearch />
      </ul>
    </nav>
  );
}

export default StudentNav;
