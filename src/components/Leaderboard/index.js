import style from "./leaderboard.module.scss";
import Image from "next/image";

const Leaderboard = ({data}) => {
    console.log("LEADER", data);
    
    if (!data || !Array.isArray(data) || data.length === 0) return null;

  const first = data[0] || [];
  const second = data[1] || [];
  const third = data[2] || [];

  return (
    <div className={style.leaderboard}>
      <h2 className={style.leaderboard__title}>Meilleurs Utilisateurs</h2>

      <div className={style.leaderboard__top}>
        {second && (
          <div className={style.leaderboard__top__second}>
            <Image
              className={style.leaderboard__top__second__icon}
              src={second.picture || "/assets/images/empty-profile.png"}
              alt={second.picture || "Utilisateur 2"}
            />
            <div className={style.leaderboard__top__second__podium}>
              <p className={style.leaderboard__top__second__podium__rank}>2</p>
              <p>{second.username}</p>
            </div>
          </div>
        )}

        {first && (
          <div className={style.leaderboard__top__first}>
            <Image
              className={style.leaderboard__top__first__icon}
              src={first.picture || "/assets/images/empty-profile.png"}
              alt={first.picture || "Utilisateur 1"}
            />
            <div className={style.leaderboard__top__first__podium}>
              <p className={style.leaderboard__top__first__podium__rank}>1</p>
              <p>{first.username}</p>
            </div>
          </div>
        )}

        {third && (
          <div className={style.leaderboard__top__third}>
            <Image
              className={style.leaderboard__top__third__icon}
              src={third.picture || "/assets/images/empty-profile.png"}
              alt={third.picture || "Utilisateur 3"}
            />
            <div className={style.leaderboard__top__third__podium}>
              <p className={style.leaderboard__top__third__podium__rank}>3</p>
              <p>{third.username}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Leaderboard;