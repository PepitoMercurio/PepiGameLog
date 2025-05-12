'use client';

import { useState } from "react";
import style from "./stars-input.module.scss";
import Image from "next/image";

const StarsInput = () => {
    const [selectedStars, setSelectedStars] = useState(0);

    const handleClick = (index) => {
        setSelectedStars(index + 1);
    };

    return (
        <div className={style.stars}>
            {Array.from({ length: 5 }, (_, index) => (
                <Image
                    key={index}
                    className={` ${selectedStars > index ? style.stars__star__selected : style.stars__star}`}
                    src="/assets/icons/star.svg"
                    alt="star"
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
                <Image
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
