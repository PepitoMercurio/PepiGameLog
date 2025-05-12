"use client"

import React, { useState } from "react";
import style from "./signin.module.scss"
import AuthForm from "@/components/AuthForm"
import axios from "axios";
import { useRouter } from "next/navigation";

const SignInPage = () => {
    const router = useRouter()

    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
    });


     const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleClick = async (e) => {
        try {
            e.preventDefault();
            console.log(data);

            if (data.password !== data.confirmPassword) {
                throw new Error("Les mots de passe ne correspondent pas.");
            }

            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
                email: data.email,
                password: data.password,
                username: data.username,
                provider: 'local'
            });
            
            if (response.status === 201) {
                router.push("/auth/login");
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className={style.signin}>
            <h1>S'Inscrire</h1>

            <AuthForm type={"signin"} data={data} handleChange={handleChange} onSubmit={handleClick} />

            <div className={style.signin__switch}>
                <p>Déjà l'un des nôtres ?</p>
                <p 
                    className={style.signin__switch__switcher}
                    onClick={() => {redirect("/auth/login")}}
                >
                    Connectez-vous
                </p>
            </div>
        </div>
    )
}

export default SignInPage;