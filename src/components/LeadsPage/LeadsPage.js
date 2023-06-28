import React, { useState } from 'react';
import './LeadsPage.css';
import generateDummyLeads from './dummyLeadsGenerator';

const LeadsPage = () => {
 
  const [searchQuery, setSearchQuery] = useState('');
  const [leads, setLeads] = useState(generateDummyLeads(20)); // Generate 10 dummy leads

  
  const filteredLeads = leads.filter((lead) =>
    lead.fullName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  const handleLeadDelete = (leadId) => {
    setLeads((prevLeads) => prevLeads.filter((lead) => lead.id !== leadId));
  };

  
  const handleViewLead = (leadId) => {
    const lead = leads.find((lead) => lead.id === leadId);
    if (lead) {
      console.log('Lead Details:', lead);
    }
  };

  return (
    <div className="leads-page">
      <div className="leads-header">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Leads"
          className="search-input"
        />
        <button className="add-leads-button">Add Leads</button>
      </div>
      <table className="leads-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Location</th>
            <th>Priority</th>
            <th>Source</th>
            <th>Created By</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredLeads.map((lead) => (
            <tr key={lead.id}>
              <td>{lead.fullName}</td>
              <td>{lead.location}</td>
              <td>{lead.priority}</td>
              <td>{lead.sourcedThrough}</td>
              <td>{lead.createdBy}</td>
              <td>
                <button onClick={() => handleViewLead(lead.id)}>View</button>
                <button onClick={() => handleLeadDelete(lead.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsPage;
