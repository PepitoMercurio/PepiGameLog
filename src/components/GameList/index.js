import style from "./game-list.module.scss";
import GameCard from "../GameCard";

const GameList = () => {
    return (
        <div className={style.game_list}>
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
            <GameCard />
        </div>
    )
}

export default GameList;