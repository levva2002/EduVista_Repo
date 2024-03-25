// Import necessary React components and styles

import React, { useState, useEffect } from 'react';
import Header from './CourseHeader.jsx';
import Slideshow from './Coursesslideshow';
import FilterCard from './FilterCard.jsx';
import JoinUsNow from './JoinUsNow.jsx';
import CourseCard from './Coursecard';
import Pagination from './coursepagination'; 
import './CoursePage.css';

// Define the main component
function MainPage() {
  // State variables for managing pagination, course data, and filters
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 21;
  const [courses, setCourses] = useState([]);
  const [subjectFilter, setSubjectFilter] = useState(null);
  const [levelFilter, setLevelFilter] = useState(null); 
  const [numReviewsFilter, setNumReviewsFilter] = useState(null); 

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
  // Define an asynchronous function to fetch data
  const fetchData = async () => {
    try {
      // Fetch data from the specified API endpoint
      const response = await fetch('http://127.0.0.1:5005/api/data');

      // Check if the network response is ok
      if (!response.ok) {
        // If the response is not ok, throw an error
        throw new Error('Network response was not ok');
      }

      // Parse the response as JSON
      const data = await response.json();
     
      // Shuffle the fetched course data
      const shuffledCourses = shuffleArray(data.documents);
      
      // Set the shuffled courses to the state variable 'courses'
      setCourses(shuffledCourses);
    } catch (error) {
      // If an error occurs during fetching or processing the data, log the error
      console.error('Error fetching data:', error);
    }
  };

  // Call the fetchData function when the component mounts
  fetchData();

  // Dependency array is empty, so this effect runs only once when the component mounts
}, []);

  // Function to shuffle an array
const shuffleArray = (array) => {
  // Loop through the array in reverse order
  for (let i = array.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i (inclusive)
    const j = Math.floor(Math.random() * (i + 1));
    // Swap the elements at positions i and j
    [array[i], array[j]] = [array[j], array[i]];
  }
  // Return the shuffled array
  return array;
};

  
// Function to handle filtering by subject
const filterBySubject = (subject) => {
  // Check if the selected subject is already the active filter
  if (subject === subjectFilter) {
    // If it is, clear the subject filter
    setSubjectFilter(null);
  } else {
    // If it's not, set the selected subject as the filter
    setSubjectFilter(subject);
  }
};


  // Function to handle filtering by level
const filterByLevel = (level) => {
  // Check if the selected level is already the active filter
  if (level === levelFilter) {
    // If it is, clear the level filter
    setLevelFilter(null);
  } else {
    // If it's not, set the selected level as the filter
    setLevelFilter(level);
  }
};


  // Function to handle filtering by number of reviews
const filterByNumReviews = (reviews) => {
  // Set the selected number of reviews as the filter
  setNumReviewsFilter(reviews);
};

  // Function to filter courses based on the number of reviews within a specified range
const filterNumReviews = (numReviews, reviewsFilter) => {
  // Destructure the reviewsFilter string into minimum and maximum review counts
  const [minReviews, maxReviews] = reviewsFilter.split('-').map(Number);
  // Return true if the number of reviews falls within the specified range, otherwise false
  return numReviews >= minReviews && numReviews <= maxReviews;
};

// Function to clear the subject filter
const clearSubjectFilter = () => {
  // Set the subject filter state to null, effectively removing the filter
  setSubjectFilter(null);
};

// Function to clear the level filter
const clearLevelFilter = () => {
  // Set the level filter state to null, effectively removing the filter
  setLevelFilter(null);
};

// Function to clear the number of reviews filter
const clearNumReviewsFilter = () => {
  // Set the number of reviews filter state to null, effectively removing the filter
  setNumReviewsFilter(null);
};


  const filteredCourses = courses.filter(course => {
    if (subjectFilter && levelFilter && numReviewsFilter) {
      // Check if all filters are active
      // Return true if course matches subject, level, and number of reviews filters
      return course.subject === subjectFilter && course.level === levelFilter && filterNumReviews(course.num_reviews, numReviewsFilter);
    } else if (subjectFilter && levelFilter) {
      // Check if both subject and level filters are active
      // Return true if course matches subject and level filters
      return course.subject === subjectFilter && course.level === levelFilter;
    } else if (subjectFilter && numReviewsFilter) {
      // Check if both subject and number of reviews filters are active
      // Return true if course matches subject and number of reviews filters
      return course.subject === subjectFilter && filterNumReviews(course.num_reviews, numReviewsFilter);
    } else if (levelFilter && numReviewsFilter) {
      // Check if both level and number of reviews filters are active
      // Return true if course matches level and number of reviews filters
      return course.level === levelFilter && filterNumReviews(course.num_reviews, numReviewsFilter);
    } else if (subjectFilter) {
      // Check if only the subject filter is active
      // Return true if course matches the subject filter
      return course.subject === subjectFilter;
    } else if (levelFilter) {
      // Check if only the level filter is active
      // Return true if course matches the level filter
      return course.level === levelFilter;
    } else if (numReviewsFilter) {
      // Check if only the number of reviews filter is active
      // Return true if course matches the number of reviews filter
      return filterNumReviews(course.num_reviews, numReviewsFilter);
    }
    // If no filters are active, return true to include all courses
    return true; 
    
  });

  // Function to handle changing the current page to the specified page number
  const handlePageChange = (pageNumber) => {
  // Update the current page state to the specified page number
  setCurrentPage(pageNumber);
};

