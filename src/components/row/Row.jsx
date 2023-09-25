import React from "react";
import Skill from "../individualSkill/Skill";

const Row = ({ rowOrientation, skills }) => {
  return (
    <>
      {rowOrientation == "left" ? (
        <div className="row skill_row left_row">
          {skills.map((eachSkill) => (
            <Skill skillObject={eachSkill} />
          ))}
        </div>
      ) : (
        <div className="row skill_row right_row">
          {skills.map((eachSkill) => (
            <Skill skillObject={eachSkill} />
          ))}
        </div>
      )}
    </>
  );
};

export default Row;
