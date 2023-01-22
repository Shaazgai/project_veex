import React from "react";
import "./selection.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Selection = () => {
  return (
    <>
      <div className="container">
        <div className="const">

                 
        <section className="product">
          <div className="product__left">
            <h6>Categories</h6>
            <h2>PRODUCT SELECTION</h2>
          </div>
          <div className="product__right">
            <a href="#">
              <button>MORE PRODUCTS</button>
            </a>
          </div>
        </section>
        <section id="selection">
          <div className="selection__content">
            <div className="selection__text">
              <h4>E-Juices</h4>
              <p>
                Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod
                tempor incididunt.
              </p>
              <a href="#">
                <button>
                  EPLORE
                  <MdKeyboardArrowRight className="arrow" />
                </button>
              </a>
            </div>
            <div className="selection__img">
              <img src={require("../../assets/Images/product-01.jpg")} alt="" />
              </div>
                 <div className="selection__text">
              <h4>Accessories</h4>
              <p>
                Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod
                tempor incididunt.
              </p>
              <a href="#">
                <button>
                  EXPLORE
                  <MdKeyboardArrowRight className="arrow" />
                </button>
              </a>
            </div>
          </div>
          <div className="selection__content">
              <div className="selection__img">
                  <img src={require("../../assets/Images/product-02.jpg")} alt="" />
            </div>
            <div className="selection__text">
              <h4>Devices</h4>
              <p>
                Lorem ipsum dolor sit amet, co adipiscing elit, sed do eiusmod
                tempor incididunt.
              </p>
              <a href="#">
                <button>
                  EPLORE
                  <MdKeyboardArrowRight className="arrow" />
                </button>
              </a>
              </div>
                     <div className="selection__img">
              <img src={require("../../assets/Images/product-03.jpg")} alt="" />
            </div>
          </div>
          </section>
            </div> 
      </div>
    </>
  );
};

export default Selection;
