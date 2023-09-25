import React from "react";
import "./skill.css";

const Skill = ({ skillObject }) => {
  return (
    <span>
      <img src={skillObject.image} alt="Skill Image" />
      <h3>{skillObject.name}</h3>
      <h3>{skillObject.level}</h3>
    </span>
  );
};

export default Skill;
