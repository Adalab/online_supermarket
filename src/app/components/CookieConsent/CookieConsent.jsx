import styles from "./CookieConsent.module.css";

export default function CookieConsent({ onAccept, onReject, onConfigure }) {
    return (
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
                    onClick={onAccept}
                >
                    Aceptar todas
                </button>
                <button className={styles.acceptButton} onClick={onReject}>
                    Rechazar todas
                </button>
                <button className={styles.acceptButton} onClick={onConfigure}>
                    Configurar
                </button>
            </div>
        </div>
    );
}
