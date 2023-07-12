import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Row, Spinner} from "react-bootstrap";
import BreedCard from "../../components/BreedCard/BreedCard";

const apiUrl = "https://api.api-ninjas.com/v1/dogs?min_height=1";
const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";
const DogList = () => {
    const [dogData, setDogData] = useState(false);
    const [siteNumber, setSiteNumber] = useState(1);
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
            .catch(err => console.error(err))
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
        loadData(0);
    }, []);

    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg bg-white " style={{overflowY: "scroll"}}>
                <Container fluid className="h-100 bg-white">
                    <Row className="d-flex flex-wrap">
                        {!dogData &&
                            <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                                <span className="visually-hidden-focusable"></span>
                            </Spinner>}
                        {dogData && dogData.map((dog, index) => (
                            <BreedCard key={index} dog={dog}/>
                        ))}
                        {dogData &&
                            <div>
                                <Button onClick={handleClickPrevButton}>Previous</Button>
                                <Button onClick={handleClickNextButton}>Next</Button>
                            </div>}
                    </Row>
                </Container>
            </Container>
        </>
    );
}

export default DogList;