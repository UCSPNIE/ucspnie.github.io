import React from "react";
import "./Mentors.css";
const Mentors = () => {
    return (
        <div>
            
                <div className="heading my-3">MENTORS</div>
            
            <div className="container-fluid">
                <div className="row justify-content-center align-items-center mx-4 mb-3">
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded-circle shadow"
                                src="./images/Rohith.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong>Rohith Prasanna</strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        Founder of UCSP
                                        <br />
                                        Machine Learning Engineer, EvaBot Inc.
                                        <br />
                                        San Francisco Bay Area, USA <br />
                                        Formerly: Assistant Professor, Dept. Of
                                        ECE, NIE, Mysuru
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded-circle shadow"
                                src="./images/kaulgud.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong>Dr. Narasimha Kaulgud</strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        Head of the Department,
                                        <br />
                                        Professor,
                                        <br /> Department of Electronics &
                                        Communication Engineering, <br />
                                        NIE, Mysuru
                                        <br />
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4 my-4">
                        <div className="card cardsize">
                            <img
                                className="imgsize mx-auto d-block rounded-circle shadow"
                                src="./images/vijay-bt.jpg"
                                alt=""
                            />
                            <div>
                                <h4 className="text-center mb-3">
                                    <strong> Dr. Vijay B T</strong>
                                </h4>
                                <p className="text-muted text-center">
                                    <small>
                                        Faculty Co-ordinator,
                                        <br />
                                        Assistant Professor,
                                        <br /> Department of Electronics &
                                        Communication Engineering,
                                        <br /> NIE, Mysuru
                                    </small>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentors;
