import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import FavDogElement from "../../components/FavDogElement/FavDogElement";
import {DogDataContext} from "../../App.js"
import BreedCard from "../../components/BreedCard/BreedCard";
const FavDogs = () => {
    const {  handleAddToFavourites, favDogs} = useContext(DogDataContext);

    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg  bg-white" style={{overflowY: "scroll"}}>
                <Container fluid className="h-100 bg-white">
                    <Row className=" ">
                        <Col>
                            <Container fluid="lg" className="mt-4">
                                {favDogs.map((dog, index) => (
                                <FavDogElement key={index} dog={dog} handleAddtoFavourites={handleAddToFavourites} />
                                ))}
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default FavDogs;