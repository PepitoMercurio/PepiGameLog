"use client"

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Header from "@/components/Header";
import MiniGameList from "@/components/MiniGameList";
import StatComponent from "@/components/StatComponent";
import Leaderboard from "@/components/Leaderboard";
import style from "./page.module.scss"

export default function Home() {
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
  
      } catch (error) {
        console.error("Token invalide :", error);
      }
    } else {
      console.log("Aucun token trouvé");
      setConnected(false);
    }
  }, []);

  return (
    <div className={style.home}>
      <Header />
      {userInfos.username &&
        <div className={style.home__welcome} >
          <p className={style.home__welcome__message}>
            Bienvenue
          </p>

          <img className={style.home__welcome__icon} src="/assets/images/empty-profile.png"/>
          
          <p className={style.home__welcome__message}>
            {userInfos.username}
          </p>
        </div>
      }

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
