import React from "react";

function Contact() {
  return (
    <>
      <div className="container" id="contact">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">
            Get in Touch
          </h6>
          <h1 className="mb-5">Connect with us</h1>
        </div>
        <div className="row g-4 mb-5">
          <div className="col-md-6">
            <div className="card text-center p-3 shadow-sm">
              <div className="mb-3">
                <div className="rounded-circle border border-2 border-danger d-inline-block p-2">
                  <i className="bi bi-geo-alt fs-3 text-danger"></i>
                </div>
              </div>
              <h5 className="fw-bold">Address</h5>
              <p className="mb-0">
                Mall Rd, Mallital, Nainital, Uttarakhand 263001
              </p>
            </div>

            <div className="row mt-4 g-3">
              <div className="col-6">
                <div className="card text-center p-3 shadow-sm">
                  <div className="mb-3">
                    <div className="rounded-circle border border-2 border-danger d-inline-block p-2">
                      <i className="bi bi-telephone fs-3 text-danger"></i>
                    </div>
                  </div>
                  <h5 className="fw-bold">Call Us</h5>
                  <p className="mb-0">+91 8905185569</p>
                </div>
              </div>
              <div className="col-6">
                <div className="card text-center p-3 shadow-sm">
                  <div className="mb-3">
                    <div className="rounded-circle border border-2 border-danger d-inline-block p-2">
                      <i className="bi bi-envelope fs-3 text-danger"></i>
                    </div>
                  </div>
                  <h5 className="fw-bold">Email Us</h5>
                  <p className="mb-0" style={{ fontSize: "14px" }}>
                    lakesideinnnainital@redeffmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" required />
              </div>
              <div className="mb-3">
                <label for="mobile" className="form-label">
                  Mobile Number
                </label>
                <input type="text" className="form-control" id="mobile" required />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
