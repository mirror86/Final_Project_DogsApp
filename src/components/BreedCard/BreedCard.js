import React from 'react';
import {Button, Card, Col} from "react-bootstrap";

const BreedCard = () => {
    return (
        <>
        <Col xl={3} md={4} sm={6} className="">
            <Card className="border-light shadow-lg mt-5 mb-5 ms-2 me-2 ">
                <Card.Img variant="top" src="/IMG-2713.jpg"/>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <i className="fa-regular fa-heart"></i>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="outline-info">More</Button>
                </Card.Body>
            </Card>
        </Col>
        </>
    );
};

export default BreedCard;