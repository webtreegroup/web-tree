import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getTechnologyStackAsync } from "redux/actions";

import { IRootState } from "redux/types";

import './TechnologyStack.scss';

function TechnologyStack({
  technologyStack,
  getTechnologyStackAsync
}: any) {
  useEffect(() => {
    getTechnologyStackAsync();
  }, []);

  return (
    <section id="technology-stack" className="technology-stack">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h2>
                Technology Stack <small>Frontend & Backend</small>
              </h2>
            </div>

            <div className="row">
              
              {technologyStack.length && technologyStack.map((el: any) => (
                <div className="col-md-2 col-sm-4 technology-stack__item-container">
                  <div className="technology-stack__item">
                    <img src={el.source_url} alt=""/>
                  </div>
                </div>
              ))}
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default connect(
  (state: IRootState) => ({
    technologyStack: state.technologyStack
  }),
  {
    getTechnologyStackAsync
  }
)(TechnologyStack);
