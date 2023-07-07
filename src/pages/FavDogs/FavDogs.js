import React from 'react';
import Container from "react-bootstrap/Container";

import {Button, Card, Col, ListGroup, Row, Tab} from "react-bootstrap";


const FavDogs = () => {
    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg  bg-white" style={{overflowY: "scroll"}} >
               <Container fluid className="h-100 bg-white">
                        <Row className=" ">
                            <Col>
                                <Container className="mt-4">
                                    <Row className=" shadow justify-content-center m-sm-2 gap-5 align-items-center p-3">
                                        <Col xs={1} md={2} className="text-center"><img src="/dog-icon.jpg" alt="" className="w-100 rounded m-auto"/></Col>
                                        <Col xs={1} md={1} className="">Dog Breed</Col>
                                        <Col xs={2} md={3} className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium culpa doloribus eos, ex explicabo hic nam possimus unde voluptatem.</Col>
                                        <Col xs={1} md={2} className="text-center">action <i className="fa-solid fa-trash-can" /></Col>
                                    </Row>
                                </Container>
                                <Container className="mt-4">
                                    <Row className=" shadow justify-content-center m-sm-2 gap-5 align-items-center p-3">
                                        <Col xs={1} md={2} className="text-center"><img src="/dog-icon.jpg" alt="" className="w-100 rounded m-auto"/></Col>
                                        <Col xs={1} md={1} className="">Dog Breed</Col>
                                        <Col xs={2} md={3} className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium culpa doloribus eos, ex explicabo hic nam possimus unde voluptatem.</Col>
                                        <Col xs={1} md={2} className="text-center">action <i className="fa-solid fa-trash-can" /></Col>
                                    </Row>
                                </Container>
                                <Container className="mt-4">
                                    <Row className=" shadow justify-content-center m-sm-2 gap-5 align-items-center p-3">
                                        <Col xs={1} md={2} className="text-center"><img src="/dog-icon.jpg" alt="" className="w-100 rounded m-auto"/></Col>
                                        <Col xs={1} md={1} className="">Dog Breed</Col>
                                        <Col xs={2} md={3} className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium culpa doloribus eos, ex explicabo hic nam possimus unde voluptatem.</Col>
                                        <Col xs={1} md={2} className="text-center">action <i className="fa-solid fa-trash-can" /></Col>
                                    </Row>
                                </Container>
                                <Container className="mt-4">
                                    <Row className=" shadow justify-content-center m-sm-2 gap-5 align-items-center p-3">
                                        <Col xs={1} md={2} className="text-center"><img src="/dog-icon.jpg" alt="" className="w-100 rounded m-auto"/></Col>
                                        <Col xs={1} md={1} className="">Dog Breed</Col>
                                        <Col xs={2} md={3} className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium culpa doloribus eos, ex explicabo hic nam possimus unde voluptatem.</Col>
                                        <Col xs={1} md={2} className="text-center">action <i className="fa-solid fa-trash-can" /></Col>
                                    </Row>
                                </Container>
                                <Container className="mt-4">
                                    <Row className=" shadow justify-content-center m-sm-2 gap-5 align-items-center p-3">
                                        <Col xs={1} md={2} className="text-center"><img src="/dog-icon.jpg" alt="" className="w-100 rounded m-auto"/></Col>
                                        <Col xs={1} md={1} className="">Dog Breed</Col>
                                        <Col xs={2} md={3} className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium culpa doloribus eos, ex explicabo hic nam possimus unde voluptatem.</Col>
                                        <Col xs={1} md={2} className="text-center">action <i className="fa-solid fa-trash-can" /></Col>
                                    </Row>
                                </Container>


                            </Col>
                        </Row>
                    </Container>

            </Container>

            </>

    );
};

export default FavDogs;