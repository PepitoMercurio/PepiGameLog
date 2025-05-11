import { redirect } from "next/navigation";
import Header from "@/components/Header";
import MiniGameList from "@/components/MiniGameList";
import StatComponent from "@/components/StatComponent";
import Leaderboard from "@/components/Leaderboard";
import style from "./page.module.scss"

export default function Home() {
  // redirect("/auth/login");
  return (
    <div className={style.home}>
      <Header />
      <div className={style.home__welcome} >
        <p className={style.home__welcome__message}>
          Bienvenue
        </p>

        <img className={style.home__welcome__icon} src="https://media.discordapp.net/attachments/1050521750233940028/1370774752150687865/pepito_pp_2024.png?ex=6820b8f8&is=681f6778&hm=3369cd5c73bd53912d8b88f79c55faeadca35d475048b019444ba842023308e9&=&format=webp&quality=lossless&width=930&height=930"/>
        
        <p className={style.home__welcome__message}>
          John Doe
        </p>
      </div>

      <div className={style.home__stats}>
        <StatComponent value={500} label={"Jeux Enregistrés"} />
        <StatComponent value={1500} label={"Avis Enregistrés"} />
      </div>

      <div className={style.home__leaderboard} >
        <Leaderboard />
      </div>

      <div className={style.home__lists} >
        <MiniGameList title={"Derniers Jeux Ajoutés"} />
        <MiniGameList title={"Jeux les Mieux Notés"} />
        <MiniGameList title={"Jeux à venir"} />
      </div>
    </div>
  )
}
