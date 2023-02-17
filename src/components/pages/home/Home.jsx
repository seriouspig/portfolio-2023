import React, { useEffect } from "react";
import "./Home.css";
import Type from "./Type";
import { ReactComponent as PiotrSvg } from "../../../assets/logos/test.svg";


const Home = () => {


  return (
    <>
      <div className="home-container">
        <div className="info-container">
          <div className="section-title">
            <h2>Hello I'm Piotr Gryko</h2>
            <div className="underline"></div>
            <Type />
            <p className="projects-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              provident, quod voluptatum porro ea accusantium ex ad molestiae.
            </p>

                <PiotrSvg />


          </div>
        </div>

        <div className="image-container"></div>
      </div>
    </>
  );
};

export default Home;
