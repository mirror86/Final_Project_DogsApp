import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Row} from "react-bootstrap";
import BreedCard from "../../components/BreedCard/BreedCard";
const apiUrl = "https://api.api-ninjas.com/v1/dogs?min_height=1";
const apiKey = "Puy2zDCkC5Og1tl/a9AkYQ==duVwVJvXcT0MnzNG";
const DogList = () => {


    return (
        <>

            <Container fluid className="pages__container main h-100 shadow-lg bg-white " style={{overflowY: "scroll"}}>
                <Container fluid className="h-100 bg-white">
                    <Row className="d-flex flex-wrap">
                            <BreedCard/>
                    </Row>
                </Container>
            </Container>
        </>
);
};

export default DogList;