import React from 'react';
import { Home, User, BookOpen, CreditCard, Settings, FileText, Star } from 'lucide-react';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const menuItems = [
    { name: 'Dashboard', icon: Home },
    { name: 'Teachers', icon: User },
    { name: 'Students/ classes', icon: BookOpen },
    { name: 'Billing', icon: CreditCard },
    { name: 'Settings and profile', icon: Settings },
    { name: 'Exams', icon: FileText },
  ];

  const handleMenuClick = (name) => {
    if (setActiveMenu) {
      setActiveMenu(name);
    }
  };

  return (
    <div className="sidebar">
      <div className="sb-logo-circle"></div>
      <div className="sb-school-name">Udemy Inter. school</div>
      
      <div className="sb-divider"></div>

      <div className="sb-nav-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeMenu === item.name || (!activeMenu && item.name === 'Dashboard');
          return (
            <div
              key={item.name}
              className={`sb-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => handleMenuClick(item.name)}
            >
              <Icon size={16} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>

      <div className="sb-features-menu">
        <div className="sb-nav-item">
          <Star size={16} />
          <span>Features</span>
          <div className="sb-new-badge">NEW</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
