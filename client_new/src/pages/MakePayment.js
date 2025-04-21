import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MakePayment = () => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <div className="container">
          <div className="row no-gutters sticky-footer">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="row no-gutters mt-4">
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12"></div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8 back-box col-12">
                  <div>
                    <div className="row no-gutters">
                      <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 col-12">
                        <div className="inner-data">
                          <p className="mb-0">
                            Customer Name: <b>Will & Jessica Kanewske</b>
                          </p>
                          <p className="mb-0">
                            Address: <b>Main St</b>
                          </p>
                          <p>
                            Project Name: <b>Master Bed Room</b>
                          </p>
                          <small>Total Amount Due:</small>
                          <h2>$ XX,XXX.XX</h2>
                        </div>
                      </div>
                      <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 col-12">
                        <div className="inner-data border">
                          <h4>Pay Now</h4>
                          <hr />
                          <div className="row mt-4">
                            <div className="form-group col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your name"
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Enter email address"
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Country name"
                              />
                            </div>
                            <div className="form-group col-md-12">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="4111 1111 1111 1111"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="form-group col-md-4">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Expiry Date"
                              />
                            </div>
                            <div className="form-group col-md-4">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="CVV"
                              />
                            </div>
                            <div className="form-group col-md-4">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Postal Code"
                              />
                            </div>
                          </div>
                          <div className="form-row mt-2">
                            <div className="form-group col-md-12 text-center">
                              <a
                                href="#"
                                onClick={() => alert('Payment processed!')}
                                className="btn btn-primary py-3 w-100 label-text"
                              >
                                Pay $906
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MakePayment;