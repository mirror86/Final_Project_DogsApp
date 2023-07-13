import React, {useState} from 'react';


const labelValues = {
    0: "Not important",
    1: "Not very important",
    2: "Moderately important",
    3: "Important",
    4: "Very important",
    5: "MUST HAVE!"
}

const FormRange = () => {
    const [value, setValue] = useState(0);
    const [label, setLabel] = useState(labelValues[0])
    const [answerValue, setAnswerValue] = useState(0)

    const handleRangeChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setValue(selectedValue);
        setLabel(labelValues[selectedValue]);
        setAnswerValue(prevState => prevState + 1)

    };
    return (
        <div>
            <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={value}
                onChange={handleRangeChange}
            />
            <p>{label}</p>
            <p>{answerValue}</p>
        </div>
    );
};

export default FormRange;
