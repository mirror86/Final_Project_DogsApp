import React from 'react';
import FormRange from "../FormRange/FormRange";
import {Button} from "react-bootstrap";



const QuestionnairePage = ({question, onBack, onNext}) => {
    return (
        <>
            <header>
                <h1> Question {question} from 5</h1>
            </header>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, itaque.</p>
                <FormRange/>
                <div>
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onBack}>Back</Button>
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onNext} >Next</Button>
                </div>
            </section>

        </>
    );
};

export default QuestionnairePage;