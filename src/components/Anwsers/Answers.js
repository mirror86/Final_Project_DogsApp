import React, {useState} from 'react';

const Answers = ({answersValue}) => {

    return (
        <div>
            {answersValue.map((answer, index) => (
                <div key={index}>
                    Question {index + 1}: {answer}
                </div>
            ))}
        </div>
    );
};

export default Answers;