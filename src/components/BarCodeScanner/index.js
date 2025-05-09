"use client";
import { useEffect, useRef } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: videoRef.current,
                constraints: { 
                    width: 1280,
                    height: 720,
                    facingMode: "environment"
                 }
            },
            decoder: {
                readers: ["code_128_reader", "ean_reader", "upc_reader", "ean_8_reader", "upc_e_reader", "code_39_reader"]
            },
            locator: {
                patchSize: "medium",
                halfSample: false
            }
        }, (err) => {
            if (err) {
                console.error("Erreur QuaggaJS :", err);
                return;
            }
            Quagga.start();
        });

        Quagga.onDetected((result) => {
            onDetected(result.codeResult.code);
        });

        return () => { Quagga.stop(); };
    }, [onDetected]);

    return <div ref={videoRef} style={{ width: "100%", height: "100%" }} />;
};

export default BarcodeScanner;
