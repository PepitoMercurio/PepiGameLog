import Header from "@/components/Header"
import style from "./style.module.scss"
import Image from "next/image";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={style.auth}>
                <Image
                    src="/assets/images/pepigamelog-auth.png"
                    alt="Auth Image"
                    className={style.auth__image}
                />
                <div className={style.auth__box}>
                    {children}
                </div>
            </div>
        </>
    )
}