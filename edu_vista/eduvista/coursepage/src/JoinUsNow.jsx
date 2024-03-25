import React from 'react';
import './JoinUsNow.css'; // Importing the CSS file for styling
import joinUsVideo from './assets/pexels_videos_3718 (1080p).mp4'; // Importing the video asset

function JoinUsNow() {
  return (
    <div className="join-us-container"> {/* Container for the join us section */}
      <div className="join-us-content"> {/* Content wrapper for the join us section */}
        <div className="join-us-image-container"> {/* Container for the video */}
          {/* Video element for displaying the join us video */}
          <video autoPlay muted loop className="join-us-image">
            {/* Source of the video */}
            <source src={joinUsVideo} type="video/mp4" />
            {/* Fallback content if the browser does not support video tag */}
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="join-us-text"> {/* Container for the text content */}
          <h1 className="join-us-heading">Join Us Now</h1> {/* Heading */}
          <p className="join-us-sentence"> {/* Sentence describing the action */}
            Unlock exciting opportunities and join our vibrant community of passionate educators and learners today!
          </p>
          <button className="join-us-button">Become an Edu Vista Partner</button> {/* Button to become a partner */}
        </div>
      </div>
    </div>
  );
}

export default JoinUsNow; // Exporting the JoinUsNow component for use in other parts of the application
