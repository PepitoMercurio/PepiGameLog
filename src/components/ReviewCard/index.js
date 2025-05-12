import style from "./review.module.scss"
import { StarsViewer } from "../StarsInput";

const ReviewCard = () => {
    return (
        <div className={style.review} >
            <div className={style.review__line} />
            <div className={style.review__identity} >
                <img className={style.review__identity__img} />
                <div className={style.review__identity__box} >
                    <p>John Doe</p>
                    <StarsViewer value={5} />
                </div>
            </div>

            <p className={style.review_text}>Lorem ipsum dolor sit amet. Qui dolor illo est sint mollitia est quasi alias quo veniam deleniti. Aut distinctio nihil ea eveniet suscipit qui velit enim. Vel tempora eius et repellendus nobis eum doloribus officiis. Aut esse vitae qui quas illum 33 dolores dolorem qui dolor beatae qui dolores consectetur ab nisi voluptatem! Et itaque error et excepturi vero aut nihil asperiores est molestiae provident non iure possimus rem velit sint? Id dolorum sapiente id sapiente harum est explicabo quia et voluptatem explicabo est omnis ducimus et mollitia debitis aut accusantium totam. Nam neque reiciendis qui delectus dolor sit possimus molestias ex dignissimos dolor ut perspiciatis eligendi. Et illum nostrum et veritatis recusandae id sunt blanditiis eos consequatur vero ex voluptatem maxime qui doloribus mollitia aut pariatur veniam. Quo iste voluptas id numquam veritatis sit rerum deserunt ut accusantium saepe et dolore corrupti ut repudiandae voluptatum ut omnis nisi.</p>
        </div>
    )
}

export default ReviewCard;