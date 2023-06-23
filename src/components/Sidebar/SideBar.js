import React from 'react';
import './SideBar.css';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <button className="sidebar-button">
          <span className="sidebar-icon">Dashboard</span>
        </button>
        <button className="sidebar-button">
          <span className="sidebar-icon">Leads</span>
        </button>
        <button className="sidebar-button">
          <span className="sidebar-icon">Leads Status Update</span>
        </button>
        <button className="sidebar-button">
          <span className="sidebar-icon">Leads Reminder</span>
        </button>
        <button className="sidebar-button">
          <span className="sidebar-icon">Calendar</span>
        </button>
        <button className="sidebar-button">
          <span className="sidebar-icon">About</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
