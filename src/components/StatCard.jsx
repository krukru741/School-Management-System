import React from 'react';
import { MoreHorizontal } from 'lucide-react';

const StatCard = ({ title, value, bgColor }) => {
  return (
    <div className="stat-card" style={{ background: bgColor }}>
      <div className="stat-more">
        <span></span><span></span><span></span>
      </div>
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
};

export default StatCard;
