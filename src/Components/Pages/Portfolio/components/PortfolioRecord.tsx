import React from "react";

function PortfolioRecord({
  title,
  description,
  caption,
  image
}: any) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="portfolio__item">
        <div className="portfolio__image">
          <img src={image} alt="" />
        </div>
        <div className="portfolio__description">
          <div dangerouslySetInnerHTML={{__html: caption}} />
        </div>
        <ul className="portfolio__links">
          <li>
            <a
              href={`http://${title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PortfolioRecord;
