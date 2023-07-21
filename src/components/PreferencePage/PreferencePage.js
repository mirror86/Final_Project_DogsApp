import React from 'react';
import {Button, Col, Form, Row} from "react-bootstrap";
import {dogHeightPreferences, dogWeightPreferences} from "../../data";
import Container from "react-bootstrap/Container";

const PreferencePage = ({onOtherQuestions, weightPreferencesMustHave, heightPreferencesMustHave}) => {
    return (
        <>
            <header className="text-center">
                <h1>What does your dream dog look like?</h1>
            </header>
            <section>
                <Container>
                    <Row>
                        <Col sm={12} md={{span: 8, offset: 2}} lg={{span: 6, offset: 3}}>
                            <p className='text-center'>CHOOSE ONE OF THE FOUR ANSWERS</p>
                            <Form className="w-auto">
                                {Object.entries(dogHeightPreferences).map(([key, preference]) => (
                                    <div key={`height-${key}`} className="mb-3">
                                        <Form.Check style={{border: "1px solid lightgrey", borderRadius: "5px"}}
                                                    className=" shadow d-flex flex-row-reverse justify-content-between p-2 p-sm-3 ms-5 me-5"
                                                    type="radio"
                                                    id={`height-${key}`}
                                                    label={preference.label}
                                                    name="group1"
                                                    onChange={() => heightPreferencesMustHave({key})}
                                        />
                                    </div>))}
                                <p className='text-center'>CHOOSE ONE OF THE THREE ANSWERS</p>
                                {Object.entries(dogWeightPreferences).map(([key, preference]) => (
                                    <div key={`weight-${key}`} className="mb-3">
                                        <Form.Check style={{border: "1px solid lightgrey", borderRadius: "5px"}}
                                                    className=" shadow d-flex flex-row-reverse justify-content-between p-1 p-sm-3 ms-5 me-5"
                                                    type="radio"
                                                    id={`weight-${key}`}
                                                    label={preference.label}
                                                    name="group2"
                                                    onChange={() => weightPreferencesMustHave({key})}
                                        />
                                    </div>
                                ))}
                            </Form>
                        </Col>
                    </Row>
                </Container>
                <div className=" d-flex flex-column justify-content-center flex-md-row">
                    <Button href="/" variant="outline-info" size="lg" className="ms-2 me-2 mt-3">Back to home
                        page</Button>
                    <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3"
                            onClick={onOtherQuestions}>Next</Button>
                </div>
            </section>
        </>
    );
};

export default PreferencePage;