import React, {useState} from 'react';
import {Button} from "react-bootstrap";


const labelValues = {
    0: "Not important",
    1: "It doesn't fit at all",
    2: "It doesn't quite fit",
    3: "It fits a bit",
    4: "It fits well",
    5: "It fits perfectly!"
}

const FormRange = () => {
    const [value, setValue] = useState(0);
    const [label, setLabel] = useState(labelValues[0])
    const [answerValue, setAnswerValue] = useState(0)

    const handleRangeChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setValue(selectedValue);
        setLabel(labelValues[selectedValue]);
        setAnswerValue(selectedValue);
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
        </div>
    );
};




export default FormRange;
