import styles from "./ProductsListSection.module.css";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductsListSection({ productsData }) {
    return (
        <div className={styles.container}>
            {productsData.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
}
