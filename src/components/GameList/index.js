import style from "./game-list.module.scss";
import GameCard from "../GameCard";

const GameList = ({ data }) => {
  const isEmpty = !data || !Array.isArray(data) || data.length === 0;

  return (
    <div className={style.game_list}>
      {isEmpty ? (
        <p className={style.game_list__empty}>Aucun jeu trouvé.</p>
      ) : (
        data.map((game) => {
          return <GameCard key={game.id} game={game} />;
        })
      )}
    </div>
  );
};

export default GameList;
