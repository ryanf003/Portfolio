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
                                Hello! I am <strong>&nbsp;Ryan Fernandez</strong>
                                <br />A passionate programmer, born in Spain and brought up in California. I am a Full Stack Web Developer with React.js, Redux, and Node.js as my tech stack.
                                <br />
                                In 2019, I graduated from Santa Clara University with a Bachelors of Science in Computer Science and Engineering.
                                <br />
                                I love learning about new technologies, what problems are they solving and how can I use them to build better and scalable products.
                                <br /> <br />
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
