import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {DogDataContext} from "../../App";

const ResultElement = ({dog, index, onIconClick}) => {
    const [itsFavourite, setItsFavourite] = useState(false);
    const {favDogs} = useContext(DogDataContext);

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

            <Row key={index}
                 className=" shadow justify-content-evenly gap-4 mt-2 mb-2 mt-sm-4 mt-sm-4 mt-lg-4 mb-lg-4 ms-sm-1 me-sm-1 ms-lg-2 me-lg-2 align-items-center pt-2 pb-2">
                <Col xs={12} sm={12} md={4} lg={3} xl={3} className="text-center">
                    <img src={dog.image_link} alt={dog.name} className=" w-100 rounded cover"/>
                    <h3 className="pt-3">{dog.name}</h3>
                </Col>
                <Col xs={12} sm={12} md={6} lg={4} xl={6}>
                    <table className="table table-sm">
                        <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Dog traits</th>
                            <th scope="col">Your Answer</th>
                            <th scope="col">Reality</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Energy</td>
                            <td>Otto</td>
                            <td>{dog.energy}</td>
                        </tr>
                        </tbody>
                    </table>
                    {/*<ul>*/}
                    {/*    <Col>Height: min:{dog.min_height_male}, max:{dog.max_height_male}</Col>*/}
                    {/*    <Col>Weight: min:{dog.min_weight_male}, max:{dog.max_weight_male}</Col>*/}
                    {/*    <Col> Energy: {dog.energy}</Col>*/}
                    {/*    <Col>Loudness: {dog.barking}</Col>*/}
                    {/*    <Col>Shedding: {dog.shedding}</Col>*/}
                    {/*    <Col>Fast learner: {dog.trainability}</Col>*/}
                    {/*    <Col>Protectiveness:{dog.protectiveness}</Col>*/}
                    {/*    <Col>God with children: {dog.good_with_children}</Col>*/}
                    {/*    <Col>Friendly to other dogs: {dog.good_with_other_dogs}</Col>*/}
                    {/*</ul>*/}
                </Col>
                <Col xs={12} sm={12} md={1} lg={2} xl={2} className="text-center"><i
                    className={`fa-regular fa-heart ${itsFavourite ? "fa-solid" : "fa-regular"}`}
                    onClick={onHandleIconClick}
                ></i></Col>
            </Row>
            {/*<ListGroup ><ListGroup.Item  index={index} className="d-flex justify-content-evenly align-items-center ms-5 me-5">*/}
            {/*    <div className="w-50 h-50">*/}
            {/*    <img src={dog.image_link} alt=""/>*/}
            {/*    </div>*/}
            {/*    <h4>{dog.name}</h4>*/}
            {/*    <ListGroup>*/}
            {/*        <ListGroup.Item>Height: min:{dog.min_height_male}, max:{dog.max_height_male}</ListGroup.Item>*/}
            {/*        <ListGroup.Item> Energy: {dog.energy}</ListGroup.Item>*/}
            {/*        <ListGroup.Item>Loudness: {dog.barking}</ListGroup.Item>*/}
            {/*        <ListGroup.Item>Shedding: {dog.shedding}</ListGroup.Item>*/}
            {/*        <ListGroup.Item>Fast learner: {dog.trainability}</ListGroup.Item>*/}
            {/*        <ListGroup.Item>Protectiveness:{dog.protectiveness}</ListGroup.Item>*/}
            {/*        <ListGroup.Item>God with children: {dog.good_with_children}</ListGroup.Item>*/}
            {/*        <ListGroup.Item>Friendly to other dogs: {dog.good_with_other_dogs}</ListGroup.Item>*/}
            {/*    </ListGroup>*/}
            {/*    <i className={`fa-regular fa-heart ${itsFavourite ? "fa-solid" : "fa-regular"}`} onClick={onHandleIconClick}*/}
            {/*    ></i>*/}
            {/*</ListGroup.Item></ListGroup>*/}

        </>
    );
};

export default ResultElement;