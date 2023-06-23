// import React from 'react';
// import './NavbarElements.css';
// import logo from './Logo.png';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-left">
//         <img src={logo} alt="Company Logo" className="navbar-logo" />
//         <div className="navbar-menu" onClick={toggleSidebar}>
//           <span className="navbar-menu-icon">&#9776;</span>
//         </div>
//       </div>
//       <div className="navbar-right">
//         <div className="navbar-profile">
//           <img src="https://templates.iqonic.design/datum/react/build/static/media/1.9764f0f0.jpg" alt="Profile Avatar" className="navbar-profile-avatar" />
//           <span className="navbar-profile-name">Abhishek</span>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import './NavbarElements.css';
import logo from './Logo.png';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Company Logo" className="navbar-logo" />
        <div className="navbar-menu" onClick={toggleSidebar}>
        <span className="navbar-menu-icon">&#9776;</span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-profile">
        <img src="https://templates.iqonic.design/datum/react/build/static/media/1.9764f0f0.jpg" alt="Profile Avatar" className="navbar-profile-avatar" />
        <span className="navbar-profile-name">Abhishek</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
