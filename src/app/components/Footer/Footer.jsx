import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.linksSection}>
                    <ul className={styles.linksList}>
                        <li><a href="#">Política de Privacidad</a></li>
                        <li><a href="#">Términos y Condiciones</a></li>
                        <li><a href="#">Atención al Cliente</a></li>
                        <li><a href="#">Trabaja con Nosotros</a></li>
                    </ul>
                </div>
                <div className={styles.socialSection}>
                    <p>Síguenos en:</p>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.icon} aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" className={styles.icon} aria-label="Twitter"><FaTwitter /></a>
                        <a href="#" className={styles.icon} aria-label="Instagram"><FaInstagram /></a>
                    </div>
                </div>
                <div className={styles.copySection}>
                    <p className={styles.copy}>&copy; {new Date().getFullYear()} El super del barrio. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
