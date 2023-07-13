import React, {useState} from 'react';

const labelValues = {
    1: "Not important",
    2: "Not very important",
    3: "Moderately important",
    4: "Important",
    5: "Very important"
}

const FormRange = () => {
    const [value, setValue] = useState(0);
    const [label, setLabel] = useState(labelValues[0])
    const handleRangeChange = (event) => {
        const selectedValue = parseInt(event.target.value);
        setValue(selectedValue);
        setLabel(labelValues[selectedValue]);
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
