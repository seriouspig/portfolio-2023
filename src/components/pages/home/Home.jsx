import React, { useEffect } from "react";
import "./Home.css";
import Type from "./Type";
import { ReactComponent as PiotrSvg } from "../../../assets/logos/test.svg";
import { ReactComponent as PiotrSketchSvg } from "../../../assets/logos/sketch.svg";
import landingImage1 from "../../../assets/images/landing_page_3.png"


const Home = () => {


  return (
    <>
      <div className="home-container">
        <div className="info-container">
          <div className="landing-image-container">
            <img src={landingImage1} alt="" />
          </div>

          {/* <PiotrSketchSvg style={{ width: "100%", display: "block" }} /> */}
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
      </div>
    </>
  );
};

export default Home;
