import React from 'react';
import {Button, Form} from "react-bootstrap";

const dogHeightPreferences = {
    medium: {
        label: "I like medium dogs",
        heightRange: {
            min_height_male: 15.5,
            max_height_male: 23,
        },
    },
    small: {
        label: "I love little dogs",
        heightRange: {
            min_height_male: 0,
            max_height_male: 15,
        },
    },
    large: {
        label: "The bigger the better",
        heightRange: {
            min_height_male: 23.5,
            max_height_male: 35,
        },
    },
    notMatter: {
        label: "Size doesn't matter",
        heightRange: {
            min_height_male: 0,
            max_height_male: 0,
        },
    },
};

const dogWeightPreferences = {
   skinny: {
        label:  "The skinny type",
        weightRange: {
            min_weight_male: 2,
            max_weight_male: 60,
        },
    },
    brawler: {
        label:  "Brawler type",
        weightRange: {
            min_weight_male: 60.5,
            max_weight_male: 200,
        },
    },
    notMatter: {
        label: "Doesn't matter",
        weightRange: {
            min_weight_male: 0,
            max_weight_male: 0,
        },
    },
};


const PreferencePage = ({onOtherQuestions}) => {
    return (
        <>
            <header>
                <h1>What does your dream dog look like?</h1>
            </header>
            <section className="w-50 mx-auto">
                <p>choose one of the four answers</p>
                <Form>
                    {Object.entries(dogHeightPreferences).map(([key, preference]) => (
                        <div key={`height-${key}`} className="mb-3">
                            <Form.Check
                                className="d-flex flex-row-reverse justify-content-between p-1"
                                type="radio"
                                id={`height-${key}`}
                                label={preference.label}
                                name="group1"
                            />
                        </div>  ))}
                    <p>choose one of the three answers</p>
                            {Object.entries(dogWeightPreferences).map(([key, preference]) => (
                                <div key={`weight-${key}`} className="mb-3">
                                    <Form.Check
                                        className="d-flex flex-row-reverse justify-content-between p-1"
                                        type="radio"
                                        id={`weight-${key}`}
                                        label={preference.label}
                                        name="group2"
                                    />
                        </div>
                    ))}
                </Form>
                        <div>
                        <Button href="/" variant="outline-info" size="lg" className="ms-2 me-2 mt-3">Back to home page</Button>
                        <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={onOtherQuestions}>Next</Button>
            </div>
            </section>
        </>
    );
};

export default PreferencePage;