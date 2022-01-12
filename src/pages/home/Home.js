import React from "react";
import { About, HomeContent } from "../../components";
import eventLottie from "../../lottie/events.json";
import mentorsLottie from "../../lottie/mentor.json";
import teamLottie from "../../lottie/team.json";
import projectLottie from "../../lottie/projects.json";

const Home = () => {
	return (
		<div className="home">
			<About />
			<HomeContent
				name="EVENTS"
				link="/events"
				linktext="GO TO EVENTS"
				text="From a wide range of events conducted by our club, here are a few"
				lottieData={eventLottie}
			/>
			<HomeContent
				name="MENTORS"
				link="/mentors"
				linktext="Meet Mentors"
				text="The people we go to, for they are the ones who have our backs."
				lottieData={mentorsLottie}
				lottieIsOnRight
			/>
			<HomeContent
				name="TEAM"
				link="/team"
				linktext="MEET THE TEAM"
				text="From ISE to CSE to ECE, programming enthusiasts to hardware geeks, we have them all"
				lottieData={teamLottie}
			/>
			<HomeContent
				name="PROJECTS"
				link="/projects"
				linktext="See Projects"
				text="Our main focus as a research group."
				lottieData={projectLottie}
				lottieIsOnRight
			/>
		</div>
	);
};

export default Home;
