import React from 'react';
import './navbar.scss';
import { MdLocationOn } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import { BiEnvelope } from 'react-icons/bi';
import { GrFacebookOption } from 'react-icons/gr';
import { FaTwitter } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';
import { AiFillYoutube } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Navbar = () => {
  return (
    <section id="navbar">
      <div className="container">
        <div className="info__Img">
          <img src={require('../../assets/Images/bg.jpg')} />
        </div>
        <div className="navbar__info">
          <div className="start starts">
            <div className="start_left">
              <MdLocationOn className="icon" />
              <span className="line">
                <a href="#" className="link">
                  4140 Parker, Wichita 31134
                </a>
              </span>
              <MdAccessTime className="icon lines" />
              <span className="line">Mon-Fri: 11am - 9pm</span>
              <BiEnvelope className="icon lines" />
              <span className="line">
                <a href="#" className="link">
                  help@tokokoo.com
                </a>
              </span>
            </div>
            <div className="start_right">
              <a href="#">
                <GrFacebookOption className="big_icon" />
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
                <SiTiktok className="big_icon" />
              </a>
            </div>
          </div>
          <div className="border"></div>
        </div>
        <section id="nav">
          <div className="nav__Img">
            <img src={require('../../assets/Images/logo.png')} alt="" />
            <div className="nav__text">
              <a href="#">Home</a>
              <a href="#" className="navs">
                Product
              </a>
              <a href="#" className="navs">
                Services
              </a>
              <a href="#" className="navs">
                Pages <MdKeyboardArrowDown className="Text" />
              </a>
              <a href="#" className="navs">
                Contact
              </a>
              <button>
                <FaPhoneAlt className="text" /> +44 0987-6543
              </button>
            </div>
          </div>
        </section>

        {/* <div className="navbar__main">asdaiiiisasd</div> */}
      </div>
    </section>
  );
};

export default Navbar;
