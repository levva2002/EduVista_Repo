import React from 'react';
import './tutorheader.css';
import TutorLogo from './TutorLogo';
import TutorSearchBar from './TutorSearchBar';
// import Nav from './Nav';

function TutorHeader() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <TutorLogo/>
      <TutorSearchBar />
      {/* <Nav /> */}
    </header>
  );
}

export default TutorHeader;
