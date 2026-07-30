import React from 'react';
import { Search, Bell, MessageSquare, Settings, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="header-search-wrapper">
        <button className="menu-toggle">
          <Menu size={22} />
        </button>
        <div className="search-input-group">
          <Search size={18} className="search-icon" />
          <input type="text" placeholder="Search anything..." />
        </div>
      </div>
      
      <div className="header-actions">
        <div className="action-icons">
          <button className="action-btn">
            <Bell size={20} />
            <span className="badge"></span>
          </button>
          <button className="action-btn">
            <MessageSquare size={20} />
          </button>
          <button className="action-btn">
            <Settings size={20} />
          </button>
        </div>
        
        <div className="profile-section">
          <div className="profile-info">
            <span className="profile-name">School Admin</span>
            <span className="profile-role">Administrator</span>
          </div>
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="profile-avatar" />
        </div>
      </div>
    </header>
  );
};

export default Header;
