import React from "react";
// import Hero from '../Hero/Hero';
import Cards from "./Cards.jsx";

const Projects = () => {
  return (
    <div className="text-center flex flex-col bg-neutral-100 " id="projects">
      <h2 className="text-5xl my-10">Latest work</h2>
      <Cards />
    </div>
  );
};

export default Projects;
