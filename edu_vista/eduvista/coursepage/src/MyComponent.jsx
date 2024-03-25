import React from 'react';
import ScrollCarousel from 'scroll-carousel-react';
import CourseCard from './Coursecard'; // Assuming you have a CourseCard component

const MyComponent = ({ trendingCourses }) => {
  return (
    <div className="carousel-container">
      <h2>Trending Courses</h2>
      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        onReady={() => console.log('Carousel is ready')}
      >
        {trendingCourses.map(course => (
          <div key={course.id}>
            <CourseCard
              title={course.title}
              price={course.price}
              level={course.level}
              subject={course.subject}
              numReviews={course.numReviews}
              numSubscribers={course.numSubscribers}
            />
          </div>
        ))}
      </ScrollCarousel>
    </div>
  );
};

export default MyComponent;
