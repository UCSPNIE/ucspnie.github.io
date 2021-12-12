import React from "react";
import EventCard from "./EventCard";
import "./Eventpage.css";

const Eventpage = () => {
  return (
    <div className="eventpage">
      <div className="heading">EVENTS</div>
      <div className="newevent jello-vertical">
        <img
          src="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          alt="image"
        />
      </div>
      <div className="card-container">
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/cryptography.jpeg"
          heading="Cryptography"
          organiser="UCSP"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/imageprocessing.jpeg"
          heading="Image Processing"
          organiser="UCSP"
          venue="NRN Block"
          date="25/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          heading="Technical Paper"
          organiser="UCSP"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/technocazar.jpeg"
          heading="Technocazar"
          organiser="UCSP"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
        img="https://ucsp-website.herokuapp.com/static/img/lds.jpg"
        heading="Lockdown Saga"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="https://ucsp-website.herokuapp.com/static/img/cn.jpeg"
        heading="Computer"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="https://ucsp-website.herokuapp.com/static/img/gitwit.jpeg"
        heading="Git Wit"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="https://ucsp-website.herokuapp.com/static/img/codezilla.jpeg"
        heading="Codezilla"
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="https://ucsp-website.herokuapp.com/static/img/probability.jpeg"
        heading="Probability "
        organiser="UCSP" 
        venue="MV HALL"
        date="03/12/21"
        />
        <EventCard
        img="https://ucsp-website.herokuapp.com/static/img/ml.jpeg"
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
