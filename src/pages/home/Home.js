import React from "react";
import About from "../../components/about/about";
import Events from "../../components/events/events";
import Mentors from "../../components/mentors/mentors";
import Projects from "../../components/projects/projects";
import Team from "../../components/team/team";

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
