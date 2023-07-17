import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";
import {allQuestions, apiKey, apiUrl, dogHeightPreferences, dogWeightPreferences, labelValues} from "../../data";
import Answers from "../../components/Anwsers/Answers";


const DogsFinder = ({setDogData}) => {
    const [questionNumber, setQuestionNumber] = useState(1)
    const [showPreferencePage, setShowPreferencePage] = useState(true)
    const [currentQuestion, setCurrentQuestion] = useState(allQuestions["energy"])
    const questionStringsArray = Object.values(allQuestions);
    const questionsKeyArray = Object.keys(allQuestions);
    const currentIndex = questionStringsArray.indexOf(currentQuestion)
    const [answerValue, setAnswerValue] = useState(0);
    const [label, setLabel] = useState(labelValues[0])
    const [answersQuestionnaire, setAnswersQuestionnaire] = useState({})
    const [answersPreference, setAnswersPreference] = useState({})
    // const [prevAnswerValue, setPrevAnswerValue] = useState(0);
    // const [showAnswers, setShowAnswers] = useState(false)
    const [findUrl, setFindUrl] = useState(apiUrl);

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
        }
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
        }
        // else {
            // setShowAnswers(true)
        // }
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
            height: {
                min: selectedHeightPreference.heightRange.min_height_male,
                max: selectedHeightPreference.heightRange.max_height_male
            },
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
        // setPrevAnswerValue(answerValue);
    };
    // // actualization of state answersQuestionnaire
    useEffect(() => {
        handleSaveAnswerFromQuestionnaire();
    }, [questionNumber]);

    // creating new URL to API
    const createUrl = () => {
        let updatedUrl = apiUrl;
        let prefix = '';
        Object.entries(answersQuestionnaire).map(([key, value]) => {
            if (value.answerValue > 0 && typeof questionsKeyArray[key-1] !== "undefined") {
                updatedUrl += `${prefix}${questionsKeyArray[key-1]}=${value.answerValue}`;
                prefix = '&';
            }
        });
        if (answersPreference.weight.min > 0) {
            updatedUrl+= `${prefix}min_weight=${answersPreference.weight.min}`
            prefix = '&';
            updatedUrl+= `${prefix}max_weight=${answersPreference.weight.max}`
        }
        if (answersPreference.height.min > 0){
            updatedUrl+= `${prefix}min_height=${answersPreference.height.min}`
            prefix = '&';
            updatedUrl+= `${prefix}max_height=${answersPreference.height.max}`
        }
        console.log(updatedUrl);
        setFindUrl(updatedUrl);
    }

    //passing new URL to API
    const handleSentAnswersFromQuestionnaire = () => {
        createUrl()
        console.log(findUrl)
        fetch(`${findUrl}`, {
            method: "GET",
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setDogData(data))
            .catch(err => console.error(err))
    }

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
                        ) : questionNumber <= 7 ? (
                            <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion}
                                               label={label} answerValue={answerValue} onBack={handleFinderPrevSite}
                                               onNext={handleFinderNextSite} rangeValue={handleRangeChange}
                                               onSaveAnswerValue={handleSaveAnswerFromQuestionnaire}/>
                        ) : (
                            <Answers sentData={handleSentAnswersFromQuestionnaire}/>
                        )}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default DogsFinder;