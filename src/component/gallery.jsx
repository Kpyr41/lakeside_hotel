import { Carousel } from "react-bootstrap";
function Gallery() {
  const slides = [
    {
      id: 1,
      label: "Slide 1",
      img: "img/img1.jpg",
    },
    {
      id: 2,
      label: "Slide 2",
      img: "img/img2.jpg",
    },
    {
      id: 3,
      label: "Slide 3",
      img: "img/img3.jpg",
    },
    {
      id: 4,
      label: "Slide 4",
      img: "img/img4.jpg",
    },
    {
      id: 5,
      label: "Slide 5",
      img: "img/img5.jpg",
    },
    {
      id: 6,
      label: "Slide 6",
      img: "img/img6.jpg",
    },
  ];
  const chunkedSlides = [];
  for (let i = 0; i < slides.length; i += 3) {
    const group = slides.slice(i, i + 3);
    while (group.length < 3) {
      group.push(null);
    }
    chunkedSlides.push(group);
  }
  return (
    <>
      <div className="container" id="gallery">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">
            Gallery
          </h6>
          <h1 className="mb-5">
            Explore Our{" "}
            <span className="text-primary text-uppercase">Rooms & Views</span>
          </h1>
        </div>

        <div className="row g-4 pt-5">
          <Carousel indicators={false} interval={null}>
            {chunkedSlides.map((group, idx) => (
              <Carousel.Item key={idx} className="fade show">
                <div className="row g-3 justify-content-center">
                  {group.map((slide, index) => (
                    <div className="col-12 col-sm-6 col-md-4" key={index}>
                      {slide ? (
                        <div
                          className="card wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div
                            className="card-img-top hover-zoom"
                            style={{ height: "200px", overflow: "hidden" }}
                          >
                            <img
                              src={slide.img}
                              alt={slide.label}
                              className="img-fluid fade show"
                              style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                                transition: "opacity 1s ease-in-out",
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        <div style={{ height: "200px" }}></div>
                      )}
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default Gallery;
