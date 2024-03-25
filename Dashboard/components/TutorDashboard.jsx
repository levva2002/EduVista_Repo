import React from 'react';
import './tutordashboard.css';
import TutorCards from './TutorCards';
import TutorCourseEnrollments from './TutorCourseEnrollments.jsx';
import TutorTopSelling from './TutorTopSelling';
import TutorRecentActivity from './TutorRecentActivity';


function TutorDashboard() {
  return (
    <section className="section dashboard">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <TutorCards />
            {/* <div className="col-12">
              <Reports />
            </div> */}
            <div className="col-12">
              <TutorCourseEnrollments />
            </div>
            <div className="col-12">
              <TutorTopSelling />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <TutorRecentActivity />
          {/* <BudgetReport /> */}
          {/* <TutorWebTraffic /> */}
          {/* <News /> */}
        </div>
      </div>
    </section>
  );
}

export default TutorDashboard;
