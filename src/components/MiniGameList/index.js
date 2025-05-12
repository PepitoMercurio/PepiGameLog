"use client";

import style from "./mini-game-list.module.scss";
import { useRouter } from "next/navigation";
import GameCard from "../GameCard";


const MiniGameList = ({ title, data }) => {
  const router = useRouter()
  if (!data || !Array.isArray(data) || data.length === 0) return null;

  return (
    <div className={style.list}>
      <div className={style.list__options}>
        <p>{title}</p>
        <p className={style.list__seeMore} onClick={() => router.push(`/games`)}>Voir plus</p>
      </div>

      <div className={style.list__games}>
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default MiniGameList;
