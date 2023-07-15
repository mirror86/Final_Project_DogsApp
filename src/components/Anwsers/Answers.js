import React from 'react';

const Answers = ({answersQuestionnaire, answersPreference}) => {
    const renderAnswers = () => {
        if (answersQuestionnaire && typeof answersQuestionnaire === "object") {
            return Object.entries(answersQuestionnaire).map(([key, value]) => (
                <div key={key}>
                    Question {key}: {value.answerValue}
                </div>
            ));
        } else {
            return null;
        }
    };
    return (
        <>
            <div>
                {Object.entries(answersPreference).map(([key, value]) => (
                    <div key={key}>
                        {key}: {value.min} - {value.max}
                    </div>
                ))}
                {renderAnswers()}

            </div>
            </>
    );

};

export default Answers;