import React from 'react';
import {Button} from "react-bootstrap";

const Answers = ({sentData}) => {

    return (
        <>
        <div className="finder__wrapper result d-flex justify-content-end flex-column">
            <div className="result"></div>
            <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3 mb-4 " onClick={sentData}>Meet Your dream dog</Button>
        </div>

        </>
    );
};

export default Answers;