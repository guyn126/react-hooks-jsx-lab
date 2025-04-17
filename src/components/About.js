import React from "react";
import { image } from "../data/data";

function About() {
  return( <div id="about">
    <h2>About Me</h2>
    <p>I love building creative, user-friendly web applications that solve real-word problems.</p>
    <img src={image} alt="I made this" />
  </div>
  );
}

export default About;
