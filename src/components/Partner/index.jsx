import React from "react";
import "./partner.css";


const Partner = () => {
  return (
    <>
      <div className="container">
              <section id="partner">
                  <div className="partner__content">
                      <h3>Trusted by our partners</h3>
          </div>
                  <div className="partner__img">
                      <img src={require("../../assets/Images/logo-1d.png")} alt="" />
                      <img src={require("../../assets/Images/logo-2.png")} alt="" />
                      <img src={require("../../assets/Images/logo-3.png")} alt="" />
                       <img src={require("../../assets/Images/logo-4.png")} alt="" />
                  </div>
   </section>
      </div>
    </>
  );
};

export default Partner;