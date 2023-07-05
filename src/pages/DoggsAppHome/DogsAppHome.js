import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Menu from "../../components/Menu/Menu";


const DogsAppHome = () => {
    return (

        <Container fluid className="masthead h-auto vw-100 d-flex flex-column  align-content-between mt-auto">
            <Container className="masthead__box  position-relative text-center mb-4">
                <Row className="masthead__item">
                    <Col className="masthead__item__text">Aby rozpocząć wybierz:</Col>
                </Row>
                <Row className="masthead__item">
                    <Col xs={12} sm={6} md={6} className="masthead__item__button">
                        <Button href="/finder">Znajdź wymarzonego psa</Button>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="masthead__item__button">
                        <Button href="list">Przeszukaj</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DogsAppHome;