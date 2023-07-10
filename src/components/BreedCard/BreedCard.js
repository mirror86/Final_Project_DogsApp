import React, {useEffect, useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";


const apiUrl = "https://api.api-ninjas.com/v1/dogs?min_height=1";
const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";
const BreedCard = () => {
    const [dogData, setDogData] = useState(false);
const [iconState, setIconState] = useState(false)
const onHandleIconClick =() => {
    setIconState(!iconState);

}

    useEffect(() => {
        fetch(`${apiUrl}`, {
            method: "GET",
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setDogData(data))
            .catch(err =>
                console.error(err))
    }, [])

    return (
            <Col xl={3} md={4} sm={6}>
                {!dogData && <h1>Trwa ładowwanie</h1>}
                {dogData && dogData.map((dog, index)=> (
                <Card key={index} className="border-light shadow-lg mt-5 mb-5 ms-2 me-2 ">
                    <Card.Img variant="top" src={dog.image_link}/>
                    <Card.Body className="d-flex justify-content-between">
                            <Card.Title>{dog.name}</Card.Title>
                            <i className={`fa-regular fa-heart ${iconState ? "fa-solid" : "fa-regular"}`} onClick={onHandleIconClick}></i>
                    </Card.Body>
                    <Button variant="outline-info">More</Button>
                </Card>
                ))}
            </Col>
);
};

export default BreedCard;