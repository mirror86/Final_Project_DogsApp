import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {dogHeightPreferences, dogWeightPreferences} from "../../data";
import Container from "react-bootstrap/Container";


const PreferencePage = ({onOtherQuestions, weightPreferencesMustHave, heightPreferencesMustHave}) => {

    return (
        <>
            <Container className="pt-5 pb-5 h-auto">
            <header className="text-center">
                <h1>What does your dream dog look like?</h1>
            </header>
            <section className=" mx-auto ms-2 me-2">
                <p>CHOOSE ONE OF THE FOUR ANSWERS</p>
                <Form className="w-auto">
                    {Object.entries(dogHeightPreferences).map(([key, preference]) => (
                        <div key={`height-${key}`} className="mb-3">
                            <Form.Check style={{border: "1px solid lightgrey", borderRadius: "5px"}}
                                        className="d-flex flex-row-reverse justify-content-between p-3 ms-5 me-5"
                                        type="radio"
                                        id={`height-${key}`}
                                        label={preference.label}
                                        name="group1"
                                        onChange={() => heightPreferencesMustHave({key})}
                            />
                        </div>))}
                    <p>CHOOSE ONE OF THE THREE ANSWERS</p>
                    {Object.entries(dogWeightPreferences).map(([key, preference]) => (
                        <div key={`weight-${key}`} className="mb-3">
                            <Form.Check style={{border: "1px solid lightgrey", borderRadius: "5px"}}
                                        className="d-flex flex-row-reverse justify-content-between p-3 ms-5 me-5"
                                        type="radio"
                                        id={`weight-${key}`}
                                        label={preference.label}
                                        name="group2"
                                        onChange={() => weightPreferencesMustHave({key})}
                            />
                        </div>
                    ))}
                </Form>
                <div className=" d-flex justify-content-center">
                    <Button href="/" variant="outline-info" size="lg" className="ms-2 me-2 mt-3">Back to home
                        page</Button>
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3"
                            onClick={onOtherQuestions}>Next</Button>
                </div>
            </section>
            </Container>
        </>
    );
};

export default PreferencePage;