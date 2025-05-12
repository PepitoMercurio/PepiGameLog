'use client';

import Header from "@/components/Header";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get("auth_token");
        if (!token) {
            router.push("/login"); // Remplace "/login" par la route que tu veux
        }
    }, []);

    return (
        <>
            <Header />
            {children}
        </>
    );
}
