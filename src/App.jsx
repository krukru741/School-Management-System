import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

function App() {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  return (
    <div className="app-container">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="main-content">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
