import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <p>Hola qué ase</p>
            <Footer />
        </>
    );
}
