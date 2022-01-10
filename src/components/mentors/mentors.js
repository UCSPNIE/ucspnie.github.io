import React from "react";
import "./mentors.css";
import Lottie from "react-lottie-player";
import mentors from "../../lottie/mentor.json";
import { Link } from "react-router-dom";

const Mentors = () => {
  const text = "The people we go to , for they are the ones who have our backs.";
  return (
    <div className="mentors_row">
      <div id="mentors" className="mentors_title">
        <h1>MENTORS</h1>
      </div>
      <div className="mentors_content">
        <span className="mentors_tb">
          <div className="mentors_text">{text}</div>
          <div className="mentors_button">
            <Link to="/mentors">
              <a href="/mentors" className="a">
                <nav className="nav">
                  <ul className="nav_ul">
                    <li className="nav_ul_li">
                      Meet Mentors
                      <span className="nav_ul_li_span"></span>
                    </li>
                  </ul>
                </nav>
              </a>
            </Link>
          </div>
        </span>
        <span className="mentors_lottie">
          <Lottie animationData={mentors} loop play />
        </span>
      </div>
    </div>
  );
};

export default Mentors;
