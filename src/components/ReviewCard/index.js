import style from "./review.module.scss"
import { StarsViewer } from "../StarsInput";

const ReviewCard = ({review}) => {
    return (
        <div className={style.review} >
            <div className={style.review__line} />
            <div className={style.review__identity} >
                <img className={style.review__identity__img} alt="identity"/>
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