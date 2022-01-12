import React from "react";
import "./button.css";

const Button = (props) => {
	return (
		<a href={props.href} className="a">
			<nav className="nav">
				<ul className="nav_ul">
					<li className="nav_ul_li">
						{props.text}
						<span className="nav_ul_li_span"></span>
					</li>
				</ul>
			</nav>
		</a>
	);
};

export default Button;

// <a href="/events" className="a nav_btn">
// 	CHECKOUT EVENTS
// 	<span></span>
// </a>;
