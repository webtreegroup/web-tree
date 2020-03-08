import React from "react";
import Slider from "react-slick";

import "./Home.css";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section id="home">
      <div className="home-slider">
        <Slider {...settings}>
        
      
          <div className="item item-first">
            <div className="caption">
              <div className="container">
                <div className="col-md-6 col-sm-12">
                  <h1>Distance Learning Education Center</h1>
                  <h3>
                    Our online courses are designed to fit in your industry
                    supporting all-round with latest technologies.
                  </h3>
                  <a
                    href="#feature"
                    className="section-btn btn btn-default smoothScroll"
                  >
                    Discover more
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-second">
            <div className="caption">
              <div className="container">
                <div className="col-md-6 col-sm-12">
                  <h1>Start your journey with our practical courses</h1>
                  <h3>
                    Our online courses are built in partnership with technology
                    leaders and are designed to meet industry demands.
                  </h3>
                  <a
                    href="#courses"
                    className="section-btn btn btn-default smoothScroll"
                  >
                    Take a course
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="item item-third">
              <div className="caption">
                <div className="container">
                  <div className="col-md-6 col-sm-12">
                    <h1>Efficient Learning Methods</h1>
                    <h3>
                      Nam eget sapien vel nibh euismod vulputate in vel nibh.
                      Quisque eu ex eu urna venenatis sollicitudin ut at libero.
                      Visit{" "}
                      <a
                        rel="nofollow"
                        href="https://www.facebook.com/templatemo"
                      >
                        templatemo
                      </a>{" "}
                      page.
                    </h3>
                    <a
                      href="#contact"
                      className="section-btn btn btn-default smoothScroll"
                    >
                      Let's chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
            </Slider>
      </div>
    </section>
  );
}

export default Home;
