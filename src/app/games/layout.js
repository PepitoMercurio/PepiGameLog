import Header from "@/components/Header"
import style from "./style.module.scss"

export default function Layout({ children }) {
    return (
        <>
        <Header/>
        {children}
        </>
    )
}