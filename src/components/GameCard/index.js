"use client";

import style from "./game-card.module.scss"
import { useRouter } from "next/navigation";

const GameCard = ({game}) => {
    const router = useRouter();
    
    return (
        <div className={style.game_card} onClick={() => router.push(`/games/${game.id}`)}>
            <img className={style.game_card__image} src={game.cover_url || "/assets/images/empty-game-card.png"} alt="card"/>
            <p className={style.game_card__name}>{game.name}</p>
        </div>
    )
}

export default GameCard