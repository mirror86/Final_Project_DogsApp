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
            <Card className="border-light shadow-lg mt-5 mb-5 ms-2 me-2 ">
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