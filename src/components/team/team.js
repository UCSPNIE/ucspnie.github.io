import React from "react";
import "./team.css";
import Lottie from "react-lottie-player";
import team from "../../lottie/team.json";
import { Link } from "react-router-dom";

const Team = () => {
	const text = "From ISE to CSE to ECE , programming enthusiasts to hardware geeks , we have them all";
	return (
		<div className="team_row">
			<div id="team" className="team_title">
				<h1>TEAM</h1>
			</div>
			<div className="team_content">
				<span className="team_lottie">
					<Lottie animationData={team} loop play />
				</span>
				<div className="team_tb_container">
					<span className="team_tb">
						<div className="team_text">{text}</div>
						<div className="team_button">
							<Link to="/team">
								<a href="/team" className="a">
									<nav className="nav">
										<ul className="nav_ul">
											<li className="nav_ul_li">
												meet the team
												<span className="nav_ul_li_span"></span>
											</li>
										</ul>
									</nav>
								</a>
							</Link>
						</div>
					</span>
				</div>
				{/* <span className="team_text">text</span> */}
			</div>
		</div>
	);
};

export default Team;
