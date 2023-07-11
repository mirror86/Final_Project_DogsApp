import React, {useEffect, useState} from 'react';
import {Button, Card, Col, Spinner} from "react-bootstrap";

const apiUrl = "https://api.api-ninjas.com/v1/dogs?min_height=1";
const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";
const BreedCard = () => {
    const [dogData, setDogData] = useState(false);
    const [siteNumber, setSiteNumber] = useState(1);
    const [itsFavourites, setItsFavourites] = useState(false); // albo false albo pusta tablica favourites uzyj !
    const loadData = (offset) => {
        fetch(`${apiUrl}&offset=${offset}`, {
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
    }

const onHandleIconClick = () => {
    setItsFavourites(!itsFavourites);
}
    const handleClickNextButton = () => {
        setSiteNumber(prevState => prevState + 1)
        const offset = siteNumber * 20
        loadData(offset);
    }

    const handleClickPrevButton = () => {
        setSiteNumber(prevState => prevState - 1)
        const offset = siteNumber * 20
        loadData(offset);
    }

useEffect(() => {
    loadData(0)
}, [])

return (
    <>
        {!dogData && <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
            <span className="visually-hidden-focusable"></span>
        </Spinner>}
        {dogData && dogData.map((dog, index) => (
            <Col xl={3} md={4} sm={6}>
                <Card key={index} className="border-light shadow-lg mt-5 mb-5 ms-2 me-2 ">
                    <Card.Img variant="top" src={dog.image_link}/>
                    <Card.Body className="d-flex justify-content-between">
                        <Card.Title>{dog.name}</Card.Title>
                        <i className={`fa-regular fa-heart ${itsFavourites ? "fa-solid" : "fa-regular"}`}
                           onClick={onHandleIconClick}></i>
                    </Card.Body>
                    <Button variant="outline-info">More</Button>
                </Card>
            </Col>

        ))}
        {!dogData && <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
            <span className="visually-hidden-focusable"></span>
        </Spinner>}
        {dogData &&
            <div><Button onClick={handleClickNextButton}>Next</Button>
                <Button onClick={handleClickPrevButton}>Previous</Button> </div>}
    </>
);
}


export default BreedCard;