import React from "react";

import image1 from 'images/courses-image1.jpg';
import image2 from 'images/courses-image2.jpg';
import image3 from 'images/courses-image3.jpg';
import image4 from 'images/courses-image4.jpg';
import image5 from 'images/courses-image5.jpg';
import author1 from 'images/author-image1.jpg';
import author2 from 'images/author-image2.jpg';
import author3 from 'images/author-image3.jpg';
import author4 from 'images/author-image4.jpg';

import './Courses.scss';

function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Popular Courses{" "}
                <small>Upgrade your skills with newest courses</small>
              </h2>
            </div>

            <div className="row">
              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src={image1}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 12 / 7 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 7 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#s">Social Media Management</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src={author1}
                          className="img-responsive"
                          alt=""
                        />
                        <span>Mark Wilson</span>
                      </div>
                      <div className="courses-price">
                        <a href="#s">
                          <span>USD 25</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src={image2}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 20 / 7 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 4.5 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#s">Graphic & Web Design</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src={author2}
                          className="img-responsive"
                          alt=""
                        />
                        <span>Jessica</span>
                      </div>
                      <div className="courses-price">
                        <a href="#s">
                          <span>USD 80</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src={image3}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 15 / 8 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 6 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#s">Marketing Communication</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src={author3}
                          className="img-responsive"
                          alt=""
                        />
                        <span>Catherine</span>
                      </div>
                      <div className="courses-price free">
                        <a href="#s">
                          <span>Free</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src={image4}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 10 / 8 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 8 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#s">Summer Kids</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src={author4}
                          className="img-responsive"
                          alt=""
                        />
                        <span>Mark Wilson</span>
                      </div>
                      <div className="courses-price">
                        <a href="#s">
                          <span>USD 45</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-4">
                <div className="item">
                  <div className="courses-thumb">
                    <div className="courses-top">
                      <div className="courses-image">
                        <img
                          src={image5}
                          className="img-responsive"
                          alt=""
                        />
                      </div>
                      <div className="courses-date">
                        <span>
                          <i className="fa fa-calendar"></i> 5 / 10 / 2018
                        </span>
                        <span>
                          <i className="fa fa-clock-o"></i> 10 Hours
                        </span>
                      </div>
                    </div>

                    <div className="courses-detail">
                      <h3>
                        <a href="#s">Business &amp; Management</a>
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>

                    <div className="courses-info">
                      <div className="courses-author">
                        <img
                          src={author1}
                          className="img-responsive"
                          alt=""
                        />
                        <span>Jessica</span>
                      </div>
                      <div className="courses-price free">
                        <a href="#s">
                          <span>Free</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
