import React from "react";
import About from "../about/about";
import Events from "../events/events";
import Mentors from "../mentors/mentors";
import Team from "../team/team";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Events />
      <Mentors />
      <Team />
    </div>
  );
};

export default Home;
