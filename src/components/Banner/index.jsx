import React from "react";
import "./banner.css";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <>
      <div className="container">
        <div className="banner">
          <div className="smoke">
            <div className="photo">
                <img src={require("../../assets/Images/smoke.png")} />
            </div>
          <h6>WHO WE ARE</h6>
          <h2>WE ARE THE BEST VAPE STORE IN TOWN</h2>
          <p>Lorem ipsum  dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <div className="follow">
              <div className="follows"><h5>Follow us:</h5></div>
             
                  <div className="start_right">
              <a href="#">
                <RiFacebookCircleFill className="big_icon" />
              </a>
              <a href="#">
                <FaTwitter className="big_icon" />
              </a>
              <a href="#">
                <BsInstagram className="big_icon" />
              </a>
              <a href="#">
                <AiFillYoutube className="big_icon" />
              </a>
              <a href="#">
                <BsTelegram className="big_icon" />
              </a>
              </div>
            </div>
              <div className='text_left'> <a href="#"><button>ABOUT US <AiOutlineArrowRight className="arrow"/></button></a></div>
        </div>
          <div className="story">
              <div className="store">
          <img src={require("../../assets/Images/sis.jpg")} />
        </div>
        <div className="stores">
          <img src={ require("../../assets/Images/bro__right.jpg")}/>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};

export default Banner;
