import React, { useState } from 'react';
import './LeadCreationForm.css';

const LeadCreationForm = () => {
  const [leadData, setLeadData] = useState({
    firstName: '',
    lastName: '',
    jointName: '',
    region: '',
    state: '',
    city: '',
    priority: '',
    source: '',
    createdBy: '',
  });

  const [leads, setLeads] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeadData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLead = { ...leadData };
    setLeads((prevLeads) => [...prevLeads, newLead]);
    setLeadData({
      firstName: '',
      lastName: '',
      jointName: '',
      region: '',
      state: '',
      city: '',
      priority: '',
      source: '',
      createdBy: '',
    });
  };

  return (
    <div className="container">
      <h1>Lead Creation</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={leadData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={leadData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="jointName">Joint Name:</label>
          <input
            type="text"
            id="jointName"
            name="jointName"
            value={leadData.jointName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="region">Region:</label>
          <input
            type="text"
            id="region"
            name="region"
            value={leadData.region}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={leadData.state}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={leadData.city}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="priority">Priority:</label>
          <select
            id="priority"
            name="priority"
            value={leadData.priority}
            onChange={handleChange}
            required
          >
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="source">Lead Sourced Through:</label>
          <select
            id="source"
            name="source"
            value={leadData.source}
            onChange={handleChange}
            required
          >
            <option value="">Select Source</option>
            <option value="Email">Email</option>
            <option value="Calling">Calling</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Reference">Reference</option>
            <option value="Direct">Direct</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="createdBy">Lead Created By:</label>
          <select
            id="createdBy"
            name="createdBy"
            value={leadData.createdBy}
            onChange={handleChange}
            required
          >
            <option value="">Select Creator</option>
            <option value="ExpressRupya Team Member">ExpressRupya Team Member</option>
            <option value="Lead Owner">Lead Owner</option>
          </select>
        </div>

        <button type="submit">Submit</button>
      </form>

      {leads.length > 0 && (
        <div>
          <h2>Leads</h2>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Joint Name</th>
                <th>Region</th>
                <th>State</th>
                <th>City</th>
                <th>Priority</th>
                <th>Source</th>
                <th>Created By</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{lead.firstName}</td>
                  <td>{lead.lastName}</td>
                  <td>{lead.jointName}</td>
                  <td>{lead.region}</td>
                  <td>{lead.state}</td>
                  <td>{lead.city}</td>
                  <td>{lead.priority}</td>
                  <td>{lead.source}</td>
                  <td>{lead.createdBy}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default LeadCreationForm;
