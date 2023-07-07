import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";
import {Button, Col, Row} from "react-bootstrap";

import section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";


const DogsFinder = (props) => {
    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset:3 }} className="d-flex flex-column justify-content-center">
                        <header>
                            <h1>Question</h1>
                        </header>
                        <section>
                            <FormRange></FormRange>
                        </section>
                        <div className="align-self-md-auto-end align-content-sm-center-center">
                            <Button className="ms-2 me-2 mt-3">Back</Button>
                            <Button className="ms-2 me-2 mt-3">Next</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </>

    );
};

export default DogsFinder;