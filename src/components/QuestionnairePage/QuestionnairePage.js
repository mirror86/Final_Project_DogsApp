import React, {useState} from 'react';
import FormRange from "../FormRange/FormRange";
import {Button} from "react-bootstrap";


const QuestionnairePage = ({questionNumber, onBack, onNext, currentQuestion, rangeValue, value, label}) => {

    return (
        <>
            <header>
                <h1> Question {questionNumber} from 7</h1>
            </header>
            <section>
                <h3>Use the slider to set how much the following statement applies to you</h3>
                <h4>{currentQuestion}</h4>
                <FormRange value={value} label={label} rangeValue={rangeValue}/>
                <div className="d-flex justify-content-end me-5">
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onBack}>Back</Button>
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onNext} >Next</Button>
                </div>
            </section>

        </>
    );
};

export default QuestionnairePage;