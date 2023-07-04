import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const DogsAppHome = () => {
    return (
        <Container fluid className="main">
            <Container className="main__box">
                <Row className="main__item">
                    <Col className="main__item__text">Aby rozpocząć wybierz:</Col>
                </Row>
                <Row className="main__item">
                    <Col xs={12} sm={6} md={6} className="main__item__button">
                        <Button>Znajdź wymarzonego psa</Button>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="main__item__button>
                        <Button>Przeszukaj</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DogsAppHome;