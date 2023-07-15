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
    const [answersQuestionnaire, setAnswersQuestionnaire] = useState({})
const [answersPreference, setAnswersPreference] = useState({})
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
        setAnswersQuestionnaire((prevState) => ({
            ...prevState,
            [questionNumber]: answerValue,
        }));
    };

    const handleHeightPreferences = (e) => {
        const heightPreferences = e.target.value;
        const selectedHeightPreference = dogHeightPreferences[heightPreferences];
        setAnswersPreference(prevState => ({
            ...prevState,
            height: {min: selectedHeightPreference.min_height_male, max: selectedHeightPreference.max_height_male},
        }));
    }
    const handleWeightPreferences = (e) => {
        const weightPreferences = e.target.value;
        const selectedWeightPreferences = dogWeightPreferences[weightPreferences]
        setAnswersPreference(prevState => ({
            ...prevState,
            weight: {min: selectedWeightPreferences.min_weight_male, max: selectedWeightPreferences.max_weight_male},
        }))
    }


    const handleShowQuestionnairePage = () => {
        const answerPreference = {...answersPreference,};
        console.log(answerPreference)
        setShowPreferencePage(false)
    }

    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                        {showPreferencePage ? (
                            <PreferencePage dogHeightObj={dogHeightPreferences} dogWeightObj={dogWeightPreferences}
                                onOtherQuestions={handleShowQuestionnairePage}
                                            weightPreferences={handleWeightPreferences}
                                            heightPreferences={handleHeightPreferences}/>
                        ) : (
                            <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion}
                                               label={label} answerValue={answerValue} onBack={handlePrevQuestion}
                                               onNext={handleNextQuestion} rangeValue={handleRangeChange}
                                               onSaveAnswerValue={handleSaveAnswer}/>
                        )}
                        <Answers answersQestionnaire={answersQuestionnaire} answersPreference={answersPreference} questionNumber={questionNumber} answerValue={answerValue}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default DogsFinder;