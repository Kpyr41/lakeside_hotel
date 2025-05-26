import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Carousel } from "react-bootstrap";
import Service from "./component/service";
import Room from "./component/room";
import Gallery from "./component/gallery";
import Contact from "./component/contact";

const CounterUp = ({ end, duration = 2000 }) => {
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const stepTime = 30;
    const steps = Math.ceil(duration / stepTime);
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        current = end;
        clearInterval(timer);
      }
      if (ref.current) {
        ref.current.innerText = Math.floor(current);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <h2 className="mb-1" data-toggle="counter-up" ref={ref}>
      0
    </h2>
  );
};

function App() {
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

  const videoIframeRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const youtubeVideoId = "Kz3aOKhgRCo";

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    if (videoIframeRef.current) {
      videoIframeRef.current.src = "";
    }
  };

  const onModalShown = () => {
    const videoUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`;
    if (videoIframeRef.current) {
      videoIframeRef.current.src = videoUrl;
    }
  };
  return (
    <>
      <div className="container-xxl bg-white p-0">
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
                    href="tel:+918905185569"
                    className="text-white text-decoration-none"
                  >
                    <i
                      className="fa fa-phone-alt mr-2"
                      style={{ marginRight: "10px" }}
                    ></i>
                    +91 8905185569
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
                  href="https://wa.me/+918308655001?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a className="text-white px-2" href="#">
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

        <div className="container-fluid p-0 mb-5">
          <div
            id="header-carousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <Carousel
              fade
              controls={true}
              indicators={false}
              interval={5000}
              className="carousel slide"
              id="header-carousel"
            >
              <Carousel.Item className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="img/banner.jpeg"
                  alt="First slide"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                      Exclusive Destinations
                    </h6>
                    <h1 className="display-4 text-white mb-4 animated slideInDown">
                      Elevate Your Journey with Refined Stays
                    </h1>
                    
                    <a
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("gallery");
                      }}
                    >
                      Explore Luxury
                    </a>
                  </div>
                </div>
              </Carousel.Item>

              <Carousel.Item className="carousel-item">
                <img
                  className="d-block w-100"
                  src="img/carousel-2.jpg"
                  alt="Second slide"
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{ maxWidth: "700px" }}>
                    <h6 className="section-title text-white text-uppercase mb-3 animated slideInDown">
                      Luxury Living
                    </h6>
                    <h1 className="display-4 text-white mb-4 animated slideInDown">
                      Explore the Next Level of Lavish Living
                    </h1>
                    <a
                      className="btn btn-primary py-md-3 px-md-5 animated slideInRight"
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("gallery");
                      }}
                    >
                      Explore Luxury
                    </a>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
        <div
          className="container-fluid booking pb-5 wow fadeIn"
          data-wow-delay="0.1s"
        ></div>

        <div className="container-xxl py-5">
          <div className="container" id="about">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="section-title text-start text-primary text-uppercase">
                  About Us
                </h6>
                <h2 className="mb-4">
                  Welcome to{" "}
                  <span className="text-primary text-uppercase">
                    Lakeside Inn
                  </span>
                </h2>
                <p className="mb-4">
                  Hotel Lakeside Inn is a Luxurious Hotel Situated at Mall Road
                  Nainital. Location of Hotel is The Mall, Mallital, Nainital,
                  Uttarakhand 263002. We provide world class Luxurious
                  facilities of our rooms. We provide best qualities food and
                  cuisines.
                </p>
                <div className="row g-3 pb-4">
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                        <CounterUp end={150} />
                        <p className="mb-0">Rooms</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                        <CounterUp end={195} />
                        <p className="mb-0">Staffs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users fa-2x text-primary mb-2"></i>
                        <CounterUp end={parseInt("165000", 10)} />
                        <p className="mb-0">Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="btn btn-primary py-3 px-5 mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                >
                  Explore More
                </a>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="img/abt1.jpeg"
                      style={{ marginTop: "25%" }}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="img/abt2.jpeg"
                    />
                  </div>
                  <div className="col-6 text-end">
                    <img
                      className="img-fluid rounded w-50 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="img/abt3.jpeg"
                    />
                  </div>
                  <div className="col-6 text-start">
                    <img
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="img/abt4.jpeg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <Room />
        </div>

        <div
          className="container-xxl py-5 px-0 wow zoomIn"
          data-wow-delay="0.1s"
        >
          <div className="row g-0">
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5">
                <h6 className="section-title text-start text-white text-uppercase mb-3">
                  Your Escape
                </h6>
                <h1 className="text-white mb-4">
                  Stay Where Comfort Meets Nature
                </h1>
                <p className="text-white mb-4">
                  Welcome to Lakeside Inn — your peaceful retreat by the lake
                  with easy access to the city's vibrant life. Enjoy cozy rooms
                  with lake views or relaxing balconies, top-notch cleanliness,
                  and a safe environment. Savor delicious meals at our onsite
                  restaurant and benefit from convenient parking. Whether for
                  business or leisure, we promise a memorable stay in the heart
                  of Central.
                </p>

                <a
                    className="btn btn-sm btn-primary  rounded py-2 px-4" 
                    href="https://wa.me/8905185569"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video">
                <button className="btn btn-play" onClick={openModal}>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* modal */}
        <>
          {showModal && (
            <div
              className="modal fade show d-block"
              id="videoModal"
              tabIndex="-1"
              aria-labelledby="videoModalLabel"
              aria-modal="true"
              role="dialog"
              onClick={closeModal}
              onAnimationEnd={onModalShown}
            >
              <div
                className="modal-dialog modal-lg"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
              >
                <div className="modal-content rounded-0">
                  <div className="modal-header">
                    <h5 className="modal-title" id="videoModalLabel">
                      YouTube Video
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={closeModal}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="ratio ratio-16x9">
                      {youtubeVideoId && (
                        <iframe
                          className="embed-responsive-item"
                          src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1`}
                          allowFullScreen
                          allow="autoplay; encrypted-media"
                          title="YouTube video"
                        ></iframe>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
        {/* modal end */}
        <div className="container-xxl py-5">
          <Service />
        </div>
        <div className="container-xxl py-5">
          <Gallery />
        </div>

        <div className="container-xxl py-5 ">
          <Contact />
        </div>
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
                      href="tel:+918905185569"
                      className="text-decoration-none text-white"
                    >
                      <i className="fa fa-phone-alt me-3"></i>
                      +91 8905185569
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
                      <a className="btn btn-link" href="">
                        Privacy Policy
                      </a>
                      <a className="btn btn-link" href="">
                        Terms & Condition
                      </a>
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
      </div>
    </>
  );
}

export default App;
