import React, {useContext, useEffect, useState} from 'react';
import {DogDataContext} from "../../App";
import Container from "react-bootstrap/Container";
import {Button, ListGroup, Row, Spinner} from "react-bootstrap";
import ResultElement from "../ResultElement/ResultElement";


const Results = () => {

    const {dogData, handleAddToFavourites, isLoading} = useContext(DogDataContext);
    return (
        <>
            <>
                <Container fluid className="pages__container main h-auto shadow-lg bg-white" style={{ overflowY: "scroll" }}>
                    <Container fluid className="h-auto bg-white">
                        <Row className="d-flex flex-wrap">
                            {/*{isLoading && (*/}
                            {/*    <Spinner animation="border" role="status" className="position-absolute top-50 start-50">*/}
                            {/*        <span className="visually-hidden-focusable"></span>*/}
                            {/*    </Spinner>*/}
                            {/*)}*/}
                            {!dogData && <h1>NO TO CZEKAMY</h1>}
                            {dogData &&
                                dogData.map((dog, index) => (
                                    <ResultElement dog={dog} key={index} onIconClick={handleAddToFavourites}/>
                                ))}

                        </Row>
                    </Container>
                </Container>
            </>

        </>
    );
};

export default Results;