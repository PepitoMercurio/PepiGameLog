"use client"

import style from "./style.module.scss"
import GameForm from "@/components/GameForm";
import React, {useState} from "react";
import axios from "axios";

const AddGamePage = () => {
    const [formData, setFormData] = useState({
        name: "",
        cover_url: "",
        storyline: "",
        summary: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/games/add`, formData);
    
        if (response.status === 200) {
            router.push("/games");
        }
    }

    return (
        <div className={style.add_game}>
            <GameForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
    );
}

export default AddGamePage