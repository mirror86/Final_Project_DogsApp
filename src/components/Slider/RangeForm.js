// import React, {useState} from "react";
// const Slider = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//
//     const totalSlides = 6;
//
//     const updateSlider = (slide) => {
//         setCurrentSlide(slide);
//     };
//
//     return (
//         <div className="slider-container">
//             <div className="slider-dots">
//                 {[...Array(totalSlides)].map((_, index) => (
//                     <span
//                         key={index}
//                         className={`slider-dot ${currentSlide === index ? "active" : ""}`}
//                         onClick={() => updateSlider(index)}
//                     ></span>
//                 ))}
//             </div>
//             <div className="slider-value">Tekst dla kropki {currentSlide}</div>
//         </div>
//     );
// };
//
// export default Slider;
import React, { useState } from 'react';

const RangeForm = () => {
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

            <div>
                {Array.from({ length: 6 }).map((el, index) => (
                    <span key={index}>{el}</span>
                ))}
            </div>
        </div>
    );
};

export default RangeForm;
