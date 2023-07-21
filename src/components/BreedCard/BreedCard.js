import React, {useEffect, useState} from 'react';
import {Badge, Button, Card, Col, Collapse, ListGroup} from "react-bootstrap";


const BreedCard = ({dog, handleAddToFavourites, favDogs}) => {
    const [itsFavourite, setItsFavourite] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
        const isFavourite = favDogs.some((favDog) => favDog.name === dog.name);
        setItsFavourite(isFavourite);
    }, [favDogs, dog]);

    const onHandleIconClick = () => {
        setItsFavourite(!itsFavourite);
        handleAddToFavourites(dog)
    }
    return (
        <Col key={dog.name} xl={3} md={4} sm={6}>
            <Card className="border-light shadow-lg mt-2 mb-2 mt-sm-4 mt-sm-4 mt-lg-4 mb-lg-4 ms-sm-1 me-sm-1 ms-lg-2 me-lg-2 ">
                <Card.Img variant="top" src={dog.image_link} alt={dog.name} dog={dog}/>
                <Card.Body className="d-flex justify-content-between">
                    <Card.Title dog={dog}>{dog.name}</Card.Title>
                    <i className={`fa-regular fa-heart ${itsFavourite ? "fa-solid" : "fa-regular"}`} onClick={onHandleIconClick}
                      ></i>
                </Card.Body>
                {/*<Button variant="outline-info" >More</Button>*/}
                <Button
                    variant="outline-info"
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    More
                </Button>
                <Collapse in={open}>
                    <ListGroup as="ol" numbered>
                        // dopisz height i weight
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Energy</div>
                            </div>
                            <Badge bg="info" pill>{dog.energy}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Loudness</div>
                            </div>
                            <Badge bg="info" pill>{dog.barking}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Shedding</div>
                            </div>
                            <Badge bg="info" pill>{dog.shedding}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Trainability</div>
                            </div>
                            <Badge bg="info" pill>{dog.trainability}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Protectiveness</div>
                            </div>
                            <Badge bg="info" pill>{dog.protectiveness}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"> God with children</div>
                            </div>
                            <Badge bg="info" pill>{dog.good_with_children}</Badge>
                        </ListGroup.Item>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start">
                            <div className="ms-2 me-auto">
                                <div className="fw-bold"> God with other dogs</div>
                            </div>
                            <Badge bg="info" pill>{dog.good_with_other_dogs}</Badge>
                        </ListGroup.Item>
                    </ListGroup>
                </Collapse>
            </Card>
        </Col>
    );
}
export default BreedCard;