import style from "./mini-game-list.module.scss";
import GameCard from "../GameCard";

const MiniGameList = ({title}) => {
    return (
        <div className={style.list}>
            <div className={style.list__options}>
                <p>{title}</p>
                <p>Voir plus</p>
            </div>

            <div className={style.list__games}>
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
                <GameCard />
            </div>
        </div>
    )
}

export default MiniGameList