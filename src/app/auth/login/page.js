"use client"

import React, { useState } from "react";
import axios from "axios";
import style from "./login.module.scss"
import AuthForm from "@/components/AuthForm"
import Cookies from 'js-cookie';
import { useRouter } from "next/navigation";

const LoginPage = () => {
    const router = useRouter()

    const [data, setData] = useState({
        email: "",
        password: "",
        username: "",
        confirmPassword: "",
        provider: 'local'
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
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
                email: data.email,
                password: data.password,
                username: data.username,
                provider: data.provider
            });
            
            if (response.status === 200) {
                Cookies.set('auth_token', response.data.token, { expires: 7, secure: true }); 
                router.push("/");
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className={style.login}>
            <h1>Se Connecter</h1>
            <AuthForm type={"login"} data={data} handleChange={handleChange} onSubmit={handleClick} />
            <div className={style.login__switch}>
                <p>Pas de compte ?</p>
                <p 
                    className={style.login__switch__switcher}
                    onClick={() => {router.push("/auth/signin")}}
                >
                    Inscrivez-vous
                </p>
            </div>
        </div>
    )
}

export default LoginPage