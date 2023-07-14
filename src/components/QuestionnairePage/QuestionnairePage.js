import React from 'react';
import FormRange from "../FormRange/FormRange";
import {Button} from "react-bootstrap";

const allQuestions = {
    energy: "I am active and would like to have a very active dog",
    barking: "I don't mind a dog barking at all",
    shedding: "A lot of falling hair is not a problem",
    trainability: "I would love a smart and fast learning dog",
    protectiveness: "I don't like dogs that react badly to strangers",
    good_with_children: "The dog must fully accept children",
    good_with_other_dogs:"The dog must fully accept other dogs"
}

const QuestionnairePage = ({question, onBack, onNext}) => {
    return (
        <>
            <header>
                <h1> Question {question} from 7</h1>
            </header>
            <section>
                <h3>Use the slider to set how much the following statement applies to you</h3>
                <h4></h4>
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