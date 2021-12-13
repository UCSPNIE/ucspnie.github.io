import React from "react";
import "./about.css";
import Lottie from "react-lottie";
import welcome from "../../lottie/welcome.json";
import goal from "../../lottie/goal.json";
import vision from "../../lottie/vision.json";
import motto from "../../lottie/motto.json";
import "./cards.css";

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
    "We are a group of like minded enthusiasts realising our dream in tech. We build projects in various domains and help each other in learning new things. UCSP is a great platform to achieve proficiency in the technical side of the industry. Are you interested in trying out new things? Are you interested in learning different skills? Are you looking to expand your knowledge? Do you have any project ideas but don't have enough people to realise it? Join UCSP and we will work as a team!!!";

  return (
    <>
      <div id="about" className="about_title">
        <h1>Ubiquitous Computing and Signal Processing</h1>
        <h1>Research Group</h1>
      </div>
      <div className="about_content">
        <span className="about_text">{text}</span>
        <span className="about_lottie">
          <Lottie options={welcomeLottie} height="50vh" width="40vw" />
        </span>
      </div>
      <div className="cards-row">
        <div className="about_cards_container">
          <div className="card">
            <div className="image">
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
        <div className="about_cards_container">
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
        <div className="about_cards_container">
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
