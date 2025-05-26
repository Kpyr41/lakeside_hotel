import React from 'react';
 
 function Service() {
  return (
    <>
     <div className="container" id="service">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">
                Our Services
              </h6>
              <h1 className="mb-5">
                Explore Our{" "}
                <span className="text-primary text-uppercase">Services</span>
              </h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <a className="service-item rounded" >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-hotel fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 className="mb-3">Room Service</h5>
                  <p className="text-body mb-0">
                    Indulge in meals served in the comfort of your room or
                    balcony.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.2s"
              >
                <a className="service-item rounded" >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-utensils fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 className="mb-3">Restaurant (Cafe Lakeside)</h5>
                  <p className="text-body mb-0">
                    Savor Asian, Indian, Continental, and Italian cuisine with
                    stunning lake views at Cafe Lakeside.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <a className="service-item rounded" >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-wifi fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 className="mb-3">Free Wifi</h5>
                  <p className="text-body mb-0">
                    Stay connected throughout your stay.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.4s"
              >
                <a className="service-item rounded" >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-cog fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 className="mb-3">Climate Control</h5>
                  <p className="text-body mb-0">
                    Enjoy modern comfort with AC, 24/7 hot water, and serene
                    lakeside views at Lakeside Inn..
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <a className="service-item rounded">
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-car fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 className="mb-3">Car Parking</h5>
                  <p className="text-body mb-0">
                    For-in-house guests only on first come first serve bases.
                  </p>
                </a>
              </div>
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay="0.6s"
              >
                <a className="service-item rounded" >
                  <div className="service-icon bg-transparent border rounded p-1">
                    <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                      <i className="fa fa-campground fa-2x text-primary"></i>
                    </div>
                  </div>
                  <h5 className="mb-3">Outdoor Seating</h5>
                  <p className="text-body mb-0">
                    Dine al fresco with beautiful views and a refreshing breeze.
                  </p>
                </a>
              </div>
            </div>
          </div>
    </>
  
  );
}

export default Service;