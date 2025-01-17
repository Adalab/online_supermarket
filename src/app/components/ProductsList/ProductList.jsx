import ProductCard from "../ProductCard/ProductCard";
import productsData from "../../../data/products.json";
import styles from "./ProductList.module.css";

const titles_sections = {
    offers: "Ofertas para alegrate el día",
    fresh: "Lo más fresco",
    "personal_care": "Cuidado personal",
    "special_products": "Descuentos que no te puedes perder"
}

export default function ProductList() {
    return (
        <div className={styles.container}>
            {Object.entries(productsData).map(([category, products]) => (
                <div key={category} className={styles.category}>
                    <h2 className={styles.categoryTitle}>{titles_sections[category]}</h2>
                    <div className={styles.productsGrid}>
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}