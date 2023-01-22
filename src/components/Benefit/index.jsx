import React from "react";
import "./benefit.css";
import { BsEmojiSmile } from "react-icons/bs";
import { RiWalletLine } from "react-icons/ri";
import { FaSmoking } from "react-icons/fa";
import { FaSkull } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";

const Benefit = () => {
  return (
    <>
      <div className="container">
        <div className="Benefit">
          <div className="benefit__text">
            <h6>The Benefits</h6>
            <h2>VAPING VS SMOKING</h2>
          </div>
          <div className="benefit">
            <div className="benefit__content">
              <div className="benefit__left">
                <div className="left__content">
                  <BsEmojiSmile />
                </div>
                <div className="left__contents">
                  <h5>No Bad Smell </h5>
                  <p>Lorem ipsum dolor sit amet, concetur adipscin. </p>
                </div>
              </div>
              <div className="benefit__left">
                <div className="left__content">
                  <RiWalletLine />
                </div>
                <div className="left__contents">
                  <h5>More Cost Effective </h5>
                  <p>Lorem ipsum dolor sit amet, concetur adipscin. </p>
                </div>
              </div>
              <div className="benefit__left">
                <div className="left__content">
                  <FaSmoking />
                </div>
                <div className="left__contents">
                  <h5>Help Quit Smoking </h5>
                  <p>Lorem ipsum dolor sit amet, concetur adipscin. </p>
                </div>
              </div>
            </div>
            <div className="benefit__img">
              <img src={require("../../assets/Images/vape-king.png")} alt="" />
            </div>
            <div className="benefit__content">
              <div className="benefit__right">
                <div className="right__content">
                  <FaSkull />
                </div>
                <div className="right__contents">
                  <h5>Safer than Smoking </h5>
                  <p>Lorem ipsum dolor sit amet, concetur adipscin. </p>
                </div>
              </div>
              <div className="benefit__right">
                <div className="right__content">
                  <FaUserFriends />
                </div>
                <div className="right__contents">
                  <h5>Harmless to Around </h5>
                  <p>Lorem ipsum dolor sit amet, concetur adipscin. </p>
                </div>
              </div>
              <div className="benefit__right">
                <div className="right__content">
                  <FaHandHoldingMedical />
                </div>
                <div className="right__contents">
                  <h5>Better For Your Health </h5>
                  <p>Lorem ipsum dolor sit amet, concetur adipscin. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefit;
