import React, {useContext, useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import QuestionnairePage from "../../components/QuestionnairePage/QuestionnairePage";
import PreferencePage from "../../components/PreferencePage/PreferencePage";
import {allQuestions, apiKey, apiUrl, dogHeightPreferences, dogWeightPreferences, labelValues} from "../../data";
import Answers from "../../components/Anwsers/Answers";
import {DogDataContext} from "../../App";
import Results from "../../components/Results/Results";


const DogsFinder = () => {
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
    const [findUrl, setFindUrl] = useState(apiUrl);
    const {setDogData,} = useContext(DogDataContext)
    const [heightSelected, setHeightSelected] = useState(false);
    const [weightSelected, setWeightSelected] = useState(false)
    const [result, setResult] = useState(true)
    const {setIsLoading} = useContext(DogDataContext);
const [answersObject, setAnswersObject] = useState({})
    //navigating the survey
    const handleFinderNextSite = async () => {
        setQuestionNumber(prevState => prevState + 1)
        handleLoadNextQuestion()
        await handleSaveAnswerFromQuestionnaire()
        console.log(answersQuestionnaire)

    }
    const handleFinderPrevSite = () => {
        if (questionNumber <= 1) {
            setShowPreferencePage(true)
        } else {
            setQuestionNumber(prevState => prevState - 1)
            handleLoadPrevQuestion()
        }
        // changing state for alert function
        setWeightSelected(false)
        setHeightSelected(false)

    }

    //matching the label to the value of range
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
            setAnswerValue(0)
            setLabel(labelValues[0]);
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
            setAnswerValue(0)
            setLabel(labelValues[0]);
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
        setHeightSelected(true)
    }
    const handleWeightPreferences = ({key}) => {
        const selectedWeightPreferences = dogWeightPreferences[key];
        setAnswersPreference((prevState) => ({
            ...prevState,
            weight: {
                min: selectedWeightPreferences.weightRange.min_weight_male,
                max: selectedWeightPreferences.weightRange.max_weight_male,
            }

        }))
        setWeightSelected(true)

    }
    const handleHeightChange = (key) => {
        handleHeightPreferences(key)
    }

    const handleWeightChange = (key) => {
        handleWeightPreferences(key)
    }

// alert if the user does not fill out the form
    const handleGoToQuestionnaire = () => {
        if (weightSelected && heightSelected) {
            handleShowQuestionnairePage();
        } else {
            alert("You must tick the answer in both sections");
        }
    }

// creating Obj with answers from Questionnaire
    const handleSaveAnswerFromQuestionnaire = () => {
        // const answerQuestionnaire = {...answersQuestionnaire,}
        setAnswersQuestionnaire((prevState) => ({
            ...prevState,
            [questionNumber]: {answerValue},
        }));

    };

    // // actualization of state answersQuestionnaire
    useEffect(() => {
        handleSaveAnswerFromQuestionnaire();
    }, [answerValue]);

    // creating new URL to API
    const createUrl = () => {
        let updatedUrl = apiUrl;
        let prefix = '';
        if (answersPreference.weight.min > 0) {
            updatedUrl += `${prefix}min_weight=${answersPreference.weight.min}`
            prefix = '&';
            updatedUrl += `${prefix}max_weight=${answersPreference.weight.max}`
        }
        if (answersPreference.height.min > 0) {
            updatedUrl += `${prefix}min_height=${answersPreference.height.min}`
            prefix = '&';
            updatedUrl += `${prefix}max_height=${answersPreference.height.max}`
        }
        setFindUrl(updatedUrl);
    }

    //internal filtering
    const filterFoundDogs = (data) => {
        let answersObj = {};
        Object.entries(answersQuestionnaire).map(([key, value]) => {
            if (value.answerValue > 0 && typeof questionsKeyArray[key - 1] !== "undefined") {
                if (!(questionsKeyArray[key - 1] === 'energy' && value.answerValue === 1)) {
                    answersObj[questionsKeyArray[key - 1]] = value.answerValue;
                }
            }
            return answersObj
        });
        setAnswersObject(answersObj)

//filter conditions
        const newData = Object.values(data).filter((dog) => {
            let dogAccepted = true;
            Object.entries(answersObj).map(([key, value]) => {
                if (key === 'trainability' || key === 'good_with_children' || key === 'good_with_other_dogs') {
                    if (dog[key] < value) {
                        dogAccepted = false;
                    }
                } else {
                    if (dog[key] > value) {
                        dogAccepted = false;
                    }
                }
            });
            return dogAccepted;
        });
        return newData;
    }

    // passing URL to API
    const handleSentAnswersFromQuestionnaire = async () => {
        setIsLoading(true);
        createUrl();
        let apiData = [];
        let findOffset = 0;
        let apiHasData = true;

        const fetchData = async (offset) => {
            try {
                const response = await fetch(`${findUrl}&offset=${offset}`, {
                    method: "GET",
                    headers: {
                        'X-Api-Key': apiKey,
                        'Content-Type': 'application/json'
                    }
                });
                const data = await response.json();

                if (data.length > 0) {
                    const newData = filterFoundDogs(data);
                    apiData.push(...newData);
                    await fetchData(offset + 20);
                } else {
                    setDogData(apiData);
                    setIsLoading(false);
                }
            } catch (err) {
                console.error(err);
                apiHasData = false;
                setIsLoading(false);
            }
        };

        await fetchData(findOffset);
    };
    //passing new URL to API
    // const handleSentAnswersFromQuestionnaire = async() => {
    //     setIsLoading(true)
    //     createUrl()
    //     let apiData = []
    //     let findOffset = 0
    //     let apiHasData = true
    //     while (apiHasData) {
    //         await fetch(`${findUrl}&offset=${findOffset}`, {
    //             method: "GET",
    //             headers: {
    //                 'X-Api-Key': apiKey,
    //                 'Content-Type': 'application/json'
    //             }
    //         })
    //             .then(response => response.json())
    //             .then(data =>  {
    //                 if (data.length > 0) {
    //                     const newData = filterFoundDogs(data);
    //                     newData.forEach(item => {
    //                         apiData.push(item);
    //                     })
    //                     findOffset += 20;
    //                 } else {
    //                     apiHasData = false;
    //                     setDogData(apiData);
    //                     setIsLoading(false);
    //                 }
    //             })
    //             .catch(err => {
    //                 console.error(err);
    //                 apiHasData = false;
    //                 //setIsLoading(false);
    //             })
    //     }
    //
    // }

    // blocking function execution without apiUrl loaded
    useEffect(() => {
        if (findUrl !== apiUrl) {
            handleSentAnswersFromQuestionnaire();
        }
    }, [findUrl]);

    // request for result
    const handleShowResults = () => {
        handleSentAnswersFromQuestionnaire()
        setResult(false)
    }
    return (
        <>
            <Container className="finder__wrapper justify-content-center">
                <Row>
                    <Col>
                        {showPreferencePage ? (
                            <Col>
                                <PreferencePage
                                    onOtherQuestions={handleGoToQuestionnaire}
                                    weightPreferencesMustHave={handleWeightChange}
                                    heightPreferencesMustHave={handleHeightChange}/>
                            </Col>
                        ) : questionNumber <= 7 ? (
                            <Col>
                                <QuestionnairePage questionNumber={questionNumber} currentQuestion={currentQuestion}
                                                   label={label} answerValue={answerValue} onBack={handleFinderPrevSite}
                                                   onNext={handleFinderNextSite} rangeValue={handleRangeChange}
                                                   handleSaveAnswerValue={handleSaveAnswerFromQuestionnaire}/>
                            </Col>
                        ) : result ? (
                            <Answers sentData={handleShowResults}/>
                        ) : (<Results answerValue={answersObject} preferenceValue={answersPreference}/>)}
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </>
    )
}

export default DogsFinder;