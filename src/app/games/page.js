import Header from "@/components/Header"
import style from "./style.module.scss"
import Input from "@/components/Input"
import Select from "@/components/Select"
import GameList from "@/components/GameList"

const GamesListPage = () => {
    return (
        <div className={style.games_list} >
            <div className={style.games_list__container}>
                <h1>Bibliothèque de John Doe</h1>
                <form className={style.games_list__container__filter}>
                    <Input
                        type={"search"}
                        label={"Rechercher"}
                        placeholder={"Entrez le nom d'un jeu..."}
                    />

                    <div className={style.games_list__container__filter__selecter} >
                        <Select label={"Trier Par"}>
                            <option>TEST</option>
                            <option>TEST</option>
                        </Select>
                    </div>
                </form>
                <GameList />
            </div>
        </div>
    )
}

export default GamesListPage;