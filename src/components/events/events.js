import React from "react";
import "./events.css";
import Lottie from "react-lottie-player";
import events from "../../lottie/events.json";
import { Link } from "react-router-dom";
import Button from "../common/button";

const Events = () => {
	const text = "From a wide range of events conducted by our club, here are a few";
	return (
		<div className="events_row">
			<div id="events" className="events_title">
				<h1>EVENTS</h1>
			</div>
			<div className="events_content">
				<span className="events_lottie">
					<Lottie animationData={events} loop play />
				</span>
				<span className="events_tb">
					<div className="events_text">{text}</div>
					<div className="events_button">
						<Link to="/events">
							<Button href="/events" text="GO TO EVENTS" />
						</Link>
					</div>
				</span>
			</div>
		</div>
	);
};

export default Events;
