import React from 'react';
import './studentheader.css';
import StudentLogo from './StudentLogo';
import StudentSearchBar from './StudentSearchBar';
// import Nav from './Nav';

function StudentHeader() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <StudentLogo />
      <StudentSearchBar />
      {/* <Nav /> */}
    </header>
  );
}

export default StudentHeader;
