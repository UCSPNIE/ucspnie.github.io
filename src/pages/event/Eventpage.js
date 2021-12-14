import React from "react";
import EventCard from "./EventCard";
import "./Eventpage.css";

const Eventpage = () => {
  return (
    <div className="eventpage">
      <div className="heading">EVENTS</div>
      <div className="newevent jello-vertical">
        <img
          src="./eventImages/paperwriting.jpeg"
          alt="image"
        />
      </div>
      <div className="card-container">
        <EventCard
          img="./eventImages/cryptography.jpeg"
          heading="Cryptography"
          organiser="UCSP"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="./eventImages/imageprocessing.jpeg"
          heading="Image Processing"
          organiser="UCSP"
          venue="NRN Block"
          date="25/12/21"
        />
        <EventCard
          img="./eventImages/paperwriting.jpeg"
          heading="Technical Paper"
          organiser="UCSP"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="./eventImages/technocazar.jpeg"
          heading="Technocazar"
          organiser="UCSP"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
        img="./eventImages/lds.jpg"
        heading="Lockdown Saga"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="./eventImages/cn.jpeg"
        heading="Computer"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="./eventImages/gitwit.jpeg"
        heading="Git Wit"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="./eventImages/codezilla.jpeg"
        heading="Codezilla"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="./eventImages/probability.jpeg"
        heading="Probability "
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="./eventImages/ml.jpeg"
        heading="ML"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
      </div>
    </div>
  );
};

export default Eventpage;
