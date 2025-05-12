import style from "./profile.module.scss"
import MiniGameList from "@/components/MiniGameList";
import StatComponent from "@/components/StatComponent";

export const metadata = {
  title: "[NAME] - PepiGamesLog",
  description: "Application Web de gestion de bibliothèque de jeu",
};

const ProfilPage = async ({ params }) => { 
    const { id } = (await params);
    return (
        <div className={style.profile}>
            <div className={style.profile__user}>
                <div className={style.profile__user__identity}>
                    <img className={style.profile__user__identity__profile_picture} src="/assets/images/empty-profile.png" />
                    <h1 className={style.profile__user__identity__name}>John Doe</h1>
                </div>
                <div className={style.profile__user__stats}>
                    <StatComponent value={4} label={"Jeux dans la Bibliothèque"} />
                    <StatComponent value={4} label={"Jeux notés"} />
                    <StatComponent value={4} label={"Jeux dans la liste des souhaits"} />
                </div>
            </div>

            <div className={style.profile__lists}>
                    <MiniGameList title={"Jeux les mieux notés"} />
                    <MiniGameList title={"Jeux récement ajoutés"} />
                    <MiniGameList title={"Liste des souhais"} />
                </div>
        </div>
    )
}

export default ProfilPage;