import React from "react";
import "./mentors.css"
import Lottie from "react-lottie";
import mentors from "../../lottie/mentor.json"
import { Link } from "react-router-dom";

const Mentors = () => {
    const mentorsLottie = {
        loop: true,
        autoplay: true,
        animationData: mentors,
    };
    const text='The people we go to , for they are the ones who have our backs.';
    return (
        <div className="mentors_row">
            <div id="mentors" className="mentors_title">
                <h1>MENTORS</h1>
            </div>
            <div className="mentors_content">
                <span className="mentors_tb">
                    <div className="mentors_text">{text}</div>
                    <div className="mentors_button">
                    <Link to="/mentors"><a href="/mentors" className="a">
                            <nav className="nav">
                            <ul className="nav_ul">
                                <li className="nav_ul_li">
                                 Meet Mentors
                                    <span className="nav_ul_li_span"></span>
                                </li>
                            </ul>
                        </nav></a></Link>
                    </div>
                </span>
                <span className="mentors_lottie">
                    <Lottie
                        options={mentorsLottie}
                        height='50vh'
                        width='40vw'
                    />
                </span>
            </div>
        </div>
    );
}

export default Mentors;