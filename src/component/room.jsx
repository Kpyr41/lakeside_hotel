import React from "react";

function Room() {
  return (
    <>
      <div className="container" id="room">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">
            Our Rooms
          </h6>
          <h1 className="mb-5">
            Explore Our{" "}
            <span className="text-primary text-uppercase">Rooms</span>
          </h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative  hover-zoom">
                <img className="img-fluid" src="img/luxury.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  ₹6037/Night
                </small>
              </div>

              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Luxury Room</h5>
                  <div className="ps-2" style={{ color: "#FEA116" }}>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="tel:+918905185569"
                  >
                    Call Now
                  </a>

                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    href="https://wa.me/+918905185569?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative hover-zoom">
                <img className="img-fluid" src="img/suit.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  ₹4560/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Sweet Room</h5>
                  <div className="ps-2" style={{ color: "#FEA116" }}>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="tel:+918905185569"
                  >
                    Call Now
                  </a>

                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    href="https://wa.me/+918905185569?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative hover-zoom">
                <img className="img-fluid" src="img/view.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  ₹5540/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">View Room</h5>
                  <div className="ps-2" style={{ color: "#FEA116" }}>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="tel:+918905185569"
                  >
                    Call Now
                  </a>

                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    href="https://wa.me/+918905185569?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative  hover-zoom">
                <img className="img-fluid" src="img/familyy.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  ₹4692/Night
                </small>
              </div>

              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Family Room</h5>
                  <div className="ps-2" style={{ color: "#FEA116" }}>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="tel:+918905185569"
                  >
                    Call Now
                  </a>

                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    href="https://wa.me/+918905185569?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative hover-zoom">
                <img className="img-fluid" src="img/superdulex.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  ₹4560/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Super Delux Room</h5>
                  <div className="ps-2" style={{ color: "#FEA116" }}>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>
                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="tel:+918905185569"
                  >
                    Call Now
                  </a>

                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    href="https://wa.me/+918905185569?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
            <div className="room-item shadow rounded overflow-hidden">
              <div className="position-relative hover-zoom">
                <img className="img-fluid" src="img/special.jpg" alt="" />
                <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">
                  ₹5223/Night
                </small>
              </div>
              <div className="p-4 mt-2">
                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">Special Room</h5>
                  <div className="ps-2" style={{ color: "#FEA116" }}>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                    <small className="fa fa-star "></small>
                  </div>
                </div>
                <div className="d-flex mb-3">
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bed text-primary me-2"></i>3 Bed
                  </small>
                  <small className="border-end me-3 pe-3">
                    <i className="fa fa-bath text-primary me-2"></i>2 Bath
                  </small>
                  <small>
                    <i className="fa fa-wifi text-primary me-2"></i>Wifi
                  </small>
                </div>

                <div className="d-flex justify-content-between">
                  <a
                    className="btn btn-sm btn-primary rounded py-2 px-4"
                    href="tel:+918905185569"
                  >
                    Call Now
                  </a>

                  <a
                    className="btn btn-sm btn-dark rounded py-2 px-4"
                    href="https://wa.me/+918905185569?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20booking%20a%20room%20at%20your%20restaurant.%20Could%20you%20please%20provide%20more%20details%20and%20availability%3F%20Thank%20you%21"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Room;
