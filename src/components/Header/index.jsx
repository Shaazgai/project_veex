import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <>
      <div className="container">
        <div className="head__title">
          <div className="mix">
            <h1>Vapor is the new cool</h1>
          </div>

          <p>
            Morbi tristique senectus et netus et malesuada fames ac. Nunc vel
            risus commodo viverra.Non pulvinar neque laoree.
          </p>
          <div className="head__text">
            <div className="text_left">
              {' '}
              <a href="#">
                <button>learn more</button>
              </a>
            </div>
            <div className="text_right">
              {' '}
              <a href="https://www.youtube.com/watch?v=v-jY87whefE">
                <img
                  src={require('../../assets/Images/play_icon.png')}
                  alt=""
                />
              </a>
              <h5>Watch Video</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
