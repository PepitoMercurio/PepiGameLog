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
                    <img className={style.profile__user__identity__profile_picture} src="https://media.discordapp.net/attachments/1050521750233940028/1370774752150687865/pepito_pp_2024.png?ex=6820b8f8&is=681f6778&hm=3369cd5c73bd53912d8b88f79c55faeadca35d475048b019444ba842023308e9&=&format=webp&quality=lossless&width=930&height=930"/>
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