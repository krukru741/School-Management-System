import React from 'react';
import { Home, Users, BookOpen, DollarSign, Calendar, Clock, MessageSquare, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Teachers', icon: Users },
    { name: 'Students', icon: BookOpen },
    { name: 'Finance', icon: DollarSign },
    { name: 'Calendar', icon: Calendar },
    { name: 'Time Table', icon: Clock },
    { name: 'Message', icon: MessageSquare },
    { name: 'Settings', icon: Settings },
  ];

  return (
    <div className="sidebar">
      <div className="logo-container">
        <div className="logo-icon">Sm</div>
        <div className="logo-text">Smansys</div>
      </div>
      
      <div className="nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <div 
              key={item.name}
              className={`nav-item ${activeMenu === item.name ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.name)}
            >
              <Icon size={24} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
      
      <button className="logout-btn">
        Log Out
        <LogOut size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
