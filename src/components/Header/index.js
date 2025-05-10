'use client';

import styles from "./header.module.scss";
import { useState } from "react";

const Header = () => {
    const [connected, setConnected] = useState(true)

    return (
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <img src="/assets/images/pepigamelog-logo.png"/>
                <p className={styles.header__logo__text}>PepiGamesLog</p>
            </div>

            {connected &&
                <div className={styles.header__searchbar}>
                    <input 
                        className={styles.header__searchbar__input}
                        type="text"
                        placeholder="Rechercher un jeu..."
                    />
                    <button 
                        className={styles.header__searchbar__button}
                        onClick={() => console.log("OK")}
                    >
                        <img className={styles.header__searchbar__button__icon} src="/assets/icons/search.svg" />
                    </button>
                </div>
            }

            {connected ?
                <div className={styles.header__buttons}>
                    <img className={styles.header__buttons__barcode} src={"/assets/icons/barcode.svg"} alt="Scan de Code Barre" />
                    <img className={styles.header__buttons__picture} src={"https://media.discordapp.net/attachments/1050521750233940028/1370774752150687865/pepito_pp_2024.png?ex=6820b8f8&is=681f6778&hm=3369cd5c73bd53912d8b88f79c55faeadca35d475048b019444ba842023308e9&=&format=webp&quality=lossless&width=930&height=930"} alt="Profil Picture" />
                </div>
            :
                <div className={styles.header__buttons}>
                    <p>Connexion</p>
                    <p>Inscription</p>
                </div>
            }
            
        </header>
    )
}

export default Header;
