import React from 'react'
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Tilt from "react-tilt"
import Card from "react-bootstrap/Card"
import "./experience.styles.css"
import L_POWER from "../../assets/img/experience/PI_Logo.jpg";



const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Row className="justify-content-center">
            <Col md={8}>
            <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="image-resize" src={L_POWER} alt="Power Integrations Logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                    <Card.Title className="text-center">IT Intern</Card.Title>
                                </div>
                                <div>
                                    <Card.Text className="text-center style">
                                        <strong>Duration:</strong> February 2020 - November 2020
                                        <br/>
                                        <strong> Description </strong>
                                        <ul className="text-left">
                                            <li><strong>Supported</strong> IT team in maintaining hardward, software, and other systems.</li>
                                            <li><strong>Organized, maintained, and distributed</strong> IT hardware and software resources.
                                            </li>
                                            <li><strong>Provided</strong> remote tech support. 
                                            </li>
                                        </ul>
                                    </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
            </Jumbotron>
            </Col>
            </Row>
        </div>
    )
}

export default Experience
