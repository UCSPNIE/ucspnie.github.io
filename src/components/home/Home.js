import React from "react";
import About from "../about/about";
import Events from "../events/events";
import Mentors from "../mentors/mentors";
import Team from "../team/team";
import Projects from "../projects/projects";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Events />
      <Mentors />
      <Team />
      <Projects />
    </div>
  );
};

export default Home;
