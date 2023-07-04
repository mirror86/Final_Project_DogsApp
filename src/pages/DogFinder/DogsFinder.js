import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";
import {Button, Col, Row} from "react-bootstrap";
import Wrapper from "../../components/Wrapper/Wrapper";
import Section from "../../components/Section/Section";


const DogsFinder = (props) => {
    return (
        <Section>
            <Wrapper>
                <Container className="finder__box">
                    <Row className="finder__box__item justify-content-xs-center justify-content-md-center">
                        <Col md={6}>Pytanie nr</Col>
                    </Row>
                    <Row className="finder__box__item justify-content-xs-center justify-content-md-center">
                        <Col md={6}>Treść pytania</Col>
                    </Row>
                    <Row className="finde__boxr__item justify-content-xs-center justify-content-md-center">
                        {/*<Col><FormRange className="form-range"></FormRange></Col>*/}
                    </Row>
                    <Row className="finder__box__item justify-content-xs-center justify-content-md-center">
                        <Col md={{span:3, offset:3}}>
                            <Button>Cofnij</Button>
                            <Button>Następne</Button>
                        </Col>
                    </Row>
                </Container>
            </Wrapper>
        </Section>
    );
};

export default DogsFinder;