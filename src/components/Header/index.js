'use client';

import styles from "./header.module.scss";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { jwtDecode } from 'jwt-decode';

const Header = () => {
    const router = useRouter();

    const [connected, setConnected] = useState(false);
    const [userInfos, setUserInfos] = useState({
        email: "",
        username: "",
        id: null
    });

    useEffect(() => {
        const token = Cookies.get('auth_token');

        if (token) {
            try {
                const decoded = jwtDecode(token);
                console.log("Infos du token :", decoded);

                setUserInfos({
                    id: decoded.id,
                    email: decoded.email,
                    username: decoded.username
                });

                setConnected(true);
            } catch (error) {
                console.error("Token invalide :", error);
                setConnected(false);
            }
        } else {
            console.log("Aucun token trouvé");
            setConnected(false);
        }
    }, []);

    const handleDisconnection = () => {
        Cookies.remove('auth_token');
        setConnected(false);
        setUserInfos({ email: "", username: "", id: null });
        router.push("/auth/login");
    };

    return (
        <header className={styles.header}>
            <div className={styles.header__logo} onClick={() => router.push("/")}>
                <img src="/assets/images/pepigamelog-logo.png" alt="logo" />
                <p className={styles.header__logo__text}>PepiGamesLog</p>
            </div>

            {connected ? (
                <div className={styles.header__buttons}>
                    <p onClick={() => router.push("/games/add")}>+</p>
                    <img 
                        className={styles.header__buttons__picture} 
                        src={"/assets/images/empty-profile.png"} 
                        alt="Profil Picture"  
                        onClick={() => router.push(`/profile/${userInfos.id}`)} 
                    />
                    <img 
                        className={styles.header__buttons__barcode} 
                        src={"/assets/icons/disconnect.svg"} 
                        alt="Déconnexion" 
                        onClick={handleDisconnection} 
                    />
                </div>
            ) : (
                <div className={styles.header__buttons}>
                    <p onClick={() => router.push("/auth/login")}>Connexion</p>
                    <p onClick={() => router.push("/auth/signin")}>Inscription</p>
                </div>
            )}
        </header>
    );
};

export default Header;
