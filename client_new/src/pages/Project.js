import React from 'react';

const ProjectPage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg fixed-top py-0" style={{ backgroundColor: 'white', boxShadow: '0 2px 2px rgba(0,0,0,0.05), 0 2px 2px rgba(0,0,0,0.05)' }}>
      
        <a href="#" className="navbar-brand">
          <img
            src="img/Login/RMC-logo.png"
            className="d-inline ml-2 p-2"
            alt="MMG-logo"
            style={{ height: '60px' }}
          />
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
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                className="profile-circle"
              >
                <p className="profile-circle-inner">AY</p>
              </a>
              <div className="dropdown-menu dropdown-menu-side pb-0" style={{ minWidth: '220px' }}>
                <a className="dropdown-item py-2" href="login.html">
                  <i className="material-icons">power_settings_new</i>Logout
                </a>
              </div>
            </li>

            <div className="desk-hide">
              <li className="navbar-item active label-text mr-3 nav-user">
                <a className="nav-link" href="login.html">
                  <i className="material-icons">power_settings_new</i>Logout
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="wrapper">
        <div className="container">
          <div className="row no-gutters sticky-footer">
            <div className="col-12">
              <div className="mt-2">
                <div className="inner-data back-box">
                  <div className="row mb-0">
                    <div className="col-md-9">
                      <h3 className="mb-1">PROJECTS</h3>
                      <nav aria-label="breadcrumb" className="mobile-hide">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item active" aria-current="page">
                            <small>Projects</small>
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-md-3 text-right mb-0">
                      <input type="text" className="form-control" placeholder="Search" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="back-box">
                <div style={{ overflowX: 'auto' }}>
                  <table className="table table-bordered table-hover table-responsive w-100 d-table mb-0">
                    <thead className="tablethead">
                      <tr>
                        <th className="py-3 icon-size">Project Name</th>
                        <th className="py-3 icon-size">Meeting Date <i className="material-icons">swap_vert</i></th>
                        <th className="py-3 icon-size">City <i className="material-icons">swap_vert</i></th>
                        <th className="py-3 icon-size">Client Name <i className="material-icons">swap_vert</i></th>
                        <th className="py-3">Updates</th>
                        <th className="py-3">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Kitchen', 'Mar 12, 2025', 'Plano', 'John Smith', 'Re-considering the project. Needs Rev,..'],
                        ['Master Bed Room', 'Apr 2, 2025', 'Allen', 'John Smith', 'Conf Call Jan 6 @ 3pm. Kick Off Mtg..'],
                        ['Kids Room', 'Mar 16, 2025', 'Frisco', 'John Smith', 'Re-considering the project. Needs..'],
                        ['Project 3', 'Mar 24, 2025', '-', 'John Smith', 'Re-considering the project. Needs Rev,..'],
                        ['Project 1', 'Mar 25, 2025', '-', 'John Smith', 'Re-considering the project. Needs Rev,..'],
                        ['Kitchen', 'Mar 12, 2025', 'Plano', 'John Smith', 'Re-considering the project. Needs Rev,..'],
                        ['Master Bed Room', 'Apr 2, 2025', 'Allen', 'John Smith', 'Conf Call Jan 6 @ 3pm. Kick Off Mtg..'],
                        ['Kids Room', 'Mar 16, 2025', 'Frisco', 'John Smith', 'Re-considering the project. Needs..'],
                        ['Project 3', 'Mar 24, 2025', '-', 'John Smith', 'Re-considering the project. Needs Rev,..'],
                        ['Project 1', 'Mar 25, 2025', '-', 'John Smith', 'Re-considering the project. Needs Rev,..']
                      ].map(([name, date, city, client, update], i) => (
                        <tr key={i}>
                          <td>{name}</td>
                          <td>{date}</td>
                          <td>{city}</td>
                          <td>{client}</td>
                          <td>{update}</td>
                          <td><a href="project_detail.html"><b>View Details</b></a></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="border bg-light py-2 px-4">
                    <label className="mb-0">1 - 10 of 30 ( 1 selected )</label>
                    <div className="float-right">
                      <a href="#" className="text-muted">
                        <i className="material-icons icon-buttons" style={{ verticalAlign: 'middle' }}>keyboard_arrow_left</i>
                      </a>
                      <a href="#" className="text-success font-weight-bold"><span className="mr-3 h6">1</span></a>
                      <a href="#"><span className="mr-3 h6 text-dark">2</span></a>
                      <a href="#"><span className="mr-0 h6 text-dark">3</span></a>
                      <a href="#" className="text-dark">
                        <i className="material-icons icon-buttons" style={{ verticalAlign: 'middle' }}>keyboard_arrow_right</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-100" style={{ backgroundColor: '#6f42c1', color: 'white' }}>
        <div className="footer-bottom inner-data text-center py-2">
          <p className="mb-0"><small>Copyright © 2025 MRC. All rights reserved</small></p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectPage;
