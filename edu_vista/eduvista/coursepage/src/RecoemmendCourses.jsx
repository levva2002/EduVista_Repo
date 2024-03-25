import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CourseCard from './CourseCard';
import './RecommendedCourses.css';

function RecommendedCourses() {
  const [recommendedCourses, setRecommendedCourses] = useState([]);

  useEffect(() => {
    // Function to fetch recommended courses
    const fetchRecommendedCourses = async () => {
      const studentAnswers = { level: 1, subject: 0, num_reviews: 1 }; // Example student answers
      const response = await fetch('/recommend-courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(studentAnswers),
      });
      const data = await response.json();
      setRecommendedCourses(data);
    };

    fetchRecommendedCourses();
  }, []); // Empty dependency array to run effect only once

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="recommended-courses-container">
      <h2 className="recommended-courses-topic">Recommended Courses</h2>
      <Slider {...settings}>
        {recommendedCourses.map((course, index) => (
          <div key={index}>
            <CourseCard
              title={course.course_title}
              level={course.level}
              subject={course.subject}
              numReviews={course.num_reviews}
              numSubscribers={course.num_subscribers}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RecommendedCourses;
