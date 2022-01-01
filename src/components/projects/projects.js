import React from "react";
import "./projects.css"
import Lottie from "react-lottie";
import projects from "../../lottie/projects.json"
import { Link } from "react-router-dom";

const Projects = () => {
    const projectsLottie = {
        loop: true,
        autoplay: true,
        animationData: projects,
    };
    const text='Our main focus as a research group.';
    return (
        <div className="projects_row">
            <div id="projects" className="projects_title">
                <h1>Projects</h1>
            </div>
            <div className="projects_content">
                <span className="projects_tb">
                    <div className="projects_text">{text}</div>
                    <div className="projects_button">
                    <Link to="/projects"><a href="/projects" className="a">
                            <nav className="nav">
                            <ul className="nav_ul">
                                <li className="nav_ul_li">
                                 See projects
                                    <span className="nav_ul_li_span"></span>
                                </li>
                            </ul>
                        </nav></a></Link>
                    </div>
                </span>
                <span className="projects_lottie">
                    <Lottie
                        options={projectsLottie}
                        height='50vh'
                        width='50vw'
                    />
                </span>
            </div>
        </div>
    );
}

export default Projects;