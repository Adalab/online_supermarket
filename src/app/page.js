import Image from "next/image";
import styles from "./page.module.css";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductsList from "./components/ProductsList/ProductList";

export default function Home() {
    return (
        <>
            <Header />
            <ProductsList />
            <Footer />
        </>
    );
}
