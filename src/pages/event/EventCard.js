import React from "react";
import "./EventCard.css";
const EventCard = ({ img, heading, organiser, venue, date }) => {
  return (
    <div className="ecard">
      <div className="img-box">
        <img src={img} alt="img" />
      </div>
      <div className="ecard-contents">
        <h2>{heading}</h2>
        <div className="info">
          <div className="description">
            <span>Organised By :</span>
            <span className="first">{organiser}</span>
          </div>
          <div className="description">
            <span>Venue :</span>
            <span className="first">{venue}</span>
          </div>
          <div className="description">
            <span>Date :</span>
            <span className="first">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
