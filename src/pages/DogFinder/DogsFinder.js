import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";
import {Button, Col, Row} from "react-bootstrap";
import Wrapper from "../../components/Wrapper/Wrapper";




const DogsFinder = (props) => {
    return (

        <Wrapper>
            <Container className="finder__box">
                <Row className="finder__box__item">
                    <Col>Pytanie nr</Col>
                </Row>
                <Row className="finder__box__item">
                    <Col>Treść pytania</Col>
                </Row>
                <Row className="finde__boxr__item">
                    <Col><FormRange></FormRange></Col>
                </Row>
                <Row className="finder__box__item">
                    <Col>
                        <Button>Cofnij</Button>
                    </Col>
                    <Col>
                        <Button>Następne</Button>
                    </Col>
                </Row>


            </Container>
        </Wrapper>
        
    );
};

export default DogsFinder;