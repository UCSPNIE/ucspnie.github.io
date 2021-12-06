import React from "react";
import "./EventCard.css";
const EventCard = ({ img, heading, venue, date }) => {
  return (
    <div className="card">
      <div className="img-box">
        <img src={img} alt="img" />
      </div>
      <div className="card-contents">
        <h2>{heading}</h2>
        <div className="info">
          <div className="description">
            <span>Organised By :</span>
            <span className="first">UCSP</span>
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
        <button>Know More</button>
      </div>
    </div>
  );
};

export default EventCard;
