import React, {useContext} from 'react';
import {DogDataContext} from "../../App";
import Container from "react-bootstrap/Container";
import {Row, Spinner} from "react-bootstrap";
import ResultElement from "../ResultElement/ResultElement";


const Results = ({answerValue, preferenceValue}) => {

    const {dogData, handleAddToFavourites, isLoading} = useContext(DogDataContext);
    return (
        <>
            <>
                <Container fluid className="pages__container main h-auto  bg-white overflow-y-hidden ms-3"
                           style={{overflowY: "scroll"}}>
                    <Container fluid className="h-auto bg-white">
                        <Row className="d-flex flex-wrap">
                            {isLoading && (
                                <Spinner animation="border" role="status" className="position-absolute top-50 start-50">
                                    <span className="visually-hidden-focusable"></span>
                                </Spinner>
                            )}
                            {!isLoading && dogData &&
                                dogData.map((dog, index) => (
                                    <ResultElement dog={dog} key={index} answerValue={answerValue} preferenceValue={preferenceValue} onIconClick={handleAddToFavourites}/>
                                ))}
                            {!isLoading && !dogData.length && (<div>no data</div>)}
                        </Row>
                    </Container>
                </Container>
            </>

        </>
    );
};

export default Results;