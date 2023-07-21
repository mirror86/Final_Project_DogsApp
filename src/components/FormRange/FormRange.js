import React from 'react';

const FormRange = ({rangeValue, value, label}) => {
    return (
        <div className=" d-flex justify-content-center flex-column ms-5 me-5 p-3 p-md-4">
            <input
                type="range"
                min={0}
                max={5}
                step={1}
                value={value}
                onChange={rangeValue}
            />
            <p className="text-center">{label}</p>
        </div>
    );
};

export default FormRange;
