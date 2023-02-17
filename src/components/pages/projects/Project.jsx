import React, { useState } from 'react'
import { FaHome ,FaGithub} from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { MdStayCurrentLandscape } from 'react-icons/md';
import millionaires_img from "../../../assets/images/projects/wwtbam.png";
import grooooaar_img from "../../../assets/images/projects/grooooaar.gif";
import idefender_img from "../../../assets/images/projects/idefender.gif";
import ward_img from "../../../assets/images/projects/theward.png";
import "./Project.css"

const Project = (props) => {
    const [isActive, setIsActive] = useState(false);

        const handleClick = (event) => {
            console.log("Is active is: " + isActive);
            setIsActive(current => !current)
            
        }

  return (
    <a
      onClick={handleClick}
      href="projects.html"
      target="_blank"
      className="project-1"
    >
      <article className="project">
        <img src={props.image} className="project-img" alt="project image" />
        <div className="project-info">
          <h4>{props.title}</h4>
          <p>{props.info}</p>
          <button className="btn btn-live">
            <BiLinkExternal /> &nbsp; View Project
          </button>
        </div>
      </article>
    </a>
  );
}

export default Project