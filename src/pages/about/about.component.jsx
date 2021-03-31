import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import HomePFP from '../../assets/img/profile/HomePFP.jpg'

import './about.styles.css'

const about = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className='pt-3 text-center font-details pb-3'>ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center"> 
                        {/* Profile Pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={HomePFP} thumbnail fluid/>
                            </Row>
                        </Col>
                        {/* About me description */}
                        <Col xs={12} md={6}>
                            <Row className="align-items-start p-2 my-details rounded">
                                {/* description */}
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </Row>
                            <Row>
                                {/* buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Let's talk
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://docs.google.com/document/d/1wyDeUBxJTH0mxInaq8u3P2ImlbmTeZ3xaeIc6Pp1Vxc/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-success">
                                            My Resume
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://github.com/ryanf003" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            GitHub
                                        </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="https://www.linkedin.com/in/ryanfdez3/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            LinkedIn
                                        </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default about
