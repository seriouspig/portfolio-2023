import React, { useState } from 'react'
import Title from '../../Title'
import Project from './Project'
import millionaires_img from "../../../assets/images/projects/wwtbam.png"
import grooooaar_img from "../../../assets/images/projects/grooooaar.gif";
import idefender_img from "../../../assets/images/projects/idefender.gif";
import ward_img from "../../../assets/images/projects/theward.png";
import "./Projects.css"

const Projects = () => {
        const [isActive, setIsActive] = useState(false);

        
    const isTouchDevice = () => {
      return (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      );
    }

    console.log(isTouchDevice())


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
        <a
          onClick={handleClick}
          href="projects.html"
          target="_blank"
          className="project-1"
        >
          <article className="project">
            <img
              src={millionaires_img}
              className="project-img"
              alt="project image"
            />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        {/* <!-- single project --> */}
        <a href="projects.html" className="project-2">
          <article className="project">
            <img src={grooooaar_img} className="project-img" alt="project image" />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        {/* <!-- single project --> */}
        <a href="projects.html" className="project-3">
          <article className="project">
            <img src={idefender_img} className="project-img" alt="project image" />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        {/* <!-- single project --> */}
        <a href="projects.html" className="project-4">
          <article className="project">
            <img src={ward_img} className="project-img" alt="project image" />
            <div className="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
      </div>
    </section>
  );
}

export default Projects