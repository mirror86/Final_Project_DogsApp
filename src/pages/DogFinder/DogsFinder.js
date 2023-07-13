import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import FormRange from "../../components/FormRange/FormRange";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";

const DogsFinder = () => {
    const [question, setQuestion] = useState(1)

    const handleNextQuestion = () => {
        setQuestion(prevState => prevState + 1)}
    const handlePrevQuestion = () => {
        if(question <= 0){
            alert("Error")

        } else {
        setQuestion(prevState => prevState - 1)}}
    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                       {/*<QuestionnairePage question={question}/>*/}
                        <PreferencePage/>
                        <div className="align-self-md-auto-end align-content-sm-center-center">
                            <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={handlePrevQuestion}>Back</Button>
                            <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={handleNextQuestion}>Next</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/> `
        </>
    );
};
export default DogsFinder;