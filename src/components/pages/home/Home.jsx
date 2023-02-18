import React, { useEffect, useState } from "react";
import "./Home2.css";
import Type from "./Type";
import { ReactComponent as PiotrSvg } from "../../../assets/logos/test.svg";
import { ReactComponent as PiotrSketchSvg } from "../../../assets/logos/sketch.svg";
import landingImage1 from "../../../assets/images/landing_page_3_final.png"
import tvStatic1 from "../../../assets/images/tv_static_1.gif";
import tvGame1 from "../../../assets/images/projects/idefender.gif"


const Home = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <div className="section-center hero-center">
        <article class="hero-img">
          <div
            className="selector-screen-1"
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
          ></div>
          <div className="static-container">
            <img className="static_1" src={tvStatic1} alt="" />
          </div>
          {isShown && (
            <div className="static-container active">
              <img className="static_1 game_1" src={tvGame1} alt="" />
            </div>
          )}
          <img src={landingImage1} class="hero-photo" alt="john doe" />
        </article>
        <article className="hero-info">
          <div className="underline"></div>
          <h1>Hello, I'm Piotr</h1>
          <h4>freelance web & mobile UI/UX designer</h4>
          <a href="contact.html" className="btn hero-btn">
            hire me
          </a>
          {/* <!-- social icons --> */}
          <ul className="social-icons hero-icons">
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-squarespace"></i>
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com" class="social-icon">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </article>
      </div>
    </>
  );
};

export default Home;
