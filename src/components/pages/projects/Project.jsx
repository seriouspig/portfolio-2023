import React from 'react'
import { FaHome ,FaGithub} from "react-icons/fa";
import project_1_img from "../../../assets/images/project-1.jpeg"
import "./Project.css"

const Project = () => {
  return (
    <div className="card">
      {/* <!-- front of the card --> */}
      <div className="card-side card-front">
        <img src={project_1_img} alt="project image" />
        <div className="card-info">
          <h4>article title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum
            ea et in, debitis voluptatibus expedita odit magnam aperiam sint
            alias!
          </p>
          <div className="card-footer">
            <img src="./images/hero-img-small.jpeg" alt="hero thumbnail" />
            <p>7 min read</p>
          </div>
        </div>
      </div>
      {/* <!-- back of the card --> */}
      <div className="card-side card-back">
        <button className="btn">read more</button>
      </div>
    </div>
  );
}

export default Project