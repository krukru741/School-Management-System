import React from 'react';
import { Bell, Edit2, Trash2 } from 'lucide-react';

const NoticeBoard = () => {
  return (
    <div className="notice-board">
      <div className="nb-header">
        <h2 className="nb-title">Notice Board</h2>
        <span className="nb-view-all">view all</span>
      </div>
      
      <div className="nb-list">
        <div className="nb-item">
          <div className="nb-icon-block yellow">
            <Bell size={20} color="#FCA52B" />
          </div>
          <div className="nb-text-block">
            <div className="nb-item-title">Sports Day Announcement</div>
            <div className="nb-item-desc">The school's Annual Sports Day will be held on May 12, 2024. Mark your calendars!</div>
          </div>
        </div>
        
        <div className="nb-item">
          <div className="nb-icon-block purple">
            <Bell size={20} color="#696FC1" />
          </div>
          <div className="nb-text-block">
            <div className="nb-item-title">Summer Break Start Date</div>
            <div className="nb-item-desc">Summer break begins on May 25, 2024. Have a wonderful holiday!</div>
          </div>
        </div>
      </div>
      
      <div className="nb-buttons">
        <button className="nb-add-btn">Add</button>
        <button className="nb-icon-btn"><Edit2 size={12} color="#777777" /></button>
        <button className="nb-icon-btn"><Trash2 size={12} color="#777777" /></button>
      </div>
    </div>
  );
};

export default NoticeBoard;
