import React from 'react';
import Container from "react-bootstrap/Container";

const Section = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    );
};

export default Section;