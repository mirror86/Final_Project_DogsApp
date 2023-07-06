import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "react-bootstrap/Container";
import {Button, Card, CardGroup, Col, Row} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import Section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";
import section from "../../components/Section/Section";


const DogList = () => {
    return (
        <>
            <Container fluid className="finder__container main h-75 shadow-lg d-flex bg-white ">
                <Wrapper>
                    <Container fluid className="h-100 bg-white">
                        <Row className=" ">
                            <Col>
                                <Card style={{width: '18rem'}} className="border-light shadow-lg mt-5">
                                    <Card.Header>
                                        <i className="fa-regular fa-heart"></i>
                                    </Card.Header>
                                    <Card.Img variant="top" src="/IMG-2713.jpg"/>
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                        <Button variant="primary">Więcej</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Wrapper>
            </Container>


            <Footer/>
        </>
    );
};

export default DogList;