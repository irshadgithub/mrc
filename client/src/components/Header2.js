import React from 'react';
import logo from '../assets/images/RMC-logo.png'; // Move image to public or import it
import '../assets/css/style.css'; // Adjust if your CSS is stored elsewhere

const Header2 = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-0" style={{ backgroundColor: 'white', boxShadow: '0 2px 2px rgba(0,0,0,0.05)' }}>
      <a href="/" className="navbar-brand">
        <img src={logo} className="d-inline ml-2 p-2" alt="RMC-logo" />
      </a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <i className="material-icons">more_vert</i>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <div className="border-right mobile-hide"></div>
          <li className="navbar-item nav-user dropdown mobile-hide">
            <a
              data-toggle="dropdown"
              href="/profile"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              className="profile-circle"
            >
              <p className="profile-circle-inner">AY</p>
            </a>
            <div className="dropdown-menu dropdown-menu-side pb-0" style={{ minWidth: 220 }}>
              <a className="dropdown-item py-2" href="/login">
                <i className="material-icons">power_settings_new</i>Logout
              </a>
            </div>
          </li>
          <div className="desk-hide">
            <li className="navbar-item active label-text mr-3 nav-user">
              <a className="nav-link" href="/login">
                <i className="material-icons">power_settings_new</i>Logout
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header2;
