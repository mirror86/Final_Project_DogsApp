import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import FormRange from "../../components/FormRange/FormRange";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";
import {Route} from "react-router-dom";
import {allQuestions} from "../../data";


const DogsFinder = ({value}) => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [showPreferencePage, setShowPreferencePage] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions["energy"])
    const questionStringsArray = Object.values(allQuestions);
    const currentIndex = questionStringsArray.indexOf(currentQuestion)

    const handleLoadNextQuestion = () => {
        if (currentIndex < questionStringsArray.length - 1){
            const anotherQuestion = questionStringsArray[currentIndex + 1];
            setCurrentQuestion(anotherQuestion)}
        else {
            alert("Przeładuj na stronę wyniku")
        }
    }

    const handleLoadPrevQuestion = () => {
        if (currentIndex > 0 ){
            const anotherQuestion = questionStringsArray[currentIndex - 1];
            setCurrentQuestion(anotherQuestion)}

    }
    const handleNextQuestion = () => {
        setQuestionNumber(prevState => prevState + 1)
    handleLoadNextQuestion()
    }
    const handlePrevQuestion = () => {
        if(questionNumber < 2){
            setShowPreferencePage(true)

        }
        // else if (question >= 5) {
        //     alert("to koniec")
        // }
        else {
        setQuestionNumber(prevState => prevState - 1)
        handleLoadPrevQuestion()}}

    const handleShowQuestionnairePage = () => {
        setShowPreferencePage(false)
    }



    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                        {showPreferencePage ? (
                            <PreferencePage onOtherQuestions={handleShowQuestionnairePage} />
                        ) : (
                            <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion} onBack={handlePrevQuestion} onNext={handleNextQuestion} />
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default DogsFinder;