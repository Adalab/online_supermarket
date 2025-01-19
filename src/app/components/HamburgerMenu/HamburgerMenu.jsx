import Link from "next/link";
import { useState } from 'react';
import styles from './HamburgerMenu.module.css';

export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.menuContainer}>
            <div
                className={`${styles.hamburgerMenu} ${menuOpen ? styles.change : ''}`}
                onClick={toggleMenu}
            >
                <span className={`${styles.line} ${styles.firstLine}`}></span>
                <span className={`${styles.line} ${styles.secondLine}`}></span>
            </div>

            {menuOpen && (
                <div className={styles.menuExpanded}>
                    <ul className={styles.menuList}>
                        <li><a href="#">Carnicería</a></li>
                        <li><Link href="/categorySection">Frutas y verduras</Link></li>
                        <li><a href="#">Lácteos</a></li>
                        <li><a href="#">Higiene Personal</a></li>
                        <li><a href="#">Panadería</a></li>
                    </ul>
                </div>
            )}
        </div>
    );
}
