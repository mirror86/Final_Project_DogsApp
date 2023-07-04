import React from 'react';
import Container from "react-bootstrap/Container";

const Wrapper = (props) => {
    return (
        <Container className="wrapper">
            <Container>{props.children}</Container>
        </Container>
    );
};

export default Wrapper;