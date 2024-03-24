import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

const initialReviews = [
  'Great course!',
  'The instructor was very pleased with my progress.',
  'I learned a lot.',
];

function App() {
  const [reviews, setReviews] = useState(initialReviews);

  const handleSubmit = (text) => {
    setReviews((prevReviews) => [...prevReviews, text]);
  };

  return (
    <div className="App">
      <h1>Course Reviews</h1>
      <ReviewForm onSubmit={handleSubmit} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;