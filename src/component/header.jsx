import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };
  const closeNavbar = () => {
    setIsOpen(false);
  };

  // inside Header component
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToId: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        closeNavbar();
      }
    }
  };

  return (
    <>
      <div className="container-fluid px-0" style={{ overflowX: "hidden" }}>
        <div
          className="row py-2 m-0 text-primary"
          style={{ background: "#531E1F" }}
        >
          {/* Left Side - Contact Info */}
          <div className="col-12 col-lg-9 text-center text-lg-left mb-2 mb-lg-0">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-lg-start text-white gap-2 px-2">
              <small>
                <a
                  href="tel:+917448756748"
                  className="text-white text-decoration-none"
                >
                  <i
                    className="fa fa-phone-alt mr-2"
                    style={{ marginRight: "10px" }}
                  ></i>
                  +91 7448756748
                </a>
              </small>
              <small className="d-none d-md-inline px-2">|</small>
              <small>
                <i
                  className="fa fa-envelope mr-2"
                  style={{ marginRight: "10px" }}
                ></i>
                <a
                  href="mailto:lakesideinnnainital@redeffmail.com"
                  className="text-white text-decoration-none"
                >
                  lakesideinnnainital@redeffmail.com
                </a>
              </small>
              <small className="d-none d-md-inline px-2">|</small>
              <small>
                <a
                  href="https://www.google.com/maps?q=Mall+Rd,+Mallital,+Nainital,+Uttarakhand+263001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-white"
                >
                  <i
                    className="fa fa-map-marker-alt mr-2"
                    style={{ marginRight: "10px" }}
                  ></i>
                  Mall Rd, Mallital, Nainital, Uttarakhand 263001
                </a>
              </small>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="col-12 col-lg-3 text-center text-lg-right">
            <div className="d-flex justify-content-center justify-content-lg-end mt-2 mt-lg-0">
              <a
                className="text-white px-2"
                href="https://wa.me/+917448756748?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                className="text-white px-2"
                href="https://www.instagram.com/cafelakesidenainital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-0" id="menubar">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3 sticky-top w-100">
          <a href="/" className="navbar-brand text-uppercase ">
            <h1 className="text-primary">Lakeside Inn</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarCollapse"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse justify-content-end ${
              isOpen ? "show" : ""
            }`}
            id="navbarCollapse"
          >
            <div className="navbar-nav text-center">
              <a href="/" className="nav-item nav-link active">
                Home
              </a>
              <a
                href="#about"
                className="nav-item nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about");
                }}
              >
                About
              </a>
              <a
                href="#room"
                className="nav-item nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("room");
                }}
              >
                Rooms
              </a>
              <a
                href="#service"
                className="nav-item nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("service");
                }}
              >
                Services
              </a>
              <a
                href="#gallery"
                className="nav-item nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("gallery");
                }}
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="nav-item nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
