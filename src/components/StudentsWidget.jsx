import React from 'react';

const StudentsWidget = () => {
  return (
    <div className="students-widget">
      <div className="sw-header">
        <h2 className="sw-title">Students</h2>
        <div className="sw-more">
          <span></span><span></span><span></span>
        </div>
      </div>
      
      <div className="sw-body">
        <div className="sw-chart-group">
          <div className="sw-pie-chart boys">
            <div className="sw-pie-inner">
              {/* Optional SVG for bx-male icon could go here, using text symbol for now */}
              <span className="sw-icon-male">♂</span>
              <span className="sw-value">40,000</span>
            </div>
          </div>
          <div className="sw-legend">
            <div className="sw-legend-dot boys-dot"></div>
            <span className="sw-legend-text">Boys</span>
          </div>
        </div>
        
        <div className="sw-chart-group">
          <div className="sw-pie-chart girls">
            <div className="sw-pie-inner">
              <span className="sw-icon-female">♀</span>
              <span className="sw-value">50,000</span>
            </div>
          </div>
          <div className="sw-legend">
            <div className="sw-legend-dot girls-dot"></div>
            <span className="sw-legend-text">Girls</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsWidget;
