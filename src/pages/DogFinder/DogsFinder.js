import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";
import {allQuestions, dogHeightPreferences, dogWeightPreferences, labelValues} from "../../data";
import Answers from "../../components/Anwsers/Answers";


const DogsFinder = () => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [showPreferencePage, setShowPreferencePage] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions["energy"])
    const questionStringsArray = Object.values(allQuestions);
    const currentIndex = questionStringsArray.indexOf(currentQuestion)
    const [answerValue, setAnswerValue] = useState(0);
    const [label, setLabel] = useState(labelValues[0])
    const [answers, setAnswers] = useState({})

    const handleRangeChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setAnswerValue(selectedValue);
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
        // setAnswerValue(0)
    }
    const handlePrevQuestion = () => {
        if (questionNumber < 2) {
            setShowPreferencePage(true)

        } // jeśli to ostatnia strona to zmien stan buttona na Wynik

        else {
            setQuestionNumber(prevState => prevState - 1)
            handleLoadPrevQuestion()
        }
        // setAnswerValue(0)
    }

    const handleSaveAnswer = () => {
        setAnswers((prevState) => ({
            ...prevState,
            [questionNumber]: answerValue,
        }));
    };

    const handleHeightPreferences =(e) => {
        const heightPreferences = e.target.value;
        setAnswers(prevState => ({...prevState,height: dogHeightPreferences[heightPreferences].heightRange})
    )}
        const handleWeightPreferences =(e) => {
            const weightPreferences = e.target.value;
            setAnswers(prevState => ({...prevState,weight: dogWeightPreferences[weightPreferences].weightRange})
            )
    }


    const handleShowQuestionnairePage = () => {
        const answer = {...answers,};
        console.log(answer)
        setShowPreferencePage(false)
    }
// nie można przypisywać tego do answer bo w tym wypadku obiekt ma zwracac zakres - poczytaj jak zwracac zakres w wartosci i stworz nowe stany
    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                        {showPreferencePage ? (
                            <PreferencePage onOtherQuestions={handleShowQuestionnairePage} weightPreference={handleWeightPreferences} heightPreference={handleHeightPreferences}/>
                        ) : (
                            <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion}
                                               label={label} answerValue={answerValue} onBack={handlePrevQuestion}
                                               onNext={handleNextQuestion} rangeValue={handleRangeChange} onSaveAnswerValue={handleSaveAnswer}/>
                        )}
                        <Answers answers={answers} questionNumber={questionNumber} answerValue={answerValue}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default DogsFinder;