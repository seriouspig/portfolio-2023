import React from 'react'
import Title from '../../Title'
import Project from './Project'
import millionaires_img from "../../../assets/images/projects/wwtbam.png"
import grooooaar_img from "../../../assets/images/projects/grooooaar.gif";
import idefender_img from "../../../assets/images/projects/idefender.gif";
import ward_img from "../../../assets/images/projects/theward.png";
import "./Projects.css"

const Projects = () => {
  return (

    <section class="section projects">
      {/* <!-- section title --> */}
      <div class="section-title">
        <h2>My work</h2>
        <div class="underline"></div>
        <p class="projects-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          provident, quod voluptatum porro ea accusantium ex ad molestiae
          dolorem quam voluptate, nihil iusto vitae cupiditate dolorum at
          expedita atque inventore officiis illum. Neque hic, itaque delectus
          voluptates necessitatibus molestiae rerum.
        </p>
      </div>
      <div class="projects-center section-center">
        {/* <!-- single project --> */}
        <a href="projects.html" class="project-1">
          <article class="project">
            <img
              src={millionaires_img}
              class="project-img"
              alt="project image"
            />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        {/* <!-- single project --> */}
        <a href="projects.html" class="project-2">
          <article class="project">
            <img
              src={grooooaar_img}
              class="project-img"
              alt="project image"
            />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        {/* <!-- single project --> */}
        <a href="projects.html" class="project-3">
          <article class="project">
            <img
              src={idefender_img}
              class="project-img"
              alt="project image"
            />
            <div class="project-info">
              <h4>project title</h4>
              <p>client name</p>
            </div>
          </article>
        </a>
        {/* <!-- single project --> */}
        <a href="projects.html" class="project-4">
          <article class="project">
            <img
              src={ward_img}
              class="project-img"
              alt="project image"
            />
            <div class="project-info">
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