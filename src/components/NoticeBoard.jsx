import React from 'react';
import { Plus, Edit2 } from 'lucide-react';

const NoticeBoard = () => {
  return (
    <div className="notice-board">
      <div className="widget-header">
        <h2 className="widget-title">Notice Board</h2>
      </div>
      
      <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '15px'}}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F04D23', marginTop: '5px' }}></div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>School reopening date extended</div>
            <div style={{ fontSize: 12, color: '#8F8F8F' }}>2 days ago</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#F8E38D', marginTop: '5px' }}></div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Parent-Teacher meeting on Friday</div>
            <div style={{ fontSize: 12, color: '#8F8F8F' }}>3 days ago</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#E2D8FC', marginTop: '5px' }}></div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 500 }}>Annual Sports Meet Registration</div>
            <div style={{ fontSize: 12, color: '#8F8F8F' }}>1 week ago</div>
          </div>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button className="btn-small">
          <Plus size={14} /> Add
        </button>
        <button className="btn-icon">
          <Edit2 size={14} />
        </button>
      </div>
    </div>
  );
};

export default NoticeBoard;
