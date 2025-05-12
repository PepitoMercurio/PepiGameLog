'use client';

import style from "./stars-input.module.scss";

const StarsInput = ({ value = 0, onChange }) => {
    const handleClick = (index) => {
        if (onChange) {
            onChange(index + 1); // 1-based rating
        }
    };

    return (
        <div className={style.stars}>
            {Array.from({ length: 5 }, (_, index) => (
                <img
                    key={index}
                    className={`${style.stars__star} ${value > index ? style.stars__star__selected : ""}`}
                    src="/assets/icons/star.svg"
                    alt={`${index + 1} étoile${index > 0 ? "s" : ""}`}
                    onClick={() => handleClick(index)}
                />
            ))}
        </div>
    );
};

const StarsViewer = ({value}) => {
    return (
        <div className={style.stars}>
            {Array.from({ length: 5 }, (_, index) => (
                <img
                    key={index}
                    className={` ${value > index ? style.stars__star__selected : style.stars__star}`}
                    src="/assets/icons/star.svg"
                    alt="star"
                />
            ))}
        </div>
    )
}

export {
    StarsInput,
    StarsViewer
};
