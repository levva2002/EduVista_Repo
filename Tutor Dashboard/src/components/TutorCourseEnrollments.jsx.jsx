import React, { useState, useEffect } from 'react';
import TutorCardFilter from './TutorCardFilter';
import TutorCourseEnrollmentsTable from './TutorCourseEnrollmentsTable';
import './tutorcourseEnrollments.css';

function TutorCourseEnrollments() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  // you need intall the json server to run the backend api
  // npm i json-server -g
  // once installed globally, run the following code in terminal
  // json-server --watch --port 4000 ./api/info.json
  const fetchData = () => {
    fetch('http://localhost:4000/recentsales')
      .then(res => res.json())
      .then(data => {
        setItems(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card recent-sales overflow-auto">
      <TutorCardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Course Enrollments <span>| {filter}</span>
        </h5>
        <TutorCourseEnrollmentsTable items={items} />
      </div>
    </div>
  );
}

export default TutorCourseEnrollments;
