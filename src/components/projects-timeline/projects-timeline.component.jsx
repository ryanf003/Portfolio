import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Image from "react-bootstrap/Image";


// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_RyanPhotoPortfolio from "../../assets/img/projects/ryan-photo-portfolio.png"
import L_PJPhotoPortfolio from "../../assets/img/projects/pj-photo-portfolio.png"

import "./projects-timeline.styles.css";

const ProjectsTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 pb-3 text-center font-details">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: Ryan Photo Portfolio */}
                    <ImageEvent
                        date="03/26/2021"
                        className="text-center"
                        text="Ryan Photo Portfolio"
                        src={L_RyanPhotoPortfolio}
                        alt="Ryan Photo Portfolio" >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> This is a Photo Portfolio, created with React, that displays my past photoshoots.
                                        <hr />
                                        <strong>Features:</strong>
                                        <ul className="list-styles pt-1">
                                            <li>Organized and displayed photos by album</li>
                                            <li>Powered by React and hosted on Heroku</li>
                                            <li>Respoisive Design</li>
                                        </ul>
                                        <hr />
                                        <strong>Tech used:</strong>
                                        <ul>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_HTML5}
                                                    alt="HTML 5"
                                                    rounded
                                                    className="image-style m-1"
                                                ></Image>{" "}
                                                HTML5
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_CSS3}
                                                    alt="CSS 3"
                                                    rounded
                                                    className="image-style m-1"
                                                ></Image>{" "}
                                                CSS3
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_REACT}
                                                    alt="React"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                React
                                                </span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="http://ryan-photo-portfolio.herokuapp.com/home"
                                target="_blank"
                                >
                                SEE LIVE
                                </UrlButton>
                                <UrlButton
                                href="https://github.com/ryanf003/RyanFdezPhotoPortfolio"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                                
                            </div>
                        </div>
                    </ImageEvent>

                    {/* Project: PJ Fdez Photo Portfolio */}
                    <ImageEvent
                        date="02/19/2021"
                        className="text-center"
                        text="PJ Photo Portfolio"
                        src={L_PJPhotoPortfolio}
                        alt="PJ Photo Portfolio" >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <div>
                                <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    PROJECT DETAILS
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> This is a Photo Portfolio, created with Bootstrap, that displays my brother's past photoshoots.
                                        <hr />
                                        <strong>Features:</strong>
                                        <ul className="list-styles pt-1">
                                            <li>Organized and displayed photos by service.</li>
                                            <li>Powered by Bootstrap.</li>
                                            <li>Respoisive Design</li>
                                        </ul>
                                        <hr />
                                        <strong>Tech used:</strong>
                                        <ul>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_HTML5}
                                                    alt="HTML 5"
                                                    rounded
                                                    className="image-style m-1"
                                                ></Image>{" "}
                                                HTML5
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_CSS3}
                                                    alt="CSS 3"
                                                    rounded
                                                    className="image-style m-1"
                                                ></Image>{" "}
                                                CSS3
                                                </span>
                                            </li>
                                            <li>
                                                <span className="p-2">
                                                <Image
                                                    src={L_BOOTSTRAP4}
                                                    alt="Bootstrap"
                                                    rounded
                                                    className="image-style1 m-1"
                                                ></Image>{" "}
                                                Bootstrap
                                                </span>
                                            </li>
                                        </ul>
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                </Accordion>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap text-center">
                                <UrlButton
                                href="http://ryan-photo-portfolio.herokuapp.com/home"
                                target="_blank"
                                >
                                SEE LIVE
                                </UrlButton>
                                <UrlButton
                                href="https://github.com/ryanf003/RyanFdezPhotoPortfolio"
                                target="_blank"
                                >
                                SOURCE CODE
                                </UrlButton>
                                
                            </div>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>
            
        </div>
    )
}

export default ProjectsTimeline
