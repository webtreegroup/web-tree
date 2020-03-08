import React from 'react';

function MenuLinks() {
  return (
    <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-nav-first">
              <li><a href="#top" className="smoothScroll">Home</a></li>
              <li><a href="#about" className="smoothScroll">About</a></li>
              <li><a href="#team" className="smoothScroll">Our Teachers</a></li>
              <li><a href="#courses" className="smoothScroll">Courses</a></li>
              <li><a href="#testimonial" className="smoothScroll">Reviews</a></li>
              <li><a href="#contact" className="smoothScroll">Contact</a></li>
        </ul>

        <ul className="nav navbar-nav navbar-right">
              <li><a href="#s"><i className="fa fa-phone"></i> +65 2244 1100</a></li>
        </ul>
    </div>
  );
}

export default MenuLinks;
