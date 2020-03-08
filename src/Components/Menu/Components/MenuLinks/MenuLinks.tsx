import React from "react";

function MenuLinks() {
  return (
    <ul className="header-navigation">
      <li>
        <a href="#top" className="smoothScroll">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="smoothScroll">
          About
        </a>
      </li>
      <li>
        <a href="#team" className="smoothScroll">
          Our Teachers
        </a>
      </li>
      <li>
        <a href="#courses" className="smoothScroll">
          Courses
        </a>
      </li>
      <li>
        <a href="#contact" className="smoothScroll">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MenuLinks;
