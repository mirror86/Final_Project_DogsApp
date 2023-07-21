import React, {useContext, useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {DogDataContext} from "../../App";

const ResultElement = ({dog, index, onIconClick, answerValue, preferenceValue}) => {
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
                <Col xs={12} sm={12} md={6} lg={4} xl={6}><table className="table table-sm">
                    <thead>
                    <tr>

                        <th scope="col">Dog traits</th>
                        <th scope="col">Your Answer</th>
                        <th scope="col">Reality</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Weight</td>
                        <td> from {preferenceValue.weight.min}lb to {preferenceValue.weight.max}lb</td>
                        <td>from {dog.min_weight_male}lb to {dog.max_weight_male}lb</td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>from {preferenceValue.height.min}in to {preferenceValue.height.max}in</td>
                        <td> from {dog.min_height_male}in to {dog.max_height_male}in</td>
                    </tr>
                    <tr>
                        <td>Energy</td>
                        <td>{answerValue.energy}</td>
                        <td>{dog.energy}</td>
                    </tr>
                    <tr>
                        <td>Loudness</td>
                        <td>{answerValue.barking}</td>
                        <td>{dog.barking}</td>
                    </tr>
                    <tr>
                        <td>Shedding</td>
                        <td>{answerValue.shedding}</td>
                        <td>{dog.shedding}</td>
                    </tr>
                    <tr>
                        <td>Trainability</td>
                        <td>{answerValue.trainability}</td>
                        <td>{dog.trainability}</td>
                    </tr>
                    <tr>
                        <td>Protectiveness</td>
                        <td>{answerValue.protectiveness}</td>
                        <td>{dog.protectiveness}</td>
                    </tr>
                    <tr>
                        <td>Good with children</td>
                        <td>{answerValue.good_with_children}</td>
                        <td>{dog.good_with_children}</td>
                    </tr>
                    <tr>
                        <td>Good with other dogs</td>
                        <td>{answerValue.good_with_other_dogs}</td>
                        <td>{dog.good_with_other_dogs}</td>
                    </tr>
                    </tbody>
                </table>
                </Col>
                <Col xs={12} sm={12} md={1} lg={2} xl={2} className="text-center"><i
                    className={`fa-regular fa-heart ${itsFavourite ? "fa-solid" : "fa-regular"}`}
                    onClick={onHandleIconClick}
                ></i></Col>
            </Row>
        </>
    );
};

export default ResultElement;