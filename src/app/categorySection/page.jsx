import styles from "./categorySection.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProductsListSection from "../components/ProductsListSection/ProductsListSection";
import vegetablesProducts from "../../data/vegetables_products.json";

export default function CategorySection() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <h1 className={styles.title}>Frutas y verduras</h1>
                <ProductsListSection productsData={vegetablesProducts} />
            </main>
            <Footer />
        </>
    );
}
