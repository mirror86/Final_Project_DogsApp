import React from 'react';
import FormRange from "../FormRange/FormRange";
import {Button} from "react-bootstrap";



const QuestionnairePage = ({question}) => {
    return (
        <>
            <header>
                <h1> Question {question} from</h1>
            </header>
            <section>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex, itaque.</p>
                <FormRange/>
            </section>

        </>
    );
};

export default QuestionnairePage;