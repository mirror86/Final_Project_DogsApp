import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import FormRange from "../../components/FormRange/FormRange";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";
import {Route} from "react-router-dom";

const DogsFinder = ({value}) => {
    const [question, setQuestion] = useState(1)
    const [showPreferencePage, setShowPreferencePage] = useState(true)
    const [answersValue, setAnswersValue] = useState(0)
    const handleNextQuestion = () => {
        setQuestion(prevState => prevState + 1)}
    const handlePrevQuestion = () => {
        if(question < 2){
            setShowPreferencePage(true)

        }
        // else if (question >= 5) {
        //     alert("to koniec")
        // }
        else {
        setQuestion(prevState => prevState - 1)}}

    const handleShowQuestionnairePage = () => {
        setShowPreferencePage(false)
    }

    const handleSliderFormSubmit = (answer) => {
        setAnswersValue(prevState => [...prevState, answer]);
    };

    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                        {showPreferencePage ? (
                            <PreferencePage onOtherQuestions={handleShowQuestionnairePage} />
                        ) : (
                            <QuestionnairePage question={question} answersValue={answersValue} onBack={handlePrevQuestion} onNext={handleNextQuestion} />
                        )}
                        {/*<div className="align-self-md-auto-end align-content-sm-center-center">*/}
                        {/*    /!*<Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onBack={handlePrevQuestion}>Back</Button>*!/*/}
                        {/*    {showPreferencePage ? (*/}
                        {/*        <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" >Next1</Button>*/}
                        {/*    ) : (*/}
                        {/*        <Button variant="outline-info" size="lg" className="ms-2 me-2 mt-3" onClick={handleNextQuestion} onNext={handleSliderFormSubmit}>Next</Button>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default DogsFinder;