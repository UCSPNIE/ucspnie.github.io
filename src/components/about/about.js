import React from "react";
import "./about.css";
import Lottie from "react-lottie-player";
import welcome from "../../lottie/welcome.json";
import goal from "../../lottie/goal.json";
import vision from "../../lottie/vision.json";
import motto from "../../lottie/motto.json";
import "./cards.css";

const Card = ({ lottieData, heading, text }) => {
	return (
		<div className="about_cards_container">
			<div className="card">
				<div className="image">
					<Lottie play animationData={lottieData} loop />
				</div>
				<div class="content">
					<h3>{heading}</h3>
					<p>{text}</p>
				</div>
			</div>
		</div>
	);
};

const About = () => {
	const text =
		"We are a group of like minded enthusiasts realising our dream in tech. We build projects in various domains and help each other in learning new things. UCSP is a great platform to achieve proficiency in the technical side of the industry. Are you interested in trying out new things? Are you interested in learning different skills? Are you looking to expand your knowledge? Do you have any project ideas but don't have enough people to realise it? Join UCSP and we will work as a team!!!";

	return (
		<>
			<div id="about" className="about_title">
				<h1>Ubiquitous Computing and Signal Processing</h1>
				<h1>Research Group</h1>
			</div>
			<div className="about_content">
				<span className="about_text">{text}</span>
				<span className="about_lottie">
					<Lottie play animationData={welcome} loop />
				</span>
			</div>
			<div className="cards-row">
				<Card
					lottieData={vision}
					heading="Vision"
					text="To build a research environment for inspiring minds and to embark intellectual circuit in the years to come"
				/>
				<Card
					lottieData={motto}
					heading="Motto"
					text="To see what everyone has seen, but to think what nobody else has thought to create a positive impact on the society"
				/>
				<Card
					lottieData={goal}
					heading="Goal"
					text="To create awareness and keen interest in trending technologies and to orient the students and
							  faculties alike to undertake research in their areas of interest"
				/>
			</div>
		</>
	);
};

export default About;
