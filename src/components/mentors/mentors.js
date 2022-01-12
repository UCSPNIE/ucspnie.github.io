import React from "react";
import "./mentors.css";
import Lottie from "react-lottie-player";
import mentors from "../../lottie/mentor.json";
import { Link } from "react-router-dom";
import Button from "../common/button";

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
							<Button text="Meet Mentors" href="/mentors" />
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
