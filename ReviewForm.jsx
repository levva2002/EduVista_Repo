import React, { useState } from 'react';

const ReviewForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="review">Write a review:</label>
      <textarea
        id="review"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="button" onClick={() => setText('')}>
        Clear
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;