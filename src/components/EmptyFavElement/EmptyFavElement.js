import React from 'react';
import Container from "react-bootstrap/Container";

const EmptyFavElement = () => {
    return (
        <Container className="text-center ">
            <div className="fav-empty"></div>
            <h1>There are no dogs here</h1>
        </Container>
    );
};

export default EmptyFavElement;
