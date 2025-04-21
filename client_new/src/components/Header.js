import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top py-0 bg-white shadow-sm">
      <a href="#" className="navbar-brand">
        <img src="img/Login/RMC-logo.png" className="d-inline ml-2 p-2" alt="MMG-logo" />
      </a>
      <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <i className="material-icons">more_vert</i>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav ml-auto">
          <div className="border-right d-none d-md-block"></div>
          <li className="nav-item dropdown d-none d-md-block">
            <a
              className="nav-link profile-circle"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <p className="profile-circle-inner">AY</p>
            </a>
            <div className="dropdown-menu dropdown-menu-side pb-0" style={{ minWidth: 220 }}>
              <a className="dropdown-item py-2" href="login.html">
                <i className="material-icons">power_settings_new</i> Logout
              </a>
            </div>
          </li>
          <div className="d-md-none">
            <li className="nav-item">
              <a className="nav-link" href="login.html">
                <i className="material-icons">power_settings_new</i> Logout
              </a>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Header;