"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import styles from "./CookieConsent.module.css";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const cookieConsent = Cookies.get("cookieConsent");
        if (!cookieConsent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookieConsent", "true", { expires: 7 });
        setIsVisible(false);
    };

    const handleReject = () => {
        Cookies.set("cookieConsent", "false", { expires: 7 });
        setIsVisible(false);
    };

    const handleConfigure = () => {
        // Logic for configuration (open a modal, redirect, etc.)
        console.log("Configure clicked");
    };

    return isVisible ? (
        <div className={styles.cookieBanner}>
            <p className={styles.text}>
                Utilizamos cookies propias y de terceros, de sesión y persistentes, con la finalidad de hacer que la navegación de los usuarios por nuestra página web sea fácil y segura. A su vez, utilizamos cookies para medir y obtener datos estadísticos de la navegación de los usuarios. Puedes configurar y aceptar el uso de cookies, así como modificar tus opciones de consentimiento en cualquier momento.
                <a href="/" className={styles.link}>
                    Aprende más
                </a>
            </p>
            <div className={styles.buttons}>
                <button
                    className={`${styles.acceptButton} ${styles.acceptAllButton}`}
                    onClick={handleAccept}
                >
                    Aceptar todas
                </button>
                <button className={styles.acceptButton} onClick={handleReject}>
                    Rechazar todas
                </button>
                <button className={styles.acceptButton} onClick={handleConfigure}>
                    Configurar
                </button>
            </div>
        </div>
    ) : null;
}
