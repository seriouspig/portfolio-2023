import React from "react";
import classes from "./Home.module.css";
import Type from './Type';

const Home = () => {
  return (
    <>
      <div className={classes["home-container"]}>
        <div className={classes["info-container"]}>
          <div class="section-title">
            <h2>Hello I'm Piotr Gryko</h2>
            <div class="underline"></div>
            <Type />
            <p class="projects-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              provident, quod voluptatum porro ea accusantium ex ad molestiae.
            </p>
          </div>
        </div>

        <div className={classes["image-container"]}></div>
      </div>
    </>
  );
};

export default Home;
