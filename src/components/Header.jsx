import React from 'react';
import { Search, Bell, MessageSquare, Settings, ChevronLeft } from 'lucide-react';

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <button className="collapse-btn">
          <ChevronLeft size={24} />
        </button>
        <div className="search-bar">
          <Search size={20} color="#8E8D93" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      
      <div className="header-right">
        <button className="icon-btn">
          <Bell size={24} />
        </button>
        <button className="icon-btn">
          <MessageSquare size={24} />
        </button>
        <button className="icon-btn">
          <Settings size={24} />
        </button>
        <div className="profile-pic" style={{ backgroundImage: 'url(https://i.pravatar.cc/150?img=12)' }}></div>
      </div>
    </div>
  );
};

export default Header;
