import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import author1 from 'images/author-image1.jpg';
import author2 from 'images/author-image2.jpg';
import author3 from 'images/author-image3.jpg';
import author4 from 'images/author-image4.jpg';

import './Team.scss';

function Team() {
  return (
    <section id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Teachers <small>Meet Professional Trainers</small>
              </h2>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img
                  src={author1}
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="team-info">
                <h3>Mark Wilson</h3>
                <span>I love Teaching</span>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img
                  src={author2}
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="team-info">
                <h3>Catherine</h3>
                <span>Education is the key!</span>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'google']} /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img
                  src={author3}
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="team-info">
                <h3>Jessie Ca</h3>
                <span>I like Online Courses</span>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon="envelope" /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-6">
            <div className="team-thumb">
              <div className="team-image">
                <img
                  src={author4}
                  className="img-responsive"
                  alt=""
                />
              </div>
              <div className="team-info">
                <h3>Andrew Berti</h3>
                <span>Learning is fun</span>
              </div>
              <ul className="social-icon">
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'google']} /></a>
                </li>
                <li>
                  <a href="#s"><FontAwesomeIcon icon={['fab', 'behance']} /></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
