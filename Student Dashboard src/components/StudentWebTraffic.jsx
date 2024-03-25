import React, { useState } from 'react';
import StudentWebTrafficChart from './StudentWebTrafficChart';
import StudentCardFilter from './StudentCardFilter';

function StudentWebTraffic() {
  const [filter, setFilter] = useState('Today');
  const handleFilterChange = filter => {
    setFilter(filter);
  };

  return (
    <div className="card">
      <StudentCardFilter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h5 className="card-title">
          Website Traffic <span>| {filter}</span>
        </h5>
        <StudentWebTrafficChart />
      </div>
    </div>
  );
}

export default StudentWebTraffic;
