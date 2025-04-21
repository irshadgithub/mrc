import React from 'react';

const Login = () => {
  return (
    <div className="wrapper sticky-footer">
      <div className="Container">
        <div className="">
          <div className="layout-box" style={{ zIndex: 10 }}>
            <div className="row no-gutters">
              <div className="form-group col-md-12 col-12">
                <br />
                <div className="inner-data p-4">
                  <div className="mb-3">
                    <img
                      className="text-center login-logo"
                      src={`${process.env.PUBLIC_URL}/img/Login/RMC-logo.png`}
                      alt="Logo"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label-text">
                      Property Address Number<sup>*</sup>
                    </label>
                    <input
                      type="email"
                      className="bg-light form-control"
                      placeholder="Enter Property Address Number"
                      id="txtEmail"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label className="label-text">
                      Property Street Name<sup>*</sup>
                    </label>
                    <input
                      type="password"
                      className="form-control bg-light"
                      placeholder="Enter Street Name"
                    />
                  </div>
                  <div className="form-row mt-2">
                    <div className="form-group col-md-6 text-center">
                      <a
                        href="/project"
                        className="btn btn-primary py-3 w-100 label-text"
                      >
                        Log In
                      </a>
                    </div>
                    <div className="form-group col-md-6 text-center">
                      <a
                        href="#"
                        className="btn btn-secondary py-3 w-100 label-text"
                      >
                        Cancel
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Row */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;