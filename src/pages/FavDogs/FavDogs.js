import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import FavDogElement from "../../components/FavDogElement/FavDogElement";
import {DogDataContext} from "../../App.js"

const FavDogs = () => {
    const {handleAddToFavourites, favDogs} = useContext(DogDataContext);
    console.log(favDogs)
    return (
        <>
            <Container fluid className="main h-100  bg-white" style={{overflowY: "scroll"}}>
                <Container fluid className="h-100 bg-white">
                    <Row>
                        <Col>
                            {!favDogs.length && (<h1>It's empty</h1>)}
                            <Container fluid="lg" className="mt-4">
                                {favDogs && favDogs.map((dog, index) => (
                                    <FavDogElement key={index} dog={dog} handleAddtoFavourites={handleAddToFavourites}/>
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