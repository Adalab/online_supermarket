import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductList.module.css";

const titles_sections = {
    offers: "Ofertas para alegrarte el día",
    fresh: "Lo más fresco",
    personal_care: "Cuidado personal",
    special_products: "Descuentos que no te puedes perder",
};

export default function ProductList({ productsData }) {
    const hasProducts = Object.values(productsData).some((products) => products.length > 0);

    if (!hasProducts) {
        return <p className={styles.noProductsMessage}>No hay productos que coincidan con la búsqueda.</p>;
    }

    return (
        <div className={styles.container}>
            {Object.entries(productsData).map(([category, products]) => {
                if (products.length === 0) return null;

                return (
                    <div key={category} className={styles.category}>
                        <h2 className={styles.categoryTitle}>{titles_sections[category]}</h2>
                        <div className={styles.productsGrid}>
                            {products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
