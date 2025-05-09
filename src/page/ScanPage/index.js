"use client";
import { useState } from "react";
import BarcodeScanner from "@/components/BarCodeScanner";

export default function Scanner() {
    const [code, setCode] = useState("");

    return (
        <div>
            <h1>Scanner de Code-Barres</h1>
            <BarcodeScanner onDetected={(code) => { 
                setCode(code);
                alert("Code-barres détecté : " + code);
            }} />
            {code && <p>Code détecté : {code}</p>}
        </div>
    );
}
