import React from 'react'
import Title from '../../Title'
import Project from './Project'
import "./Projects.css"

const Projects = () => {
  return (
    <div className="projects-container">
      <Title title="Projects" />
      <section className="section">
        <div className="projects-center">
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
          <Project />
        </div>
      </section>
    </div>
  );
}

export default Projects