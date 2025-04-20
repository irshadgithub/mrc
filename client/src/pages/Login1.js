import React from 'react';
import '../assets/css/style.css'; // Adjust if your CSS is stored elsewhere
import logo from '../assets/images/RMC-logo.png'; // Move image to public or import it

const Login1 = () => {
  return (
    <div className="wrapper sticky-footer">
      <div className="Container">
        <div className="">
          <div className="layout-box" style={{ zIndex: 10 }}>
            <div className="row no-gutters">
              <div className="form-group col-md-12 col-12">
                <br /> <br />
                <div className="inner-data p-4">
                  <div className="mb-3">
                    <img className="login-brand-logo" src={logo} alt="Logo" />
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

                  <div className="form-row mb-3">
                    <div className="col-md-6 text-align">
                      {/* Modal Placeholder - Bootstrap modal would need react-bootstrap or similar */}
                    </div>
                  </div>

                  <div className="form-row mt-2">
                    <div className="form-group col-md-6 text-center">
                      <button className="btn btn-primary py-3 w-100 label-text">
                        Log In
                      </button>
                    </div>
                    <div className="form-group col-md-6 text-center">
                      <button className="btn btn-secondary py-3 w-100 label-text">
                        Cancel
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            </div>
            {/* row end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;
