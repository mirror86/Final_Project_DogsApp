import React, {useEffect, useState} from 'react';
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
    const [prevAnswerValue, setPrevAnswerValue] = useState(0);
const [showAnswers, setShowAnswers] = useState(false)
    //navigating the survey
    const handleFinderNextSite = () => {
        setQuestionNumber(prevState => prevState + 1)
        handleLoadNextQuestion()
        handleSaveAnswerFromQuestionnaire()
        console.log(answersQuestionnaire)


    }
    const handleFinderPrevSite = () => {
        if (questionNumber <= 1) {
            setShowPreferencePage(true)

        } else if (questionNumber > 7) {
            setShowAnswers(true)

        }// jeśli to ostatnia strona to zmien stan buttona na Wynik

        else {
            setQuestionNumber(prevState => prevState - 1)
            handleLoadPrevQuestion()
        }

    }

    //RangeForm value matched label
    const handleRangeChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setAnswerValue(selectedValue);
        setLabel(labelValues[selectedValue]);

    };


    //loading next question from Obj allQuestions
    const handleLoadNextQuestion = () => {
        if (currentIndex < questionStringsArray.length - 1) {
            const anotherQuestion = questionStringsArray[currentIndex + 1];
            setCurrentQuestion(anotherQuestion)
        } else {
            setShowAnswers(true)
        }
    }

    //loading previous question from Obj allQuestions
    const handleLoadPrevQuestion = () => {
        if (currentIndex > 0) {
            const anotherQuestion = questionStringsArray[currentIndex - 1];
            setCurrentQuestion(anotherQuestion)
        }
    }

    // creating Obj with answers from Preference
    const handleShowQuestionnairePage = () => {
        const answerPreference = {...answersPreference,};
        console.log(answerPreference)
        setShowPreferencePage(false)
    }
    const handleHeightPreferences = ({key}) => {
        const selectedHeightPreference = dogHeightPreferences[key];
        setAnswersPreference(prevState => ({
            ...prevState,
            height: {min: selectedHeightPreference.heightRange.min_height_male, max: selectedHeightPreference.heightRange.max_height_male},
        }));
    }
    const handleWeightPreferences = (key) => {
        const selectedWeightPreferences = dogWeightPreferences[key];
        setAnswersPreference((prevState) => ({
            ...prevState,
            weight: {
                min: selectedWeightPreferences.weightRange.min_weight_male,
                max: selectedWeightPreferences.weightRange.max_weight_male,
            }

        }))

    }

// creating Obj with answers from Questionnaire
    const handleSaveAnswerFromQuestionnaire = () => {
        // const answerQuestionnaire = {...answersQuestionnaire,}
        setAnswersQuestionnaire((prevState) => ({
            ...prevState,
            [questionNumber]: {answerValue},
        }));
        setPrevAnswerValue(answerValue);
    };
    // // actualization of state answersQuestionnaire
    useEffect(() => {
        handleSaveAnswerFromQuestionnaire();
    }, [questionNumber]);

    return (
        <>
            <Container fluid className="finder__container h-75  main shadow-lg d-flex justify-content-center bg-white">
                <Row className="text-center justify-content-center mt-auto mb-auto mx-auto p-2 h-50 w-50">
                    <Col xs={{span: 6, offset: 3}} className="d-flex flex-column justify-content-center">
                        {showPreferencePage ? (
                            <PreferencePage
                                            onOtherQuestions={handleShowQuestionnairePage}
                                            weightPreferences={handleWeightPreferences}
                                            heightPreferences={handleHeightPreferences}/>
                        ) :  questionNumber <=7 ?(
                            <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion}
                                               label={label} answerValue={answerValue} onBack={handleFinderPrevSite}
                                               onNext={handleFinderNextSite} rangeValue={handleRangeChange}
                                               onSaveAnswerValue={handleSaveAnswerFromQuestionnaire}/>
                        ): (
                            <Answers answersQestionnaire={answersQuestionnaire} answersPreference={answersPreference} questionNumber={questionNumber} answerValue={answerValue}/>
                            )}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default DogsFinder;