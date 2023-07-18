import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Row, Spinner} from "react-bootstrap";
import BreedCard from "../../components/BreedCard/BreedCard";

import {DogDataContext} from "../../App"
const DogList = ({ loadData, isLoading}) => {
    const { dogData, handleAddToFavourites, favDogs} = useContext(DogDataContext);
    const [siteNumber, setSiteNumber] = useState(1);


    const handleClickNextButton = () => {
        setSiteNumber(prevState => prevState + 1);
        const offset = siteNumber * 20;
        loadData(offset);
    };

    const handleClickPrevButton = () => {
        setSiteNumber(prevState => prevState - 1);
        const offset = siteNumber * 20;
        loadData(offset);
    };

    useEffect(() => {
        loadData(0);
    }, []);

    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg bg-white" style={{ overflowY: "scroll" }}>
                <Container fluid className="h-100 bg-white">
                    <Row className="d-flex flex-wrap">
                        {isLoading && (
                            <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                                <span className="visually-hidden-focusable"></span>
                            </Spinner>
                        )}
                        {!isLoading && dogData &&
                            dogData.map((dog, index) => (
                                <BreedCard key={index} dog={dog} handleAddToFavourites={handleAddToFavourites} favDogs={favDogs}/>
                            ))}
                        {!isLoading && dogData && (
                            <div>
                                <Button onClick={handleClickPrevButton}>Previous</Button>
                                <Button onClick={handleClickNextButton}>Next</Button>
                            </div>
                        )}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default DogList;
