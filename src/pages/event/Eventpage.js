import React from "react";
import EventCard from "./EventCard";
import "./Eventpage.css";

const Eventpage = () => {
	return (
		<div className="eventpage">
			<div className="heading">EVENTS</div>
			<div className="newevent jello-vertical">
				<img src="./eventImages/paperwriting.jpeg" alt="paper writing" />
			</div>
			<div className="card-container">
				<EventCard
					img="./eventImages/cryptography.jpeg"
					heading="Cryptography"
					organiser="UCSP"
					venue="Go-To Webinar"
					date="01/11/20"
				/>
				<EventCard
					img="./eventImages/imageprocessing.jpeg"
					heading="Image Processing"
					organiser="UCSP"
					venue="Go-To Webinar"
					date="03/10/20"
				/>
				<EventCard
					img="./eventImages/paperwriting.jpeg"
					heading="Technical Paper"
					organiser="UCSP"
					venue="MV HALL,GJB"
					date="21/06/20"
				/>
				<EventCard
					img="./eventImages/technocazar.jpeg"
					heading="Technocazar"
					organiser="UCSP"
					venue="GJB,NIE"
					date="04/10/19"
				/>
				<EventCard
					img="./eventImages/lds.jpg"
					heading="Lockdown Saga"
					organiser="UCSP"
					venue="Online Platform"
					date="21/06/20"
				/>
				<EventCard
					img="./eventImages/cn.jpeg"
					heading="Computer"
					organiser="UCSP"
					venue="Go-To Webinar"
					date="26/04/2020"
				/>
				<EventCard
					img="./eventImages/gitwit.jpeg"
					heading="Git Wit"
					organiser="UCSP"
					venue="NRN block"
					date="07/11/2019"
				/>
				<EventCard
					img="./eventImages/codezilla.jpeg"
					heading="Codezilla"
					organiser="UCSP"
					venue="NRN block"
					date="29/02/2020"
				/>
				<EventCard
					img="./eventImages/probability.jpeg"
					heading="Probability "
					organiser="UCSP"
					venue="Gmeet"
					date="03/01/21"
				/>
				<EventCard img="./eventImages/ml.jpeg" heading="ML" organiser="UCSP" venue="NRN block" date="17-18/08/2019" />
			</div>
		</div>
	);
};

export default Eventpage;
