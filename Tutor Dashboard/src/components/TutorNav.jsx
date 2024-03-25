import React from 'react';
import './tutornav.css';

import TutorNavSearch from './TutorNavSearch';

function TutorNav() {
  return (
    <nav className="header-nav ms-auto">
      <ul className="d-flex align-items-center">
        <TutorNavSearch />
      </ul>
    </nav>
  );
}

export default TutorNav;
