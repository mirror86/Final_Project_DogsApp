import React, {useContext} from 'react';
import {DogDataContext} from "../../App";
import Container from "react-bootstrap/Container";
import {Button, ListGroup, Row, Spinner} from "react-bootstrap";


const Results = () => {
    const { favDogs,setFavDogs, dogData, handleAddToFavourites  } = useContext(DogDataContext);
    return (
        <>
            <>
                <Container fluid className="pages__container main h-auto shadow-lg bg-white" style={{ overflowY: "scroll" }}>
                    <Container fluid className="h-auto bg-white">
                        <Row className="d-flex flex-wrap">
                            {/*{isLoading && (*/}
                            {/*    <Spinner animation="border" role="status" className="position-absolute top-50 start-50">*/}
                            {/*        <span className="visually-hidden-focusable"></span>*/}
                            {/*    </Spinner>*/}
                            {/*)}*/}
                            {!dogData && <h1>ładuję</h1>}
                            { dogData &&
                                dogData.map((dog, index) => (
                                    <ListGroup ><ListGroup.Item key={index} className="d-flex justify-content-evenly align-items-center">
                                        <img src={dog.image_link} alt=""/>
                                        <h4>{dog.name}</h4>
                                        <ListGroup>
                                            <ListGroup.Item>Height: min:{dog.min_height_male}, max:{dog.max_height_male}</ListGroup.Item>
                                            <ListGroup.Item> Energy: {dog.energy}</ListGroup.Item>
                                            <ListGroup.Item>Loudness: {dog.barking}</ListGroup.Item>
                                            <ListGroup.Item>Shedding: {dog.shedding}</ListGroup.Item>
                                            <ListGroup.Item>Fast learner: {dog.trainability}</ListGroup.Item>
                                            <ListGroup.Item>Protectiveness:{dog.protectiveness}</ListGroup.Item>
                                            <ListGroup.Item>God with children: {dog.good_with_children}</ListGroup.Item>
                                            <ListGroup.Item>Friendly to other dogs: {dog.good_with_other_dogs}</ListGroup.Item>
                                        </ListGroup>
                                        <i className={`fa-regular fa-heart `}
                                        ></i>
                                    </ListGroup.Item></ListGroup>
                                ))}

                        </Row>
                    </Container>
                </Container>
            </>

        </>
    );
};

export default Results;