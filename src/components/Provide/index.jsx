import React from "react";
import "./provide.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsFillCheckCircleFill } from "react-icons/bs"


const Provide = () => {
  return (
    <>
      <div className="container">
        <section id="provide">
          <div className="pro__img">
            <img src={require("../../assets/Images/vape__guy.jpg")} />
          </div>
          <div className="pro__text">
            <h6>OUR BEST SERVICE</h6>
            <h2>WE ARE THE BEST VAPE STORE IN TOWN</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <a href="#">
              <button>
                ABOUT US <AiOutlineArrowRight className="arrow" />
              </button>
            </a>
          </div>
        </section>
        <div className="stores">
                <div className="store">
          <div className="store__text">
              <ul>
                 <li><BsFillCheckCircleFill className="emogi"/><span>Best vape store </span></li>
                 <li><BsFillCheckCircleFill className="emogi"/><span>Friendly services </span> </li>
                 <li><BsFillCheckCircleFill className="emogi"/><span>100% Quarantee</span></li>
              </ul>
          </div>
          <div className="store__text">
              <ul>
                <li><BsFillCheckCircleFill  className="emogi"/><span>Good Prices</span></li>
               <li><BsFillCheckCircleFill className="emogi"/><span>Best product quality</span></li>
                <li><BsFillCheckCircleFill className="emogi"/><span>Many choices of liquids</span> </li>
              </ul>
          </div>
        </div>
     </div>
      </div>
    </>
  );
};

export default Provide;
