"use client";

import React, { useState, useEffect } from "react";
import axios from "axios"; // Assurez-vous d'importer axios
import style from "./style.module.scss";
import Input from "@/components/Input";
import Select from "@/components/Select";
import GameList from "@/components/GameList";

const GamesListPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/games/get`
        );
        setData(response.data.games);  
        console.log("Données de l'API :", response.data.games);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors de l'appel API :", error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  if (error) {
    return <div>Erreur de chargement des jeux</div>;
  }
  

  return (
    <div className={style.games_list}>
      <div className={style.games_list__container}>
        <h1>Liste des jeux</h1>
        <form className={style.games_list__container__filter}>
          <Input
            type={"search"}
            label={"Rechercher"}
            placeholder={"Entrez le nom d'un jeu..."}
          />

          <div className={style.games_list__container__filter__selecter}>
            <Select label={"Trier Par"}>
              <option>TEST</option>
              <option>TEST</option>
            </Select>
          </div>
        </form>

        <GameList data={data} />
      </div>
    </div>
  );
};

export default GamesListPage;
