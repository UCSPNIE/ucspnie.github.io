import React from "react";
import "./home.css"
import Lottie from "react-lottie";
import animationData from "../../lottie/welcome.json"


const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        // rendererSettings: {
        //     preserveAspectRatio: "xMidYMid slice"
        // }
    };
    const text='WiNG: Wireless Inter Networking Group, VVCE, Mysuru is a community where people work for the upliftment of research in areas of networking. UCSP has signed a Research Collaboration Agreement with WiNG through which we aim to broaden our areas of work as well as connect with more people, building a healthy and encouraging research environment.';

    return (
        <>
            <div id="about" className="about_title">
                <h1>UCSP</h1>
            </div>
            <div className="about_content">
                <span className="about_text">{text}</span>
                <span className="about_lottie">
                    <Lottie
                        options={defaultOptions}
                        height='50vh'
                        width='40vw'
                    />
                </span>
            </div>
        </>
    );
}

export default About;