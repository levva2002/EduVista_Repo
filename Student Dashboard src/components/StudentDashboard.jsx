import React from 'react';
import './studentdashboard.css';

import StudentCards from './StudentCards';
import StudentPurchaseCourses from './StudentPurchaseCourses';
import StudentTopSelling from './StudentTopSelling';
import StudentRecentActivity from './StudentRecentActivity';
import StudentWebTraffic from './StudentWebTraffic';

function StudentDashboard() {
  return (
    <section className="section dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <StudentCards />
            <div className="col-12">
              <StudentPurchaseCourses />
            </div>
            <div className="col-12">
              <StudentTopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <StudentRecentActivity />
          
          <StudentWebTraffic />
         
        </div>
      </div>
    </section>
  );
}

export default StudentDashboard;
