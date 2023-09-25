import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="left_row row about">
      <h1>Logan Floyd</h1>
      <h2>Software Developer</h2>
      <p>
        Hello! My name is Logan Floyd and I am a student at Base Camp Coding
        Academy's Graduate Institute. My plan is to leave BCCA GI with the full
        range of skills neccassary to be a Full-Stack Developer, although I must
        say Back-End encapsulates my true passion. I enjoy the creativity of
        Front-End but that joy is nothing compared to the calling I feel when
        figuring out the puzzle-like logic required to make a program run. I am
        currently a Tire Salesman & Technician at a business owned and operated
        by my family. Ultimately I am hoping to be able to get a career in
        coding so that I can build a bigger and better life for myself and my
        wife, and also apply my coding skills to our family business on the side
        so I can bring it into the modern world.
      </p>
      {/* {myName != null ? <p>{myName}</p>: <p>Null</p>} */}
    </div>
  );
};

export default About;
