import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";
import {allQuestions, labelValues} from "../../data";


const DogsFinder = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [showPreferencePage, setShowPreferencePage] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions["energy"])
    const questionStringsArray = Object.values(allQuestions);
    const currentIndex = questionStringsArray.indexOf(currentQuestion)
    const [value, setValue] = useState(0);
    const [label, setLabel] = useState(labelValues[0])
    const handleRangeChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setValue(selectedValue);
        setLabel(labelValues[selectedValue]);

    };
    const handleLoadNextQuestion = () => {
        if (currentIndex < questionStringsArray.length - 1) {
            const anotherQuestion = questionStringsArray[currentIndex + 1];
            setCurrentQuestion(anotherQuestion)
        } else {
            alert("Przeładuj na stronę wyniku")
        }
    }

    const handleLoadPrevQuestion = () => {
        if (currentIndex > 0) {
            const anotherQuestion = questionStringsArray[currentIndex - 1];
            setCurrentQuestion(anotherQuestion)
        }
    }
    const handleNextQuestion = () => {
        setQuestionNumber(prevState => prevState + 1)
        handleLoadNextQuestion()
        setValue(prevState => prevState - value)

    }
    const handlePrevQuestion = () => {
        if (questionNumber < 2) {
            setShowPreferencePage(true)

        } // jeśli to ostatnia strona to zmien stan buttona na Wynik

        else {
            setQuestionNumber(prevState => prevState - 1)
            handleLoadPrevQuestion()
        }
        setValue(prevState => prevState - value)
    }

    const handleShowQuestionnairePage = () => {
        setShowPreferencePage(false)
    }


    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                        {showPreferencePage ? (
                            <PreferencePage onOtherQuestions={handleShowQuestionnairePage}/>
                        ) : (
                            <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion}
                                               label={label} value={value} onBack={handlePrevQuestion}
                                               onNext={handleNextQuestion} rangeValue={handleRangeChange}/>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}
export default DogsFinder;