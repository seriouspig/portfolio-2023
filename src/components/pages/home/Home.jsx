import React, { useEffect } from "react";
import "./Home2.css";
import Type from "./Type";
import { ReactComponent as PiotrSvg } from "../../../assets/logos/test.svg";
import { ReactComponent as PiotrSketchSvg } from "../../../assets/logos/sketch.svg";
import landingImage1 from "../../../assets/images/landing_page_3.png"
import tvStatic1 from "../../../assets/images/tv_static_1.gif";


const Home = () => {


  return (
    <>
      {/* <div className="home-container">
        <div className="info-container">
          <div className="landing-image-container">
            <img className="landing-img" src={landingImage1} alt="" />
            <div className="static-container">
              <img className="static_1" src={tvStatic1} alt="" />
            </div>
          </div>
          <div className="section-title">
            <h2>Hello I'm Piotr Gryko</h2>
            <div className="underline"></div>
            <Type />
            <p className="projects-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              provident, quod voluptatum porro ea accusantium ex ad molestiae.
            </p>
          </div>
        </div>
      </div> */}

      <div className="section-center hero-center">
        <article class="hero-img">
          <div className="static-container">
            <img className="static_1" src={tvStatic1} alt="" />
          </div>
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
