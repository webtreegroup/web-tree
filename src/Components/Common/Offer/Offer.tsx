import React from "react";
import Slider from "react-slick";

import "./Home.scss";

function Home() {
  const settings = {
    dots: false,
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
                  <h1>Open your representation in web is simple</h1>
                  <h3>
                    We will help you to compose a technical task, draw a prototype, make up your a layout, fill it with content, develop all necessary functionality.
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
                  <h1>Technical support for your website</h1>
                  <h3>
                    We can improve design, structure, edit content, add additional functionality and more.
                  </h3>
                  <a
                    href="#courses"
                    className="section-btn btn btn-default smoothScroll"
                  >
                    Discover more
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
