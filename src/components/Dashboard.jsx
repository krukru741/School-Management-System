import React from 'react';
import StatCard from './StatCard';
import CalendarWidget from './CalendarWidget';
import NoticeBoard from './NoticeBoard';
import StudentsWidget from './StudentsWidget';

const Dashboard = () => {
  return (
    <div className="dashboard-grid">
      <div className="dashboard-main">
        <div className="greeting-card">
          <div className="greeting-content">
            <h1 className="greeting-title">Welcome, Laurel Higher Secondary School Team!</h1>
            <p className="greeting-text">
              Manage your school operations with ease. Stay updated on academics, attendance, finances, and more—all in one place. Let’s keep shaping a brighter future together!
            </p>
          </div>
          <div className="greeting-image">
            {/* Placeholder for Humaaans Research Illustration */}
            <img src="https://ui-avatars.com/api/?name=School&background=random&size=200" alt="School Illustration" style={{borderRadius: '20px', width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
        </div>

        <div className="bottom-section">
           <StudentsWidget />
           <NoticeBoard />
        </div>
      </div>
      
      <div className="stat-cards-vertical">
        <StatCard title="Students" value="5,909" bgColor="var(--bg-yellow)" />
        <StatCard title="Teachers" value="60" bgColor="var(--bg-purple)" />
        <StatCard title="Employee" value="100" bgColor="var(--bg-yellow)" />
      </div>

      <div className="dashboard-sidebar">
        <CalendarWidget />
      </div>
    </div>
  );
};

export default Dashboard;
