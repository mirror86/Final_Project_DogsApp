import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Row} from "react-bootstrap";
import BreedCard from "../../components/BreedCard/BreedCard";

const DogList = () => {


    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg bg-white " style={{overflowY: "scroll"}}>
                <Container fluid className="h-100 bg-white">
                    <Row className="flex-wrap">
                        <BreedCard/>
                    </Row>
                </Container>
            </Container>

        </>
    );
};

export default DogList;