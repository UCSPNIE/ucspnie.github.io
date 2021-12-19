import React from "react";
import "./events.css";
import Lottie from "react-lottie";
import events from "../../lottie/events.json";
import { Link } from "react-router-dom";

const Events = () => {
  const eventsLottie = {
    loop: true,
    autoplay: true,
    animationData: events,
  };
  const text =
    "From a wide range of events conducted by our club , here are a few";
  return (
    <div className="events_row">
      <div id="events" className="events_title">
        <h1>EVENTS</h1>
      </div>
      <div className="events_content">
        <span className="events_lottie">
          <Lottie options={eventsLottie} height="50vh" width="40vw" />
        </span>
        <span className="events_tb">
          <div className="events_text">{text}</div>
          <div className="events_button">
            <Link to="/events"><a href="/events" className="a">
              <nav className="nav">
                <ul className="nav_ul">
                  <li className="nav_ul_li">
                    Go to Events
                    <span className="nav_ul_li_span"></span>
                  </li>
                </ul>
              </nav>
            </a></Link>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Events;
