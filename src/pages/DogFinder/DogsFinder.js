import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";
import {Button, Col, Row} from "react-bootstrap";
import Wrapper from "../../components/Wrapper/Wrapper";
import Section from "../../components/Section/Section";
import section from "../../components/Section/Section";
import Footer from "../../components/Footer/Footer";


const DogsFinder = (props) => {
    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset:3 }} className="d-flex flex-column justify-content-center">
                        <header>
                            <h1>Pytanie</h1>
                        </header>
                        <section>
                            <FormRange></FormRange>
                        </section>
                        <div className="align-self-end mt-auto">
                            <Button>Wróć</Button>
                            <Button>Następne</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>

        </>

    );
};

export default DogsFinder;