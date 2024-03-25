import React from 'react'
import './logo.css';

function logo() {
    const handleToggleSidebar = () => {
        document.body.classList.toggle('toggle-sidebar');
    };
  return (
    <div className='d-flex align-items-center justify-content-between'>
        <a href='/' className='logo d-felx align-items-center'>
            {/* <img src='admin/src/images/9850812.png' alt='Logo of eduvista'/> */}
            <span className='d-none d-lg-block'>AdminDashboard</span>
        </a>
        <i 
        className="bi bi-list toggle-sidebar-btn" 
        onClick={handleToggleSidebar}>
        </i>

        
    </div>
  )
}

export default logo