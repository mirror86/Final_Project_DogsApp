import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import FavDogElement from "../../components/FavDogElement/FavDogElement";
const FavDogs = () => {
    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg  bg-white" style={{overflowY: "scroll"}} >
               <Container fluid className="h-100 bg-white">
                   <Row className=" ">
                       <Col>
                           <Container fluid="lg" className="mt-4">
                                    <FavDogElement/>
                                </Container>
                            </Col>
                        </Row>
                    </Container>

            </Container>

            </>

    );
};

export default FavDogs;