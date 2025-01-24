"use client";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import styles from "./page.module.css";
import { Roboto } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProductsList from "./components/ProductsList/ProductList";
import CookieConsent from "./components/CookieConsent/CookieConsent";
import Searcher from "./components/Searcher/Searcher";
import productsData from "../data/products.json";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    variable: "--font-roboto",
    subsets: ["latin"],
});

export default function Home() {
    const [isConsentVisible, setIsConsentVisible] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState(productsData);

    useEffect(() => {
        const cookieConsent = Cookies.get("cookieConsent");
        if (!cookieConsent) {
            setIsConsentVisible(true);
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookieConsent", "true", { expires: 7 });
        setIsConsentVisible(false);
    };

    const handleReject = () => {
        Cookies.set("cookieConsent", "false", { expires: 7 });
        setIsConsentVisible(false);
    };

    const handleConfigure = () => {
        console.log("Configure clicked");
    };

    const handleSearch = (query) => {
        if (!query) {
            setFilteredProducts(productsData);
            return;
        }
        const lowerCaseQuery = query.toLowerCase();
        const filtered = Object.entries(productsData).reduce((acc, [category, products]) => {
            acc[category] = products.filter((product) =>
                product.name.toLowerCase().includes(lowerCaseQuery)
            );
            return acc;
        }, {});
        setFilteredProducts(filtered);
    };

    return (
        <>
            {isConsentVisible && <div className={styles.overlay}></div>}
            <div className={`${roboto.variable}`}>
                <Header />
                <Searcher onSearch={handleSearch} />
                <main>
                    <ProductsList productsData={filteredProducts} />
                </main>
                <Footer />
                {isConsentVisible && (
                    <CookieConsent
                        onAccept={handleAccept}
                        onReject={handleReject}
                        onConfigure={handleConfigure}
                    />
                )}
            </div>
        </>
    );
}
