import React from "react";
import "./projects.css";
import Lottie from "react-lottie-player";
import mentors from "../../lottie/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
	const text = "Our main focus as a research group.";
	return (
		<div className="mentors_row">
			<div id="mentors" className="mentors_title">
				<h1>PROJECTS</h1>
			</div>
			<div className="mentors_content">
				<span className="mentors_tb">
					<div className="mentors_text">{text}</div>
					<div className="mentors_button">
						<Link to="/projects">
							<a href="/projects" className="a">
								<nav className="nav">
									<ul className="nav_ul">
										<li className="nav_ul_li">
											See Projects
											<span className="nav_ul_li_span"></span>
										</li>
									</ul>
								</nav>
							</a>
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

export default Projects;
