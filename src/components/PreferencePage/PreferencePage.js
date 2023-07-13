import React, {useState} from 'react';
import {Form} from "react-bootstrap";

const dogSizes = [
    "The bigger the better",
    "I like medium dogs",
    "I love little dogs",
    "Size doesn't matter"
]

const dogSilhouette = [
    "The skinny type",
    "Brawler type",
    "Doesn't matter"
]
const PreferencePage = () => {
    return (
        <>
            <header>
                <h1>What does your dream dog look like?</h1>
            </header>
            <section className="w-50 mx-auto">
                <p>choose one of the four answers</p>
                <Form>
                    {['radio'].map((type) => (
                        <div key={`default-${type}`} className="mb-3">
                            {dogSizes.map((size) => (
                            <Form.Check className="d-flex flex-row-reverse justify-content-between p-1" // prettier-ignore
                                        type={type}
                                        id={`default-`}
                                        label={`${size} `}
                                        name="group1"
                            />

                            ))}
                            <p>choose one of the three answers</p>
                            {dogSilhouette.map((silhouette, index) => (
                                <Form.Check className="d-flex flex-row-reverse justify-content-between p-1" // prettier-ignore
                                type={type}
                            id={`default-`}
                            label={`${silhouette} `}
                            name="group1"
                        />
                            ))}
                        </div>
                    ))}
                </Form>
            </section>
        </>
    );
};

export default PreferencePage;