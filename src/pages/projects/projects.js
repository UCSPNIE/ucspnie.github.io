import React from "react";
import "./projects.css";
const Projects = () => {
    return (
        <div>
            <div className="heading my-3">PROJECTS</div>
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center mx-4 mb-3">
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded shadow"
                                src="./images/project1.jpeg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong></strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        {/* Founder of UCSP
                                        <br />
                                        Machine Learning Engineer, EvaBot Inc.
                                        <br /> */}
                                        This is Bluetooth controlled lock implemented using Arduino, Bluetooth module and servo motor
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded shadow"
                                src="./images/project2.jpeg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong></strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        {/* Founder of UCSP
                                        <br />
                                        Machine Learning Engineer, EvaBot Inc.
                                        <br /> */}
                                        This is a simple object distance tracker with ultrasonic sensor, pico raspberry Pi and 16x2 lcd                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded shadow"
                                src="./images/project3.jpeg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong></strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        {/* Founder of UCSP
                                        <br />
                                        Machine Learning Engineer, EvaBot Inc.
                                        <br /> */}
                                        This is an Arduino based RADAR mimic using ultrasonic sensor, servo motor and buzzer                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded shadow"
                                src="./images/project4.jpeg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong></strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        {/* Founder of UCSP
                                        <br />
                                        Machine Learning Engineer, EvaBot Inc.
                                        <br /> */}
Upcoming projects - Improvisation of the firebird V                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded shadow"
                                src="./images/project5.jpeg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong></strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        {/* Founder of UCSP
                                        <br />
                                        Machine Learning Engineer, EvaBot Inc.
                                        <br /> */}
Upcoming projects - Improvisation of the firebird V                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="clearfix"></div>
                <div className="heading my-3">TESTIMONIALS</div>
                {/* //;aljflak */}
                <div className="row justify-content-center align-items-center mx-4 mb-3">
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <div>
                                <p className="text-muted text-center py-4 px-4">
                                    <small>
                                        It's been 1 and half month since I have joined UCSP.
                                        I am from a mechanical background ,so UCSP has helped me to understand applications of coding with electronic components.
                                        Been a part of this team you not only gain technical knowledge but also behavioural and social skills.                                    </small>
                                        <div className='clearfix'></div>
                                        <small>- Anushri , 3rd sem IPE</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <div>
                                <p className="text-muted text-center py-4 px-4">
                                    <small>
                                        Being a part of the UCSP project team has made me realise that I don't have to be bound to what is being taught in the classes and the branch that I have chosen.
                                        Having learnt about many electronic components makes it more clear that they are very much necessary in day-to-day activities.
                                        I want to be able to utilise this knowledge in building a working project.                                    </small>
                                        <div className='clearfix'></div>
                                        <small>- Anirudh , 3rd sem IPE</small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <div>
                                <p className="text-muted text-center py-4 px-4">
                                    <small>
                                        I feel really great being a part of ucsp. I m amused to be a part of project team. I got an opportunity to learn a lot of new things. And I m awaiting to learn many more new things n get involved in lots of new projects.                                    </small>
                                       <div className='clearfix'></div>
                                        <small>- Mrudula , 3rd sem ECE</small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;
