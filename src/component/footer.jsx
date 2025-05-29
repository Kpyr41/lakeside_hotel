import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeNavbar();
    }
  };

  return (
    <>
      <div className="container-xxl pt-5 px-0 ">
        <div
          className="container-fluid bg-dark text-light footer wow fadeIn pt-5"
          data-wow-delay="0.1s"
        >
          <div className="container pb-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className=" rounded p-4">
                  <a href="index.html">
                    <h2 className="text-white text-uppercase mb-3">
                      Lakeside Inn
                    </h2>
                  </a>
                  <p className="text-white mb-0">
                    Hotel Lakeside Inn offers luxurious rooms and world-class
                    dining at a prime location on Mall Road, Nainital.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h6 className="section-title text-start text-primary text-uppercase mb-4">
                  Contact
                </h6>
                <p className="mb-2">
                  <a
                    href="https://www.google.com/maps?q=Mall+Rd,+Mallital,+Nainital,+Uttarakhand+263001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none text-white"
                  >
                    <i className="fa fa-map-marker-alt me-3"></i>
                    Mall Rd, Mallital, Nainital, Uttarakhand 263001
                  </a>
                </p>

                <p className="mb-2">
                  <a
                    href="tel:+917448756748"
                    className="text-decoration-none text-white"
                  >
                    <i className="fa fa-phone-alt me-3"></i>
                    +91 7448756748
                  </a>
                </p>

                <p
                  className="mb-2"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <i
                    className="fa fa-envelope"
                    style={{ marginRight: "8px" }}
                  ></i>
                  <a
                    href="mailto:lakesideinnnainital@redeffmail.com"
                    className="text-decoration-none text-white"
                    style={{ fontSize: "14px" }}
                  >
                    lakesideinnnainital@redeffmail.com
                  </a>
                </p>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="row gy-5 g-4">
                  <div className="col-md-6">
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      Links
                    </h6>
                    <Link
                      to="/term-condition"
                      className="btn btn-link"
                      onClick={closeNavbar}
                    >
                      Terms & Conditions
                    </Link>
                    <Link
                      to="/privacy-policy"
                      className="btn btn-link"
                      onClick={closeNavbar}
                    >
                      Privacy Policy
                    </Link>
                  </div>
                  <div className="col-md-6">
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      Services
                    </h6>
                    <a className="btn btn-link" href="">
                      Room Service
                    </a>
                    <a className="btn btn-link" href="">
                      Restaurant (Cafe Lakeside)
                    </a>
                    <a className="btn btn-link" href="">
                      Free Wifi
                    </a>
                    <a className="btn btn-link" href="">
                      Climate Control
                    </a>
                    <a className="btn btn-link" href="">
                      Car Parking
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("menubar");
          }}
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default Footer;
