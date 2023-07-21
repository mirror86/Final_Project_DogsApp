import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Row, Spinner} from "react-bootstrap";
import BreedCard from "../../components/BreedCard/BreedCard";

import {DogDataContext} from "../../App"

const DogList = () => {
    const {dogData, handleAddToFavourites, favDogs, loadData, isLoading} = useContext(DogDataContext);
    const [siteNumber, setSiteNumber] = useState(1);
    const [pageCounter, setPageCounter] = useState(1)

    // increment page counter
    const handleNextPageCounter = () => {
        setPageCounter(prevState => prevState + 1)
    }

//decrement page counter
    const handlePrevPageCounter = () => {
        setPageCounter(prevState => prevState - 1)
    }
// load next page
    const handleClickNextButton = () => {
        setSiteNumber(prevState => prevState + 1);
        const offset = siteNumber * 20;
        loadData(offset);
        handleNextPageCounter()
    };
// load prev page
    const handleClickPrevButton = () => {
        setSiteNumber(prevState => prevState - 1);
        const offset = siteNumber * 20;
        loadData(offset);
        handlePrevPageCounter()
    };

    useEffect(() => {
        loadData(0);
    }, []);

    return (
        <>
            <Container fluid className="pages__container main h-100 shadow-lg bg-white" style={{overflowY: "scroll"}}>
                <Container fluid className="h-100 bg-white">
                    <Row className="d-flex flex-wrap">
                        {isLoading && (
                            <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                                <span className="visually-hidden-focusable"></span>
                            </Spinner>
                        )}
                        {!isLoading && dogData &&
                            dogData.map((dog, index) => (
                                <BreedCard key={index} dog={dog} handleAddToFavourites={handleAddToFavourites}
                                           favDogs={favDogs}/>
                            ))}
                        {!isLoading && dogData && (
                            <div className="dogsList__navigation d-flex justify-content-center">
                                <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3 mb-4"
                                        onClick={handleClickPrevButton}>Previous</Button>
                                <p className="mt-4">Page {pageCounter} form 15 </p>
                                <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3 mb-4"
                                        onClick={handleClickNextButton}>Next</Button>
                            </div>
                        )}
                    </Row>
                </Container>
            </Container>
        </>
    );
};

export default DogList;
