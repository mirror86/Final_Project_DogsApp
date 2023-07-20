import React, {useContext, useEffect, useState} from 'react';
import {ListGroup} from "react-bootstrap";
import {DogDataContext} from "../../App";

const ResultElement = ({dog, index, onIconClick}) => {
    const [itsFavourite, setItsFavourite] = useState(false);
    const { favDogs} = useContext(DogDataContext);

    useEffect(() => {
        const isFavourite = favDogs.some((favDog) => favDog.name === dog.name);
        setItsFavourite(isFavourite);
    }, [favDogs, dog]);

    const onHandleIconClick = () => {
        setItsFavourite(!itsFavourite);
        onIconClick(dog)
    }

    return (
        <>
            <ListGroup ><ListGroup.Item index={index} className="d-flex justify-content-evenly align-items-center">
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
                <i className={`fa-regular fa-heart ${itsFavourite ? "fa-solid" : "fa-regular"}`} onClick={onHandleIconClick}
                ></i>
            </ListGroup.Item></ListGroup>
        </>
    );
};

export default ResultElement;