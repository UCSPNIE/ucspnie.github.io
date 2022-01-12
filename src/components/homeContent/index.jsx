import React from "react";
import "./homeContent.css";
import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";

const HomeContent = ({ name, text, link, linktext, lottieIsOnRight, lottieData }) => {
	let LottieJSX = () => {
		return (
			<span className="contentx_lottie">
				<Lottie animationData={lottieData} loop play />
			</span>
		);
	};

	let ContentJSX = () => {
		return (
			<span className="contentx_tb">
				<div className="contentx_text">{text}</div>
				<div className="contentx_button">
					<Link to={link}>
						<nav className="nav">
							<ul className="nav_ul">
								<li className="nav_ul_li">
									{linktext}
									<span className="nav_ul_li_span"></span>
								</li>
							</ul>
						</nav>
					</Link>
				</div>
			</span>
		);
	};

	return (
		<div className="contentx_row">
			<div id="contentx" className="contentx_title">
				<h1>{name}</h1>
			</div>
			<div className="contentx_content">
				{lottieIsOnRight ? (
					<>
						<ContentJSX />
						<LottieJSX />
					</>
				) : (
					<>
						<LottieJSX />
						<ContentJSX />
					</>
				)}
			</div>
		</div>
	);
};

export default HomeContent;
