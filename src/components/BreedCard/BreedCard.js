import React, {useEffect, useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";

const apiUrl = "https://api.api-ninjas.com/v1/dogs?name=";
const breedName = `[].jpg`; // z małej listyety i z podłogą
const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";
const BreedCard = () => {
    const [data, setData] = useState(false);
    const [breedName, setBreedName] = useState("");
    const [breedImg, setBreedImg] = useState("");

    useEffect(() => {
        fetch(`${apiUrl}${breedName}`, {
            method: "GET",
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err =>
                console.error(err))
    }, [])

    return (
        <>
            <Col xl={3} md={4} sm={6} className="">
                <Card className="border-light shadow-lg mt-5 mb-5 ms-2 me-2 ">
                    <Card.Img variant="top" src="/IMG-2713.jpg"/>
                    <Card.Body className="d-flex justify-content-between">

                            <Card.Title>Card Title</Card.Title>
                            <i className="fa-regular fa-heart"></i>

                    </Card.Body>
                    <Button variant="outline-info">More</Button>
                </Card>
            </Col>
        </>
);
};

export default BreedCard;