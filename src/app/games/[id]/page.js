"use client";

import {StarsInput, StarsViewer} from "@/components/StarsInput";
import style from "./style.module.scss"
import BarChart from "@/components/BarChart";
import Input from "@/components/Input";
import Button from "@/components/Button";
import ReviewCard from "@/components/ReviewCard";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import React, {useState, useEffect} from "react";
import axios from "axios";

const GamePage = ({ params }) => { 
    const { id } = React.use(params);

    const [userInfos, setUserInfos] = useState({
        email: "",
        username: "",
        id: null,
    });

    const [data, setData] = useState({
        id: null,
        name: "",
        cover_url: "",
        created_at: "",
        storyline: "",
        summary: "",
        rating: [{
            rate: null,
            comment: "",
            user: {
                id: null,
                username : "",
            }
        }]
    })

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
                    `${process.env.NEXT_PUBLIC_API_URL}/games/get/${id}`
                );

                console.log("Données de l'API :", response.data); // Ajoutez ceci pour vérifier la réponse
                setData({
                    id: response.data.id,
                    name: response.data.name,
                    cover_url: response.data.cover_url,
                    created_at: response.data.created_at,
                    storyline: response.data.storyline,
                    summary: response.data.summary,
                    rating: response.data.rating || []
                });
            } catch (error) {
                console.error("Erreur lors de l'appel API :", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className={style.game}>
            <div className={style.game__banner}>
                <img className={style.game__banner__cover} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTemQnXFrbtqxnRAhY9jrdG2k9ld78DklQUrQ&s" />

                <div className={style.game__banner__infos}>
                    <h1 className={style.game__banner__infos__title}>{data.name}</h1>
                    {/* <p className={style.game__banner__dev}>Polychroma Games</p> */}
                    <p className={style.game__banner__date}>{data.created_at}</p>
                </div>
                {
                    data.id &&
                    <div className={style.game__banner__rating}>
                        <h2>4.5⭐</h2>
                        <BarChart game_id={data.id} />
                        <p>450 Avis</p>
                    </div>
                }
                
            </div>
            
            <div className={style.game__description}>
                <p className={style.game__description__storyline}>{data.storyline}</p>

                <p className={style.game__description__summary}>{data.summary}</p>
            </div>

            <div className={style.game__ratings}>
                <div className={style.bigline}/>
                <h2 className={style.game__ratings__title}>Notes</h2>
                <form className={style.game__ratings__form}>
                    <StarsInput />
                    <Input type="text" placeholder={"Entrez votre avis... (optionnel)"} />
                    <Button text={"Envoyer"}/>
                </form>
                <div className={style.game__ratings__list} >
                    {data.rating.length > 0 ? (
                        data.rating.map((review, index) => (
                            <ReviewCard key={index} review={review} />
                        ))
                    ) : (
                        <p>Aucun avis pour ce jeu pour le moment.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default GamePage;