import React from 'react';

const LeadDisplay = ({ leads }) => {
  return (
    <div className="container">
      <h1>Leads</h1>
      {leads.length > 0 ? (
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
      ) : (
        <p>No leads found.</p>
      )}
    </div>
  );
};

export default LeadDisplay;
