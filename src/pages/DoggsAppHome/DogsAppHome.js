import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";

const DogsAppHome = () => {
    return (
        <Container fluid>
            <Container>
                <Row>
                    <Col>Aby rozpocząć wybierz:</Col>
                </Row>
                <Row>
                    <Col xs={12} sm={6} md={6}>
                        <Button>Znajdź wymarzonego psa</Button>
                    </Col>
                    <Col xs={12} sm={6} md={6}>
                        <Button>Przeszukaj</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default DogsAppHome;