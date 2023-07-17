import React from 'react';
import {Button} from "react-bootstrap";

const Answers = ({sentData}) => {

    return (
        <>
            <h1>One day your dream dog will be waiting for you here</h1>
            <Button onClick={sentData}>Score</Button>
        </>
    );
};

export default Answers;