// Function to handle navigating to the previous page
  const handlePrevious = () => {
  // Check if the current page is greater than 1 (not the first page)
  if (currentPage > 1) {
    // If it is, decrement the current page number by 1
    setCurrentPage(currentPage - 1);
  }
};

  const handleNext = () => {
    const totalPages = Math.ceil(filteredCourses.length / cardsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderNumberOfResults = () => {
    const totalResults = filteredCourses.length;
    return <div className="result-count">{`${totalResults} results`}</div>;
  };

  const renderAppliedFilters = () => {
    // Initialize an array to store applied filters
    let appliedFilters = [];
    
    // Check if a subject filter is applied
    if (subjectFilter) {
      // Add subject filter to the applied filters array
      appliedFilters.push(subjectFilter);
    }
    
    // Check if a level filter is applied
    if (levelFilter) {
      // Add level filter to the applied filters array
      appliedFilters.push(levelFilter);
    }
    
    // Check if a number of reviews filter is applied
    if (numReviewsFilter) {
      // Add number of reviews filter to the applied filters array
      appliedFilters.push(numReviewsFilter);
    }

    // Check if there are any applied filters
    if (appliedFilters.length > 0) {
      // Render applied filters
      return (
        <div className="applied-filters">
          {/* Map through applied filters and render each */}
          {appliedFilters.map((filter, index) => (
            <div className="applied-filter" key={index}>
              {/* Display the filter value */}
              {filter}
              {/* Add a button to clear the filter */}
              <button onClick={() => handleClearFilter(filter)}>X</button>
            </div>
          ))}
          {/* Add a button to clear all filters */}
          <div className="clear-all-button">
            <button onClick={handleClearAllFilters}>Clear all</button>
          </div>
        </div>
      );
    }
    // If no filters are applied, return null
    return null;
  };
  
  const handleClearFilter = (filter) => {
    if (filter === subjectFilter) {
      clearSubjectFilter();
    } else if (filter === levelFilter) {
      clearLevelFilter();
    } else if (filter === numReviewsFilter) {
      clearNumReviewsFilter();
    }
  };

  const handleClearAllFilters = () => {
    clearSubjectFilter();
    clearLevelFilter();
    clearNumReviewsFilter();
  };

  return (
    // Main container for the page
    <div className="main-container">
      {/* Sidebar section */}
      <div className="sidebar">
        {/* Header component */}
        <Header />
        {/* Slideshow component */}
        <Slideshow />
        {/* Course message container */}
        <div className="course-message-container">
          {/* Course message */}
          <p className="course-message">Discover the Perfect Course to Fuel Your Educational Journey</p>
        </div>
        {/* Filter message */}
        <p className="filter-message">Unlock Your Potential: Explore the Ideal Course for Your Learning Path and Choose from Over 3000+ Courses</p>
        {/* Filter card component */}
        <FilterCard 
            subjectFilter={subjectFilter}             // Current subject filter state
            filterBySubject={filterBySubject}         // Function to filter courses by subject
            clearSubjectFilter={clearSubjectFilter}   // Function to clear subject filter
            levelFilter={levelFilter}                 // Current level filter state
            filterByLevel={filterByLevel}             // Function to filter courses by level
            clearLevelFilter={clearLevelFilter}       // Function to clear level filter
            numReviewsFilter={numReviewsFilter}       // Current number of reviews filter state
            filterByNumReviews={filterByNumReviews}   // Function to filter courses by number of reviews
            clearNumReviewsFilter={clearNumReviewsFilter} // Function to clear number of reviews filter
        />

        {/* Render applied filters */}
        {renderAppliedFilters()}
      </div>
      {/* Content section */}
      <div className="content">
        {/* Pagination section */}
        <div className="pagination">
          {/* Pagination component */}
          <Pagination 
            currentPage={currentPage} 
            totalPages={Math.ceil(filteredCourses.length / cardsPerPage)} 
            onPageChange={handlePageChange} 
            onPrevious={handlePrevious} 
            onNext={handleNext} 
          />
        </div>
        {/* Results count */}
        <div className="results-count">{renderNumberOfResults()}</div>
        {/* Cards container */}
        <div className="cards-container">
          {/* Cards row */}
          <div className="cards-row">
            {/* Map through filtered courses to render CourseCard component */}
            {filteredCourses.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage).map((course, index) => (
              <CourseCard
              key={index}                         // Unique key for React's reconciliation algorithm
              title={course.course_title}         // Title of the course
              price={course.price}                // Price of the course
              level={course.level}                // Level of the course
              image={course.url}                  // URL for the image of the course
              numReviews={course.num_reviews}     // Number of reviews for the course
              numSubscribers={course.num_subscribers} // Number of subscribers for the course
              subject={course.subject}            // Subject of the course
          />
            ))}
          </div>
        </div>
        {/* Pagination section */}
        <div className="pagination">
          {/* Pagination component */}
          <Pagination 
            currentPage={currentPage} 
            totalPages={Math.ceil(filteredCourses.length / cardsPerPage)} 
            onPageChange={handlePageChange} 
            onPrevious={handlePrevious} 
            onNext={handleNext} 
          />
        </div>
      </div>
      {/* Join Us Now component */}
      <JoinUsNow />
    </div>
);
            }

export default MainPage;
