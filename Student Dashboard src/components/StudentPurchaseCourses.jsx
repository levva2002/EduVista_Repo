import React, { useState, useEffect } from 'react';
import StudentCardFilter from './StudentCardFilter';
import StudentPurchaseCoursesTable from './StudentPurchaseCoursesTable';
import './studentpurchaseCourses.css';

function StudentPurchaseCourses() {
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
      <StudentCardFilter filterChange={handleFilterChange} />

      <div className="card-body">
        <h5 className="card-title">
          Purchase Courses <span>| {filter}</span>
        </h5>
        <StudentPurchaseCoursesTable items={items} />
      </div>
    </div>
  );
}

export default StudentPurchaseCourses;
