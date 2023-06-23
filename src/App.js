import React, { useState } from 'react';
import LeadCreationForm from './LeadCreationForm';
import LeadDisplay from './LeadDisplay';
import Navbar from './components/Navbar/NavbarElements';
import Sidebar from './components/Sidebar/SideBar';
import './App.css';

const App = () => {
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
      <Sidebar isOpen={isSidebarOpen} />
      <LeadCreationForm onLeadCreate={handleLeadCreate} />
      <LeadDisplay leads={leads} />
    </div>
  );
};

export default App;
