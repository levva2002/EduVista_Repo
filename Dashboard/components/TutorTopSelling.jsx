import React, { useState, useEffect } from 'react';
import TutorCardFilter from './TutorCardFilter';
import TutorTopSellingItem from './TutorTopSellingItem';
import './tutortopSelling.css';

function TutorTopSelling() {
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
    fetch('http://localhost:4000/topselling')
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
    <div className="card top-selling overflow-auto">
      <TutorCardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          Top Selling <span>| {filter}</span>
        </h5>

        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              <th scope="col">Course ID</th>
              <th scope="col">Course</th>
              <th scope="col">Price</th>
              <th scope="col">Num of Subscribers</th>
              <th scope="col">Num of Reviews</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items.length > 0 &&
              items.map(item => <TutorTopSellingItem key={item._id} item={item} />)}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TutorTopSelling;
