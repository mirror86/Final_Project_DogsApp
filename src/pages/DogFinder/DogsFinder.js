import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";
import {Button, Col, Row} from "react-bootstrap";
import Wrapper from "../../components/Wrapper/Wrapper";
import Section from "../../components/Section/Section";
import section from "../../components/Section/Section";


const DogsFinder = (props) => {
    return (

        <section className="d-flex align-items-center justify-content-center" style={{width:"100vw", height: "100vh"}}>

                <Container fluid ="xs" className="finder__box text-center  d-flex align-items-center justify-content-center text-center">
                    <Row className="finder__box__item align-self-start">
                        <Col >Pytanie nr</Col>
                    </Row>
                    <Row className="finder__box__item">
                        <Col >Treść pytania</Col>
                    </Row>
                    <Row className="finde__boxr__item">
                        {/*<Col><FormRange className="form-range"></FormRange></Col>*/}
                    </Row>
                    <Row className="finder__box__item align-self-end" >
                        <Col  className="text-right">
                            <Button variant="secondary">Cofnij</Button>
                            <Button variant="primary">Następne</Button>
                        </Col>
                    </Row>
                </Container>

        </section>

    );
};

export default DogsFinder;