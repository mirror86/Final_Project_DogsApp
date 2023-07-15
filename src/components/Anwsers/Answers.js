import React from 'react';

const Answers = ({answersQuestionnaire, answersPreference}) => {
    const renderQuestionnaireAnsw = () => {
        if (answersQuestionnaire && typeof answersQuestionnaire === "object") {
            return Object.entries(answersQuestionnaire).map(([key, value]) => (
                <div key={key}>
                    {key}: {value.answerValue}
                </div>
            ));
        } else {
            return null;
        }
    };
    const renderPreferenceAnsw = () => {
        if (answersPreference && typeof answersPreference === "object") {
            return Object.entries(answersPreference).map(([key, value]) => (
                <div key={key}>
                    {key}: {value.answerValue}
                </div>
            ));
        } else {
            return null;
        }
    };
    {renderPreferenceAnsw()}
    {renderQuestionnaireAnsw()}
    return (
        <>
            <h1>One day your dream dog will be waiting for you here</h1>
        </>
    );

};

export default Answers;