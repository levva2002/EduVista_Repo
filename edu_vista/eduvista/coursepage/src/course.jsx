
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5004/api/data');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const jsonData = await response.json();
      setData(jsonData.documents);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h1>Data from Flask Backend</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.course_title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
