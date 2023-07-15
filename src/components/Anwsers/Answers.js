import React from 'react';

const Answers = ({answers, questionNumber, answerValue}) => {

    return (
        <div>
            {Object.entries(answers).map(([question, answer]) => (
                <div key={question}>
                    Question {question}: {answer}
                </div>
            ))}
        </div>
    );

};

export default Answers;