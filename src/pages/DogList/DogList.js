import React from 'react';
import Wrapper from "../../components/Wrapper/Wrapper";
import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import Section from "../../components/Section/Section";


const DogList = () => {
    return (
        <Section>
            <Wrapper>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Wrapper>
        </Section>
    );
};

export default DogList;