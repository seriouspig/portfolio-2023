import React from "react";
import classes from "./Home.module.css";
import Type from './Type';

const Home = () => {
  return (
    <>
      <div className={classes["home-container"]}>
        <div className={classes["info-container"]}>
          <Type />
        </div>

        <div className={classes["image-container"]}></div>
      </div>
    </>
  );
};

export default Home;
