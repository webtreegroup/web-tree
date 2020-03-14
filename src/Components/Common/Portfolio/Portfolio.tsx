import React, { useEffect } from "react";
import { connect } from "react-redux";

import { PortfolioRecord } from "./components";

import { IRootState } from "redux/types";

import { getPortfolioAsync } from "redux/actions";

import './Portfolio.scss';

function Portfolio({
  portfolio,
  getPortfolioAsync,
  records
}: any) {
  useEffect(() => {
    getPortfolioAsync(records);
  }, []);
  
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Portfolio <small>Selection of some of our works</small>
              </h2>
            </div>
          </div>

          {portfolio.length && portfolio.map((el: any) => (
            <PortfolioRecord
              title={el.title.rendered}
              description={el.description.rendered}
              caption={el.caption.rendered}
              image={el.source_url}
            />
          ))}

        </div>
      </div>
    </section>
  );
}

export default connect(
  (state: IRootState) => ({
    portfolio: state.portfolio
  }),
  {
    getPortfolioAsync
  }
)(Portfolio);
