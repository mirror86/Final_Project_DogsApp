import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const DogsAppHome = () => {
    return (
        <div className="position-absolute top-0 vh-100 vw-100 app-bg" style={{overflow: "hidden"}}>
        <Container fluid className=" h-75 vw-100 d-flex flex-column justify-content-end ">
            <Container className="position-relative text-center mb-4 bg-body-tertiary shadow-lg ">
                <Row className="welcome-box-item d-flex mx-auto justify-content-evenly">
                    <Col>
                        <h1 className="pt-4">Welcome</h1>
                        <h5>Select one of the buttons below to continue</h5>
                    </Col>
                    <Row className="d-flex ">
                        <Col xs={12} sm={6} md={6} className="masthead__item__button">
                            <Button variant="outline-info" size="lg" href="/finder" className="ms-3 me-3 mt-2 mb-4">Find
                                your dream dog</Button>
                        </Col>
                        <Col xs={12} sm={6} md={6} className="masthead__item__button">
                            <Button variant="outline-primary" size="lg" href="list" className="ms-3 me-3 mt-2 mb-4">Search
                                the database</Button>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </Container>
        </div>
    );
};
export default DogsAppHome;