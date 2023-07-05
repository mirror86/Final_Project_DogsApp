import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Menu from "../../components/Menu/Menu";


const DogsAppHome = () => {
    return (

        <Container fluid className="main vh-100">
            <img src="/dogs-bg.jpg" alt="main-image" className="masthead-image"/>
            <Container className="main__box">
                <Row className="main__item">
                    <Col className="main__item__text">Aby rozpocząć wybierz:</Col>
                </Row>
                <Row className="main__item">
                    <Col xs={12} sm={6} md={6} className="main__item__button">
                        <Button href="/finder">Znajdź wymarzonego psa</Button>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="main__item__button">
                        <Button href="list">Przeszukaj</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DogsAppHome;