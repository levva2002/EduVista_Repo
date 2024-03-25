import React, { useState, useEffect } from 'react';
import StudentCardFilter from './StudentCardFilter';
import StudentNewsPostItem from './StudentNewsPostItem';
import './studentnews.css';

function StudentNews() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  // you need intall the json server to run the backend api
  // npm i json-server -g
  // once installed globally, run the following code in terminal
  // json-server --watch --port 4000 ./api/info.json
  const fetchData = () => {
    fetch('http://localhost:4000/news')
      .then(res => res.json())
      .then(data => {
        setNews(data);
      })
      .catch(e => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card">
      <StudentCardFilter filterChange={handleFilterChange} />

      <div className="card-body pb-0">
        <h5 className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </h5>

        <div className="news">
          {news &&
            news.length > 0 &&
            news.map(item => <StudentNewsPostItem key={item._id} item={item} />)}
        </div>
      </div>
    </div>
  );
}

export default StudentNews;
