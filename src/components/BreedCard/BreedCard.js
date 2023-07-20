import React, {useEffect, useState} from 'react';
import {Button, Card, Col} from "react-bootstrap";


const BreedCard = ({dog, handleAddToFavourites, favDogs}) => {
    const [itsFavourite, setItsFavourite] = useState(false);

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
                <Card.Img variant="top" src={dog.image_link} dog={dog}/>
                <Card.Body className="d-flex justify-content-between">
                    <Card.Title dog={dog}>{dog.name}</Card.Title>
                    <i className={`fa-regular fa-heart ${itsFavourite ? "fa-solid" : "fa-regular"}`} onClick={onHandleIconClick}
                      ></i>
                </Card.Body>
                <Button variant="outline-info" >More</Button>
            </Card>
        </Col>
    );
}
export default BreedCard;