import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";
import {Button, Col, Row} from "react-bootstrap";
import Wrapper from "../../components/Wrapper/Wrapper";
import Section from "../../components/Section/Section";
import section from "../../components/Section/Section";


const DogsFinder = (props) => {
    return (
        <>
            <Container className="main mt-auto mb-auto">
                <Row className="text-center">
                    <Col xs={{span: 6, offset:3 }} className="d-flex flex-column justify-content-center">
                        <header>
                            <h1>Pytanie</h1>
                        </header>
                        <section>
                            <FormRange></FormRange>
                        </section>
                        <div className="align-self-end">
                            <Button>Wróć</Button>
                            <Button>Następne</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <footer className="mt-auto d-flex align-items-center justify-content-center"
                    style={{
                        height: '30vh',
                        background: 'url(/dog-pink.jpg) center/cover'}}>
            </footer>

        </>

    );
};

export default DogsFinder;