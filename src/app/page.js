"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import Header from "@/components/Header";
import MiniGameList from "@/components/MiniGameList";
import StatComponent from "@/components/StatComponent";
import Leaderboard from "@/components/Leaderboard";
import axios from "axios";
import style from "./page.module.scss";

export default function Home() {
  const [userInfos, setUserInfos] = useState({
    email: "",
    username: "",
    id: null,
  });

  const [data, setData] = useState({
    stats: {
      numberGames: 0,
      numberRating: 0,
    },
    lastGames: [],
    topRatedGames: [],
    nextGames: [],
    leaderboard: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const token = Cookies.get("auth_token");

      if (!token) {
        console.log("Aucun token trouvé");
        return;
      }

      try {
        const decoded = jwtDecode(token);
        console.log("Infos du token :", decoded);

        setUserInfos({
          id: decoded.id,
          email: decoded.email,
          username: decoded.username,
        });

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/dashboard/data`);
        setData({
          stats: response.data.stats || { numberGames: 0, numberRating: 0 },
          lastGames: response.data.lastGames || [],
          topRatedGames: response.data.topRatedGames || [],
          nextGames: response.data.nextGames || [],
          leaderboard: response.data.leaderboard || [],
        });

        console.log("Données du dashboard :", response.data);
      } catch (error) {
        console.error("Erreur lors du décodage du token ou de l'appel API :", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={style.home}>
      <Header />

      {userInfos.username && (
        <div className={style.home__welcome}>
          <p className={style.home__welcome__message}>Bienvenue</p>
          <img
            className={style.home__welcome__icon}
            src="/assets/images/empty-profile.png"
            alt="Profil"
          />
          <p className={style.home__welcome__message}>{userInfos.username}</p>
        </div>
      )}

      <div className={style.home__stats}>
        <StatComponent value={data.stats.numberGames} label="Jeux Enregistrés" />
        <StatComponent value={data.stats.numberRating} label="Avis Enregistrés" />
      </div>

      <div className={style.home__leaderboard} >
        <Leaderboard data={data.leaderboard} />
      </div>

      <div className={style.home__lists}>
        <MiniGameList title="Derniers Jeux Ajoutés" data={data.lastGames} />
        <MiniGameList title="Jeux les Mieux Notés" data={data.topRatedGames} />
        <MiniGameList title="Jeux à venir" data={data.nextGames} />
      </div>
    </div>
  );
}
