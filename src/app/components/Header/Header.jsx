"use client";
import styles from './Header.module.css';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function Header() {
    return (
        <header className={styles.header}>
            <HamburgerMenu />
            <h1 className={styles.title}>El super del barrio</h1>
        </header>
    );
}
