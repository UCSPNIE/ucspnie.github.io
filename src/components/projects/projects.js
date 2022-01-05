import React from "react";
import "./projects.css"
import Lottie from "react-lottie";
import mentors from "../../lottie/projects.json"
import { Link } from "react-router-dom";

const Projects = () => {
    const mentorsLottie = {
        loop: true,
        autoplay: true,
        animationData: mentors,
    };
    const text='Our main focus as a research group.';
    return (
        <div className="mentors_row">
            <div id="mentors" className="mentors_title">
                <h1>PROJECTS</h1>
            </div>
            <div className="mentors_content">
                <span className="mentors_tb">
                    <div className="mentors_text">{text}</div>
                    <div className="mentors_button">
                    <Link to="/projects"><a href="/projects" className="a">
                            <nav className="nav">
                            <ul className="nav_ul">
                                <li className="nav_ul_li">
                                 See Projects
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

export default Projects;