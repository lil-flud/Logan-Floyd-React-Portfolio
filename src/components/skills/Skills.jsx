import React from "react";
import Skill from "../individualSkill/Skill";
import Row from "../row/Row";
// import { FaPython } from "react-icons/fa";

const skillsInfo = [
  [
    {
      name: "Python",
      image: "skillIcons/python.png",
      level: "Intermediate",
      side: "left",
    },
    {
      name: "JavaScript",
      image: "skillIcons/javascript.png",
      level: "Intermediate",
    },
    {
      name: "React",
      image: "skillIcons/Reactjs.png",
      level: "Intermediate",
    },
  ],
  [
    {
      name: "React Native",
      image: "skillIcons/ReactNative.png",
      level: "Intermediate",
      side: "right",
    },
  ],
];

const Skills = () => {
  let skillCounter = 0;
  let rowCounter = 0;
  let skillsForRows = [];

  //   const rowOrientationSwap = () => {
  //     let currentSkillGroup = [];
  //     for (let i = 0; i < skillsInfo.length - 1; i++) {
  //       if (i % 3 === 0) {
  //         skillsForRows.push(currentSkillGroup);
  //         currentSkillGroup.shift();
  //         currentSkillGroup.shift();
  //         currentSkillGroup.shift();
  //       }
  //       currentSkillGroup.push(skillsInfo[i]);
  //       //   skillCounter++;
  //     }
  //   };
  //   rowOrientationSwap();

  return (
    <div className="skills">
      {skillsInfo.map((eachGroup) => (
        <Row rowOrientation={eachGroup[0].side} skills={eachGroup} />
      ))}
      {/* {skillsInfo.map((eachSkill) => (
        <Skill skillObject={eachSkill} />
      ))} */}
    </div>
  );
};

export default Skills;

{
  /* <>
    <div className="row right_row skills">
        Skills <FaPython style={{ color: "gold" }} />
    </div>
    <div className="row left_row skills">Else</div>
</> */
}

// {skillsInfo.map((skill) => (
//     <div className="row right_row skills"></div>
//   ))}

// If i make a Row component I can pass in an iterated number as a prop
// that allows me to differentiate between which className gets added.
