import Image from "next/image";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className={styles.image}
                />
            </div>
            <div className={styles.details}>
                <h3 className={styles.name}>{product.name}</h3>
                <p className={styles.price}>
                    {product.discount ? (
                        <>
                            <span className={styles.oldPrice}>
                                {product.price.toFixed(2)} €
                            </span>{" "}
                            <span className={styles.discountedPrice}>
                                {(product.price - product.discount).toFixed(2)} €
                            </span>
                        </>
                    ) : (
                        <span>{product.price.toFixed(2)} €</span>
                    )}
                </p>
                {product.pricePerKilo && (
                    <p className={styles.pricePerKilo}>
                        {product.pricePerKilo.toFixed(2)} €/kg
                    </p>
                )}
                <button className={styles.addButton}>Añadir</button>
            </div>
        </div>
    );
}
