import React from "react";
import "./say.css";
import {AiFillStar } from "react-icons/ai"

const Say = () => {
  return (
    <>
      <div className="container">
        <section id="say">
          <div className="benefit__text">
            <h6>The Benefits</h6>
            <h2>VAPING VS SMOKING</h2>
          </div>
                  <div className="say__contents">
                      <div className="say__content">
                          <div className="say__top">
                              <div className="best">Best Product Ever!</div>
                              <AiFillStar className="star" />
                              <AiFillStar  className="star"/>
                              <AiFillStar  className="star"/>
                              <AiFillStar  className="star"/>
                              <AiFillStar  className="star"/>
                          </div>
                          <p>"I will recommend you to my colleagues. Buy this now. Thanks to vape, we've just launched our 5th website! I will recommend you to my colleagues."</p>
                          <div className="say__bottom">
                              <div className="say__img">
                                    <img src={require("../../assets/Images/girl.jpg")} alt="" />
                              </div>
                              <div className="say__text">
                                  <h2>	
                                      Clarine Maroshka</h2>
                                  <p>Customer</p>
                              </div>
                          </div>
                      </div>
                      <div className="say__content say__right">
                               <div className="say__top">
                              <div className="best">Best Product Ever!</div>
                              <AiFillStar className="star" />
                              <AiFillStar className="star"/>
                              <AiFillStar className="star"/>
                              <AiFillStar className="star"/>
                              <AiFillStar className="star"/>
                          </div>
                          <p>"I will recommend you to my colleagues. Buy this now. Thanks to vape, we've just launched our 5th website! I will recommend you to my colleagues."</p>
                          <div className="say__bottom">
                              <div className="say__img">
                                    <img src={require("../../assets/Images/young.jpg")} alt="" />
                              </div>
                              <div className="say__text">
                                  <h2>	
                                      Clarine Maroshka</h2>
                                  <p>Customer</p>
                              </div>
                          </div>
                       </div>
                  </div>        
        </section>
      </div>
    </>
  );
};

export default Say;
