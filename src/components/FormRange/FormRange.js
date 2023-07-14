import React from 'react';

const FormRange = ({rangeValue, value, label}) => {

    return (
        <div>
            <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={value}
                onChange={rangeValue}
            />
            <p>{label}</p>
        </div>
    );
};




export default FormRange;
