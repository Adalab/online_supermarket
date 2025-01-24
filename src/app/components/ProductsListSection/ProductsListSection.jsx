import styles from "./ProductsListSection.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsListSection({ productsData }) {
    if (productsData.length === 0) {
        return <p className={styles.noProductsMessage}>No hay productos que coincidan con la búsqueda.</p>;
    }
    return (
        <div className={styles.container}>
            {productsData.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}
