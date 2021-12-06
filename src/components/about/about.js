import React from "react";
import "./About.css";
import Lottie from "react-lottie";
import welcome from "../../lottie/welcome.json";
import goal from "../../lottie/goal.json";
import vision from "../../lottie/vision.json";
import motto from "../../lottie/motto.json";
import "./Cards.css";

const About = () => {
  const welcomeLottie = {
    loop: true,
    autoplay: true,
    animationData: welcome,
  };
  const goalLottie = {
    loop: true,
    autoplay: true,
    animationData: goal,
  };
  const mottoLottie = {
    loop: true,
    autoplay: true,
    animationData: motto,
  };
  const visionLottie = {
    loop: true,
    autoplay: true,
    animationData: vision,
  };
  const text =
    "WiNG: Wireless Inter Networking Group, VVCE, Mysuru is a community where people work for the upliftment of research in areas of networking. UCSP has signed a Research Collaboration Agreement with WiNG through which we aim to broaden our areas of work as well as connect with more people, building a healthy and encouraging research environment.";

  return (
    <>
      <div id="about" className="about_title">
        <h1>UCSP</h1>
      </div>
      <div className="about_content">
        <span className="about_text">{text}</span>
        <span className="about_lottie">
          <Lottie options={welcomeLottie} height="50vh" width="40vw" />
        </span>
      </div>
      <div className="cards-row">
        <div className="container">
          <div class="card">
            <div class="image">
              <Lottie
                options={visionLottie}
                // height='3vh'
                // width='3vw'
              />
            </div>
            <div class="content">
              <h3>Vision</h3>
              <p>
                To build a research environment for inspiring minds and to
                embark intellectual circuit in the years to come.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="card">
            <div class="image">
              <Lottie
                options={mottoLottie}
                // height='3vh'
                // width='3vw'
              />
            </div>
            <div class="content">
              <h3>Motto</h3>
              <p>
                To see what everyone has seen, but to think what nobody else has
                thought to create a positive impact on the society.{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <div class="card">
            <div class="image">
              <Lottie
                options={goalLottie}
                // height='3vh'
                // width='3vw'
              />
            </div>
            <div class="content">
              <h3>Goal</h3>
              <p>
                To create awareness and keen interest in today's trending
                technologies and to orient the students and faculties alike to
                undertake research in their selected areas of interest.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
