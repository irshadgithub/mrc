import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProjectDetail = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="row no-gutters sticky-footer">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="mt-2">
                <div className="inner-data back-box">
                  <div className="row mb-0">
                    <div className="col-md-9">
                      <h3 className="mb-1">PROJECT DETAILS</h3>
                      <nav aria-label="breadcrumb" className="mobile-hide">
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item">
                            <a href="/project">Projects</a>
                          </li>
                          <li className="breadcrumb-item active" aria-current="page">
                            <small>Kitchen Project Details</small>
                          </li>
                        </ol>
                      </nav>
                    </div>
                    <div className="col-md-3 text-right mb-0">
                      <p className="mb-0">
                        <b>Financial Status:</b>{' '}
                        <span className="badge badge-danger p-2">Payment Due</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="back-box">
                <div className="inner-data">
                  {/* Add Project Details content here */}
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;