
import React, { useEffect, useState } from 'react';
import './CourseHeader.css'; 

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isSticky ? 'sticky' : ''}>
      <h1>EduVista Courses</h1>
      <nav>
        <ul>
          <li><a href="#">All courses</a></li>
          <li><a href="#">My Lists</a></li>
          <li><a href="#">Wishlist</a></li>
          <li><a href="#">Archived</a></li>
          <li><a href="#">Learning tools</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
        </div>
      </nav>
      <hr />
    </header>
  );
}

export default Header;
