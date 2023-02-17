import React, { useEffect } from "react";
import classes from "./Home.module.css";
import Type from "./Type";
import { ReactComponent as PiotrSvg } from "../../../assets/logos/test.svg";
import DrawSVG from "react-svg-drawing";

const Home = () => {


  return (
    <>
      <div className={classes["home-container"]}>
        <div className={classes["info-container"]}>
          <div className="section-title">
            <h2>Hello I'm Piotr Gryko</h2>
            <div className="underline"></div>
            <Type />
            <p className="projects-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              provident, quod voluptatum porro ea accusantium ex ad molestiae.
            </p>
            <DrawSVG duration="10000" width="100%" target=".st1">
                <PiotrSvg />
            </DrawSVG>

          </div>
        </div>

        <div className={classes["image-container"]}></div>
      </div>
    </>
  );
};

export default Home;
