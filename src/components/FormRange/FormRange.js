
import React, { useState } from 'react';

const FormRange = () => {
    const [value, setValue] = useState(0);

    const handleRangeChange = (event) => {
        setValue(event.target.value);
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

        </div>
    );
};

export default FormRange;
