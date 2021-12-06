import React from "react";
import About from "../about/About";
import Events from "../events/Events";
import Team from "../team/Team";

const Home = () => {
  return (
    <div className="home">
      <About />
      <Events />
      <Team />
    </div>
  );
};

export default Home;
