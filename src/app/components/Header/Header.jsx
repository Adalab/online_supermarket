"use client";
import styles from './Header.module.css';
import Link from "next/link";
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';

export default function Header() {
    return (
        <header className={styles.header}>
            <HamburgerMenu />
            <Link className={styles.link} href="/">
                <h1 className={styles.title}>El super del barrio</h1>
            </Link>
        </header>
    );
}
