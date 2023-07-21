import React, {useContext} from 'react';
import {Col, Row} from "react-bootstrap";
import {DogDataContext} from "../../App";
import EmptyFavElement from "../EmptyFavElement/EmptyFavElement";

const FavDogElement = ( {dog, key}) => {
    const { favDogs,setFavDogs  } = useContext(DogDataContext);
    const handleRemoveFromFavourites = (dog) => {
        console.log(dog)
        const updatedFavorites= favDogs.filter((favDog)=> ( dog.name !== favDog.name))
        setFavDogs(updatedFavorites)
    }

    const iconClick = () => {
        handleRemoveFromFavourites(dog)
    }
    return (
        <>
             <Row key={key} className=" shadow justify-content-evenly gap-4 m-sm-2 align-items-center pt-2 pb-2">
                <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center"><img src={dog.image_link} alt={dog.name} className=" w-100 rounded cover"/></Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}><strong>{dog.name}</strong></Col>

                <Col xs={12} sm={12} md={1} lg={2} xl={2} className="text-center"><i className="fa-solid fa-trash-can" onClick={iconClick}/></Col>
            </Row>

        </>
    );

};

export default FavDogElement;