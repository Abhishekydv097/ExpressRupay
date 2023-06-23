import React from 'react';
import './SideBar.css';
import Dashboard from './icons/Dashboard.png'
import Leads from './icons/Leads.png'
import LeadsUpdate from './icons/LeadsUpdate.png'
import LeadsReminder from './icons/LeadsReminder.png'
import Calendar from './icons/Calender.png'
import About from './icons/About.png'

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-content">
        <button className="sidebar-button">
          <span className="dashboard">Dashboard</span>
        </button>
        <button className="sidebar-button">
        <img src={Leads} alt='Dashboard Icon' className='sidebar-icon'/>
        <span>Leads</span>
        </button>
        <button className="sidebar-button">
        <img src={LeadsUpdate} alt='Dashboard Icon' className='sidebar-icon'/>
        <span>Leads Status Update</span>
        </button>
        <button className="sidebar-button">
        <img src={LeadsReminder} alt='Leads Remider' className='sidebar-icon'/>
        <span>Leads Reminder</span>
        </button>
        <button className="sidebar-button">
        <img src={Calendar} alt='Dashboard Icon' className='sidebar-icon'/>
        <span>Calendar</span>
        </button>
        <button className="sidebar-button">
        <img src={About} alt='About' className='sidebar-icon'/>
        <span>About</span>
        </button>
        <button className="sidebar-button">
          <img src={Dashboard} alt='Dashboard Icon' className='sidebar-icon'/>
          <span>Dashboard</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
