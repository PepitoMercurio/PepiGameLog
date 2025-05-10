import Header from "@/components/Header"
import style from "./style.module.scss"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div className={style.auth}>
                <img
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