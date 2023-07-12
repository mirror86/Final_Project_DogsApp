import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";

const FavDogElement = ({handleRemove}) => {


    const handleRemoveClick = () => {
        handleRemove()
    }
    //funcja, ktora dodaje do tablicy ulubionych kolejną kliknięta rzezcz
    // const handleFavs = (newFav) => {
    //         setFav(prevState =>[...prevState, newFav])
    //     }
    // }
    return (
        <>
            <Row className=" shadow justify-content-evenly gap-4 m-sm-2 align-items-center pt-2 pb-2">
                <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center"><img src="/dog-icon.jpg" alt=""
                                                                                       className=" w-100 rounded cover"/></Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className=""><strong>Dog Breed</strong>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium culpa doloribus eos,
                    ex explicabo hic nam possimus unde voluptatem.</Col>
                <Col xs={12} sm={12} md={1} lg={2} xl={2} className="text-center">action <i
                    className="fa-solid fa-trash-can" onClick={handleRemoveClick}/></Col>
            </Row>
        </>
    );
};

export default FavDogElement;