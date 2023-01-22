import React from "react";
import "./categories.css";

const Categories = () => {
  return (
    <>
      <div className="container">
        <div className="categor">
          <div className="categor__text">
            <h6>why choose us</h6>
            <h2>why choose our products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="categor__counter">
            <div className="chart">
              <div className="chart__text">
                <h5>BATTERY LIFE</h5>
                <span>90%</span>
              </div>
               <div className="chart__counter">
                  <span className="counter__top w-90"></span>
                </div>
            </div>
            <div className="chart">
                 <div className="chart__text">
                <h5>FIRING BUTTON</h5>
                <span>75%</span>
              </div>
                 <div className="chart__counter">
                  <span className="counter__top w-75"></span>
                </div>
            </div>
            <div className="chart">
                 <div className="chart__text">
                <h5>SAFETY FEATURES</h5>
                <span>92%</span>
              </div>
               <div className="chart__counter">
                  <span className="counter__top w-92"></span>
                </div>
            </div>
            <div className="chart">
                <div className="chart__text">
                <h5>AIR FLOW CONTROL</h5>
                <span>86%</span>
              </div>
              <div className="chart__counter">
                  <span className="counter__top w-86"></span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
