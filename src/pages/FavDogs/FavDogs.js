import React from 'react';
import Container from "react-bootstrap/Container";
import Wrapper from "../../components/Wrapper/Wrapper";
import {Button, Card, Col, ListGroup, Row, Tab} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FavDogs = () => {
    return (
        <>
            <Container fluid className="finder__container main h-75 shadow-lg d-flex bg-white" style={{overflowY: "scroll"}} >

                    <Container fluid={"md"} className="h-100 bg-white mx-auto">
                        <Row className=" ">
                            <Col>
                                    <table className="table align-middle border-light shadow-lg mt-5 rounded-5">
                                        <thead>
                                        <tr>
                                            <td>Dog Breed</td>
                                            <td>Photo</td>
                                            <td>Short Description</td>
                                            <td>Action</td>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Dog Name</td>
                                            <td><img src="/public/IMG-2713.jpg" alt=""/></td>
                                            <td></td>
                                            <td><i className="fa-solid fa-trash-can" /></td>
                                        </tr>
                                        </tbody>
                                    </table>

                            </Col>
                        </Row>
                    </Container>

            </Container>
            </>

    );
};

export default FavDogs;