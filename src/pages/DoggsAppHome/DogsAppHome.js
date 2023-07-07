import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Menu from "../../components/Menu/Menu";


const DogsAppHome = () => {
    return (

        <Container fluid className="masthead  h-75 vw-100 d-flex flex-column justify-content-center ">
            <Container className="masthead__box  position-relative text-center mb-4 ">
                <Row className="masthead__item d-flex mx-auto">
                    <Col className="masthead__item__text">
                        <h1>Welcome</h1>
                        <h5>Select one of the buttons below to continue</h5>
                    </Col>
                    <Row className="d-flex ">
                    <Col xs={12} sm={6} md={6} className="masthead__item__button">
                        <Button variant="outline-info" size="lg" href="/finder" className="ms-3 me-3 mt-2 mb-4">Find your dream dog</Button>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="masthead__item__button">
                        <Button variant="outline-info" size="lg" href="list" className="ms-3 me-3 mt-2 mb-4">Search the database</Button>
                    </Col>
                    </Row>
                </Row>
            </Container>
        </Container>

    );
};

export default DogsAppHome;