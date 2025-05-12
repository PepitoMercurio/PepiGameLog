import style from "./leaderboard.module.scss";

const Leaderboard = ({first, second, third}) => {
    return (
        <div className={style.leaderboard}>
            <h2 className={style.leaderboard__title}>Meilleurs Utilisateurs</h2>

            <div className={style.leaderboard__top}>
                <div className={style.leaderboard__top__second}>
                    <img className={style.leaderboard__top__second__icon} src="/assets/images/empty-profile.png" />
                    <div className={style.leaderboard__top__second__podium}>
                        <p className={style.leaderboard__top__third__podium__rank} >2</p>
                        <p>300 Avis</p>
                    </div>
                </div>

                <div className={style.leaderboard__top__first}>
                    <img className={style.leaderboard__top__first__icon} src="/assets/images/empty-profile.png" />
                    <div className={style.leaderboard__top__first__podium}>
                        <p className={style.leaderboard__top__third__podium__rank} >1</p>
                        <p>300 Avis</p>
                    </div>
                </div>
                   
                <div className={style.leaderboard__top__third}>
                    <img className={style.leaderboard__top__third__icon} src="/assets/images/empty-profile.png" />

                    <div className={style.leaderboard__top__third__podium}>
                        <p className={style.leaderboard__top__third__podium__rank} >3</p>
                        <p>300 Avis</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard;