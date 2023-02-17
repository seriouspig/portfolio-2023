import React, { useState } from "react";
import Title from "../../Title";
import Project from "./Project";
import millionaires_img from "../../../assets/images/projects/wwtbam.png";
import grooooaar_img from "../../../assets/images/projects/grooooaar.gif";
import idefender_img from "../../../assets/images/projects/idefender.gif";
import ward_img from "../../../assets/images/projects/theward.png";
import "./Projects.css";

const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };

  console.log(isTouchDevice());

  const handleClick = (event) => {
    if (!isActive && isTouchDevice() === true) {
      event.preventDefault();
      setIsActive((current) => !current);
    }
    console.log("Is active is: " + isActive);
  };

  return (
    <section className="section projects">
      {/* <!-- section title --> */}
      <div className="section-title">
        <h2>My work</h2>
        <div className="underline"></div>
        <p className="projects-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          provident, quod voluptatum porro ea accusantium ex ad molestiae
          dolorem quam voluptate, nihil iusto vitae cupiditate dolorum at
          expedita atque inventore officiis illum. Neque hic, itaque delectus
          voluptates necessitatibus molestiae rerum.
        </p>
      </div>
      <div className="projects-center section-center">
        {/* <!-- single project --> */}
        <Project
          image={idefender_img}
          title="Id-efender"
          info="A solo project developed as part of my Game Development Course at Edinburgh College. A spin on the 1981 Atari’s classic “Defender”."
        />
        {/* <!-- single project --> */}
        <Project
          image={millionaires_img}
          title="Millionaires"
          info="Group project developed during the CodeClan boot camp course. Based on the TV show – 'Who wants to be a millionaire'."
        />
        {/* <!-- single project --> */}
        <Project
          image={ward_img}
          title="The Ward"
          info="Final group project at CodeClan, developed using React.js and Java Spring Boot. Inspired by Bullfrog’s 1997 hit Theme Hospital"
        />
        {/* <!-- single project --> */}
        <Project
          image={grooooaar_img}
          title="GROOOOARR"
          info="Another entry for the itch.io Nokia 3310 game jam. Interesting enemy AI. A full-res version for mobile devces is in the works"
        />
      </div>
    </section>
  );
};

export default Projects;
