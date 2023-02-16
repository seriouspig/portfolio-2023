import React from "react";
import "./Skills.css";
import Title from "../../Title";
import Skill from "./Skill";

const Skills = () => {
  return (
    <section className="section skills">
      <Title title="skills" />
      <div className="section-center skills-center">
        <article>
          <h3>frontend</h3>
          <Skill name="HTML/CSS" percentage="90%" />
          <Skill name="react" percentage="80%" />
          <Skill name="Javascript" percentage="60%" />
        </article>
        <article>
          <h3>backend</h3>
          <Skill name="Node" percentage="50%" />
          <Skill name="PHP" percentage="40%" />
          <Skill name="Python" percentage="65%" />
        </article>
      </div>
    </section>
  );
};

export default Skills;
