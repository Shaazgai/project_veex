import React from 'react';
import './useful.css';
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { SiTiktok } from "react-icons/si";


const Useful = () => {
  return (
    <>
      <div className="container">
        <section id="vap">
          <div className="vap__img">
            <img src={require('../../assets/Images/logo.png')} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut.
            </p>
          </div>
          <div className="vap__text">
            <h5>Quick Links</h5>
            <span> <a href="#">Home</a> </span>
            <span> <a href="#">About Us</a></span>
            <span> <a href="#">Products</a></span>
            <span><a href="#">Services</a></span>
          </div>
           <div className="vap__text">
            <h5>Useful Links</h5>
            <span> <a href="#">Privacy Policy</a> </span>
            <span> <a href="#">Terms & Conditions</a></span>
            <span> <a href="#">Supports</a></span>
            <span><a href="#">Read FAQs</a></span>
          </div>
             <div className="vap__text">
            <h5>Follow Us</h5>
            <span> <a href="#"> <GrFacebookOption className="big__icon" /></a><h3>Facebook</h3> </span>
            <span> <a href="#">   <BsInstagram className="big__icon" /> </a><h3>Instagram</h3></span>
            <span> <a href="#"> <FaTwitter className="big__icon" /></a><h3>Twitter</h3></span>
            <span><a href="#"> <SiTiktok className="big__icon" /></a><h3>Tiktok</h3></span>
          </div>
        </section>
        <footer>
          <h5>© 2022 Vapixo Elementor Template. All Rights Reserved.</h5>
        </footer>
      </div>
    </>
  );
};

export default Useful;
