import style from "./game-card.module.scss"

const GameCard = () => {
    return (
        <div className={style.game_card}>
            <img className={style.game_card__image} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemQnXFrbtqxnRAhY9jrdG2k9ld78DklQUrQ&s" />
            <p className={style.game_card__name}>Until Then</p>
        </div>
    )
}

export default GameCard