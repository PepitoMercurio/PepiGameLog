"use client"

import style from "./signin.module.scss"
import AuthForm from "@/components/AuthForm"
import { redirect } from "next/navigation";

const SignInPage = () => {
    return (
        <div className={style.signin}>
            <h1>S'Inscrire</h1>

            <AuthForm type={"signin"}/>

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