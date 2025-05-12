import {StarsInput, StarsViewer} from "@/components/StarsInput";
import style from "./style.module.scss"
import BarChart from "@/components/BarChart";
import Input from "@/components/Input";
import Button from "@/components/Button";

export const metadata = {
  title: "[NAME] - PepiGamesLog",
  description: "Application Web de gestion de bibliothèque de jeu",
};

const GamePage = async ({ params }) => { 
    const { id } = (await params);
    return (
        <div className={style.game}>
            <div className={style.game__banner}>
                <img className={style.game__banner__cover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemQnXFrbtqxnRAhY9jrdG2k9ld78DklQUrQ&s" />

                <div className={style.game__banner__infos}>
                    <h1 className={style.game__banner__infos__title}>Until Then</h1>
                    <p className={style.game__banner__dev}>Polychroma Games</p>
                    <p className={style.game__banner__date}>15/06/2024</p>
                </div>

                <div className={style.game__banner__rating}>
                    <h2>4.5⭐</h2>
                    <BarChart />
                    <p>450 Avis</p>
                </div>
            </div>
            
            <div className={style.game__description}>
                <p className={style.game__description__storyline}>
                    Lorem ipsum dolor sit amet. Qui dolor illo est sint mollitia est quasi alias quo veniam deleniti. Aut distinctio nihil ea eveniet suscipit qui velit enim. Vel tempora eius et repellendus nobis eum doloribus officiis. Aut esse vitae qui quas illum 33 dolores dolorem qui dolor beatae qui dolores consectetur ab nisi voluptatem!
Et itaque error et excepturi vero aut nihil asperiores est molestiae provident non iure possimus rem velit sint? Id dolorum sapiente id sapiente harum est explicabo quia et voluptatem explicabo est omnis ducimus et mollitia debitis aut accusantium totam.
Nam neque reiciendis qui delectus dolor sit possimus molestias ex dignissimos dolor ut perspiciatis eligendi. Et illum nostrum et veritatis recusandae id sunt blanditiis eos consequatur vero ex voluptatem maxime qui doloribus mollitia aut pariatur veniam. Quo iste voluptas id numquam veritatis sit rerum deserunt ut accusantium saepe et dolore corrupti ut repudiandae voluptatum ut omnis nisi.
                </p>

                <p className={style.game__description__summary}>
                orem ipsum dolor sit amet. Qui dolor illo est sint mollitia est quasi alias quo veniam deleniti. Aut distinctio nihil ea eveniet suscipit qui velit enim. Vel tempora eius et repellendus nobis eum doloribus officiis. Aut esse vitae qui quas illum 33 dolores dolorem qui dolor beatae qui dolores consectetur ab nisi voluptatem!
Et itaque error et excepturi vero aut nihil asperiores est molestiae provident non iure possimus rem velit sint? Id dolorum sapiente id sapiente harum est explicabo quia et voluptatem explicabo est omnis ducimus et mollitia debitis aut accusantium totam.
Nam neque reiciendis qui delectus dolor sit possimus molestias ex dignissimos dolor ut perspiciatis eligendi. Et illum nostrum et veritatis recusandae id sunt blanditiis eos consequatur vero ex voluptatem maxime qui doloribus mollitia aut pariatur veniam. Quo iste voluptas id numquam veritatis sit rerum deserunt ut accusantium saepe et dolore corrupti ut repudiandae voluptatum ut omnis nisi.
                </p>
            </div>

            <div className={style.game__ratings}>
                <div className={style.bigline}/>
                <form className={style.game__ratings__form}>
                    <StarsInput />
                    <Input type="text" placeholder={"Entrez votre avis... (optionnel)"} />
                    <Button text={"Envoyer"}/>
                </form>
            </div>
        </div>
    )
}

export default GamePage;