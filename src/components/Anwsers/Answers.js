import React from 'react';

const Answers = ({answersQuestionnaire, answersPreference, questionNumber, answerValue}) => {
    const renderAnswers = () => {
        if (answersQuestionnaire && typeof answersQuestionnaire === "object") {
            return Object.entries(answersQuestionnaire).map(([key, value]) => (
                <div key={key}>
                    Question {key}: {value}
                </div>
            ));
        } else {
            return null;
        }
    };
    return (
        <>

            <div>
                {renderAnswers()}
                {Object.entries(answersPreference).map(([key, value]) => (
                    <div key={key}>
                        {key}: {value.min} - {value.max}
                    </div>
                ))}
                <div>
                    Question {questionNumber}: {answerValue}
                </div>
            </div>
            </>
    );

};

export default Answers;