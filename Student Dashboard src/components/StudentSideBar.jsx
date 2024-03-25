import React from 'react';
import './studentsideBar.css';
import navList from '../data/StudentnavItem';

function StudentSideBar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>


        <li className="nav-heading">Pages</li>
        {navList.map(nav => (
          <li className="nav-item" key={nav._id}>
            <a className="nav-link collapsed" href="#">
              <i className={nav.icon}></i>
              <span>{nav.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default StudentSideBar;
