import React from 'react';
import './news.css';
import {BsCheckLg } from 'react-icons/bs';

const News = () => {
  return (
    <>
      <div className="container">
        <section id="news">
          <div className="news__left">
            <h6>Categories</h6>
            <h2>PRODUCT SELECTION</h2>
          </div>
          <div className="news__content">
            <form>
              <input type="email" name="" placeholder="Enter you email" />
              <a href="#">
                <button>subscribe</button>
              </a>
            </form>
            <ul>
              <li>
                <BsCheckLg className="emogi" />
                <span>Offers </span>
              </li>
              <li>
                <BsCheckLg className="emogi" />
                <span>Discount </span>{' '}
              </li>
              <li>
                <BsCheckLg className="emogi" />
                <span>Useful Insights</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default News;
