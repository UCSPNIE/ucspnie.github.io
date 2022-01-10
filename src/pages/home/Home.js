import React from "react";
import { Events, About, Mentors, Projects, Team } from "../../components";

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
