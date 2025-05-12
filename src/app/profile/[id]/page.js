"use client";

import style from "./profile.module.scss";
import React, { useState, useEffect } from "react";
import MiniGameList from "@/components/MiniGameList";
import StatComponent from "@/components/StatComponent";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import Image from "next/image";

const ProfilPage = ({ params }) => {
  const { id } = React.use(params);

  const router = useRouter();

  const [userInfos, setUserInfos] = useState({
    email: "",
    username: "",
    id: null,
  });

  const [data, setData] = useState({
    stats: {
      numberLibrary: 0,
      numberRating: 0,
      numberWish: 0,
    },
    userGames: [],
    userRatings: [],
    userWishlist: [],
  });

    const handleDownload = async () => {
        try {
            const url = `${process.env.NEXT_PUBLIC_API_URL}/library/user/${id}/csv`;
            
            if (!url) {
                throw new Error('URL invalide');
            }

            router.push(url);
        } catch (error) {
            console.error("Erreur lors de l'appel API :", error);
        }
    }

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

            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_API_URL}/dashboard/user/${id}`
            );

            console.log("Données de l'API :", response.data); // Ajoutez ceci pour vérifier la réponse
            setData({
                stats: response.data.stats || { numberGames: 0, numberRating: 0 },
                userGames: response.data.userGames || [],
                userRatings: response.data.userRatings || [],
                userWishlist: response.data.userWishlist || [],
            });
        } catch (error) {
            console.error("Erreur lors de l'appel API :", error);
        }
    };

    fetchData();
    }, [id]);


  return (
    <div className={style.profile}>
      <div className={style.profile__user}>
        <div className={style.profile__user__identity}>
          <Image className={style.profile__user__identity__profile_picture} src="/assets/images/empty-profile.png" alt="profile"/>
          <h1 className={style.profile__user__identity__name}>{userInfos.username}</h1>
        </div>
        <div className={style.profile__user__stats}>
          <StatComponent value={data.stats.numberLibrary} label={"Jeux dans la Bibliothèque"} />
          <StatComponent value={data.stats.numberRating} label={"Jeux notés"} />
          <StatComponent value={data.stats.numberWish} label={"Jeux dans la liste des souhaits"} />
        </div>
      </div>

      { 
        id === userInfos.id
      &&
        <div className={style.profile__button}>
            <button 
                className={style.profile__button__csv}
                onClick={handleDownload}
            >
                Exporter en CSV
            </button>
        </div>
      }

      <div className={style.profile__lists}>
        <MiniGameList title={"Jeux les mieux notés"} data={data.userRatings} />
        <MiniGameList title={"Jeux récement ajoutés"} data={data.userGames} />
        <MiniGameList title={"Liste des souhaits"} data={data.userWishlist} />
      </div>
    </div>
  );
};

export default ProfilPage;
