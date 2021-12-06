import React from "react";
import EventCard from "./EventCard";
import "./Eventpage.css";

const Eventpage = () => {
  return (
    <div className="eventpage">
      <div className="newevent">
        <img
          src="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          alt="image"
        />
      </div>
      <div className="card-container">
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/cryptography.jpeg"
          heading="Cryptography"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/imageprocessing.jpeg"
          heading="Big Data"
          venue="NRN Block"
          date="25/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          heading="Cryptography"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          heading="Cryptography"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          heading="Cryptography"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          heading="Cryptography"
          venue="MV HALL"
          date="03/12/21"
        />
        <EventCard
          img="https://ucsp-website.herokuapp.com/static/img/paperwriting.jpeg"
          heading="Cryptography"
          venue="MV HALL"
          date="03/12/21"
        />
      </div>
    </div>
  );
};

export default Eventpage;
