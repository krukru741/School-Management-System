import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  // Generating a 30 day mock calendar
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <ChevronLeft size={16} color="#B5BEC6" className="calendar-nav" />
        <span className="calendar-month">September 2021</span>
        <ChevronRight size={16} color="#B5BEC6" className="calendar-nav" />
      </div>

      <div className="calendar-days">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
      </div>

      <div className="calendar-grid">
        {/* Placeholder blanks */}
        <div className="calendar-date inactive"></div>
        <div className="calendar-date inactive"></div>
        <div className="calendar-date inactive"></div>

        {days.map(day => (
          <div
            key={day}
            className={`calendar-date ${day === 25 ? 'active' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>

      <button className="calendar-add-btn">Manage Calendar</button>
    </div>
  );
};

export default CalendarWidget;
