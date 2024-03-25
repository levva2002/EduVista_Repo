import React from 'react';

const ResultsCount = ({ totalResults }) => {
  // Return the total number of results
  return <div>{`${totalResults} results`}</div>;
};

export default ResultsCount; // Exporting the ResultsCount component for use in other parts of the application
