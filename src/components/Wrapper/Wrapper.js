import React from 'react';
import Container from "react-bootstrap/Container";
import FormRange from "react-bootstrap/FormRange";

const Wrapper = (props) => {
    return (
        <Container className="wrapper">
            {props.children}
        </Container>
    );
};

export default Wrapper;