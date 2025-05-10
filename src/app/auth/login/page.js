"use client"

import style from "./login.module.scss"
import AuthForm from "@/components/AuthForm"
import { redirect } from "next/navigation";

const LoginPage = () => {
    return (
        <div className={style.login}>
            <h1>Se Connecter</h1>
            <AuthForm />
            <div className={style.login__switch}>
                <p>Pas de compte ?</p>
                <p 
                    className={style.login__switch__switcher}
                    onClick={() => {redirect("/auth/signin")}}
                >
                    Inscrivez-vous
                </p>
            </div>
        </div>
    )
}

export default LoginPage