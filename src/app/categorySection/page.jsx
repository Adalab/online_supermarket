"use client";
import { useState } from "react";
import styles from "./categorySection.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsListSection from "../components/ProductsListSection/ProductsListSection";
import Searcher from "../components/Searcher/Searcher";
import vegetablesProducts from "../../data/vegetables_products.json";

export default function CategorySection() {
    const [filteredProducts, setFilteredProducts] = useState(vegetablesProducts);

    const handleSearch = (query) => {
        if (!query) {
            setFilteredProducts(vegetablesProducts);
            return;
        }

        const lowerCaseQuery = query.toLowerCase();
        const filtered = vegetablesProducts.filter((product) =>
            product.name.toLowerCase().includes(lowerCaseQuery)
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <Header />
            <main className={styles.main}>
                <Searcher onSearch={handleSearch} />
                <h1 className={styles.title}>Frutas y verduras</h1>
                <ProductsListSection productsData={filteredProducts} />
            </main>
            <Footer />
        </>
    );
}
