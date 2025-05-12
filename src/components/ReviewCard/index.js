import style from "./review.module.scss"
import { StarsViewer } from "../StarsInput";
import Image from "next/image";

const ReviewCard = ({review}) => {
    return (
        <div className={style.review} >
            <div className={style.review__line} />
            <div className={style.review__identity} >
                <Image className={style.review__identity__img} alt="identity"/>
                <div className={style.review__identity__box} >
                    <p>{review.user.username}</p>
                    <StarsViewer value={review.rate} />
                </div>
            </div>

            <p className={style.review_text}>{review.comment}</p>
        </div>
    )
}

export default ReviewCard;