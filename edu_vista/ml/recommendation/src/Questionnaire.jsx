import React, { useState, useEffect } from 'react';
import './Questionnaire.css'; // Import CSS file for styling
import CourseCard from './CourseCardRec'; // Import the CourseCard component

function App() {
    const [level, setLevel] = useState('');
    const [subject, setSubject] = useState('');
    const [num_reviews, setNumReviews] = useState('');
    const [recommended_courses, setRecommendedCourses] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    const [num_subscribers, setNumSubscribers] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false); // State to track form submission
    const [endOfResults, setEndOfResults] = useState(false); // State to track end of results
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Check if any dropdown menu is not selected
        if (!level || !subject || !num_reviews) {
            setErrorMessage('Please select options for all dropdown menus.');
            return;
        }
        try {
            const response = await fetch('http://localhost:5002/recommend_courses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    level: parseInt(level), // Parse level into an integer
                    subject: parseInt(subject), // Parse subject into an integer
                    num_reviews: parseInt(num_reviews), // Parse num_reviews into an integer
                    num_subscribers // No need to parse, it's already an integer
                }),
            });
            const data = await response.json();
            setRecommendedCourses(data.slice(0, 20)); // Limit to 20 cards
            setFormSubmitted(true); // Set form submission state to true
            setEndOfResults(data.length === 0); // Check if there are no more results
            console.log(data); // Log the response data
            // Clear error message on successful form submission
            setErrorMessage('');
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage('Error getting recommendations. Please try again later.');
        }
    };

    // JSX for the component
    return (
        <div className="app">
            <div className="form-background">
                <h1 className="title">Course Recommendation System</h1>
                <hr></hr>
                <p className="intro-text">Unlock your learning potential with our personalized recommendations.</p>
                <p className="instruction-text">Please choose an option for each dropdown menu.</p>
                <form onSubmit={handleSubmit} className="form">
                    <label className="label">
                        Preferred Difficulty Level:
                        <select value={level} onChange={(e) => setLevel(e.target.value)} className="select">
                            <option value="">Select</option>
                            <option value="0">Beginner Level</option>
                            <option value="1">Intermediate Level</option>
                            <option value="2">Expert Level</option>
                            <option value="3">All Levels</option>
                        </select>
                    </label>
                    <br />
                    <label className="label">
                        Subject of Interest:
                        <select value={subject} onChange={(e) => setSubject(e.target.value)} className="select">
                            <option value="">Select</option>
                            <option value="0">Web Development</option>
                            <option value="1">Graphic Design</option>
                            <option value="2">Musical Instruments</option>
                            <option value="3">Business</option>
                        </select>
                    </label>
                    <br />
                    <label className="label">
                        Importance of Reviews:
                        <select value={num_reviews} onChange={(e) => setNumReviews(e.target.value)} className="select">
                            <option value="">Select</option>
                            <option value="0">Not important</option>
                            <option value="1">Somewhat important</option>
                            <option value="2">Very important</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit" className="submit-button">Generate Recommendations</button>
                </form>
            </div>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            {formSubmitted && ( // Render recommended courses if form is submitted
                <>
                <br></br>
                    <hr />
                    <h2 className="subtitle">Recommended Courses</h2>
                    <hr></hr>
                    <br></br>
                    <div className="grid-container">
                        {recommended_courses.map((course) => (
                            <div key={course.course_title} className="grid-item">
                                <CourseCard
                                    title={course.course_title}
                                    numReviews={course.num_reviews}
                                    numSubscribers={course.num_subscribers}
                                    subject={course.subject}
                                    level={course.level}
                                />
                            </div>
                        ))}
                    </div> 
                    {endOfResults && <p className="end-text">End of Results</p>}
                </>
            )}
            <hr></hr>
            {/* <div className="additional-text">
    <p className="p">Expand your career opportunities with Our Course Recommendation System</p>
    <div className="intro-text">
        <p>Expand your career opportunities with Our Course Recommendation System. With our Course Recommendation System, we offer personalized course suggestions based on your preferences. Whether you're interested in web development, graphic design, music, or business, we tailor recommendations to your desired difficulty level, subject, and review importance. Let us help you discover the perfect learning path.</p>
    </div>
</div> */}

            <div className="more-courses-box">
                <p className="more-courses-text">Didn't find what you're looking for? View More Than 3000 Courses in Edu Vista</p>
                <button className="view-more-button" onClick={() => window.location.href = '/courses'}>View More</button>
            </div>
        </div>
    );
}

export default App;
