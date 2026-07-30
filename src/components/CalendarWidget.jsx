import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarWidget = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // Generating a simple 30 day mock calendar
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar-widget">
      <div className="calendar-header">
        <ChevronLeft size={16} className="calendar-nav" />
        <span className="calendar-month">September 2021</span>
        <ChevronRight size={16} className="calendar-nav" />
      </div>
      
      <div className="calendar-days">
        {daysOfWeek.map(day => (
          <div key={day} className="calendar-day-name">{day}</div>
        ))}
      </div>
      
      <div className="calendar-grid">
        {/* Placeholder blanks to shift start day to Wednesday (3 blanks for Sun, Mon, Tue) */}
        <div className="calendar-date" style={{opacity: 0}}></div>
        <div className="calendar-date" style={{opacity: 0}}></div>
        <div className="calendar-date" style={{opacity: 0}}></div>
        
        {days.map(day => (
          <div 
            key={day} 
            className={`calendar-date ${day === 16 ? 'active' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarWidget;
