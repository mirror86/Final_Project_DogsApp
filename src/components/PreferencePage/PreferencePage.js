import React from 'react';
import {Button, Form} from "react-bootstrap";
import {dogHeightPreferences, dogWeightPreferences} from "../../data";


const PreferencePage = ({onOtherQuestions}) => {
    return (
        <>
            <header>
                <h1>What does your dream dog look like?</h1>
            </header>
            <section className="w-50 mx-auto">
                <p>choose one of the four answers</p>
                <Form>
                    {/* eslint-disable-next-line no-undef */}
                    {Object.entries(dogHeightPreferences).map(([key, preference]) => (
                        <div key={`height-${key}`} className="mb-3">
                            <Form.Check
                                className="d-flex flex-row-reverse justify-content-between p-1 ms-3 me-5"
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
                                        className="d-flex flex-row-reverse justify-content-between p-1 ms-3 me-5"
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