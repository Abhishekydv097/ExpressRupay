import React, { useState } from 'react';
import LeadCreationForm from './LeadCreationForm';
import LeadDisplay from './LeadDisplay';
import Navbar from './components/Navbar/NavbarElements';
import Sidebar from './components/Sidebar/SideBar';
import LeadsPage from './components/LeadsPage/LeadsPage';
import CalendarComponent from './components/Calendar/CalendarComponent';
import './App.css';

const App = () => {
  const [selectedItem, setSelectedItem] = useState('item1'); 
  const [isCalendarActive, setCalendarActive] = useState(false); 

  const handleSidebarItemClick = (item) => {
    if (item === 'calendar') {
      setCalendarActive(false);
    } else {
      setSelectedItem(item);
      setCalendarActive(false);
    }
  };

  const [leads, setLeads] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleLeadCreate = (newLead) => {
    setLeads((prevLeads) => [...prevLeads, newLead]);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="App">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} onItemClick={handleSidebarItemClick} />
      <LeadCreationForm onLeadCreate={handleLeadCreate} />
      <LeadsPage leads={leads} />
      <div className="App">
        <CalendarComponent />
      </div>
    </div>
   // </div>
  );
};

export default App;
